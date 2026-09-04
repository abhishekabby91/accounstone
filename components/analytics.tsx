'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  CONSENT_CHANGED_EVENT,
  type ConsentRecord,
  currentCategories,
  deleteCookie,
} from '@/lib/consent';

/**
 * GA4, loaded only once analytics consent exists.
 *
 * This is the half of the consent system that actually does something. The
 * banner is only an interface; without this file it would be decoration.
 *
 * Two mechanisms, deliberately both:
 *
 * 1. **The script is not rendered at all until consent.** No request to
 *    googletagmanager.com, no `_ga` cookie, nothing to clean up. This is the
 *    strict reading of prior consent and it is the one that matters.
 * 2. **Consent Mode v2 defaults are set to denied first**, by the inline
 *    snippet in `app/layout.tsx`'s <head> — it runs before anything here, makes
 *    no request and sets no cookie. Belt and braces: if a tag is ever added
 *    through Google Tag Manager rather than here, it inherits a denied default
 *    instead of firing freely.
 *
 * Withdrawal is best-effort and honestly so: a script already in the page
 * cannot be unloaded. Three things happen instead — a Consent Mode update, the
 * `ga-disable-*` flag Google documents for exactly this, and deletion of the
 * cookies. The next page load renders no script at all.
 */

const GA_MEASUREMENT_ID = 'G-D1L72NM0GY';

/** GA4's own first-party cookies. `_ga_<container>` is the session/state one. */
const GA_COOKIES = ['_ga', `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, '')}`, '_gid'];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export default function Analytics() {
  // Starts false on the server and on first client render, so the markup
  // matches and there is no hydration mismatch. The effect below is the only
  // thing that can turn it on.
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const apply = (allowed: boolean) => {
      setAnalyticsAllowed((wasAllowed) => {
        if (wasAllowed && !allowed) {
          // Withdrawn. Stop collection and clear what was already set.
          window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
          window.gtag?.('consent', 'update', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
          GA_COOKIES.forEach(deleteCookie);
        }
        if (allowed) {
          window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
          window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
        }
        return allowed;
      });
    };

    apply(currentCategories().analytics);

    const onChange = (event: Event) => {
      apply((event as CustomEvent<ConsentRecord>).detail.categories.analytics);
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  if (!analyticsAllowed) return null;

  return (
    <>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','update',{analytics_storage:'granted'});
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
