'use client';

import { useEffect } from 'react';

/**
 * Fires the lead conversion signal once, on the thank-you page.
 *
 * Google Ads and Meta can both count a conversion purely from the destination
 * URL, so this is not what makes the page work as a conversion target - it is
 * the extra signal that makes the same event visible inside GA4, where a
 * destination URL alone only shows as a pageview.
 *
 * `generate_lead` is GA4's own recommended event name for exactly this, which
 * matters: recommended events populate the standard reports and can be imported
 * into Google Ads as a conversion without extra configuration. A custom name
 * would need setting up by hand.
 *
 * Guarded on `window.gtag` existing, so the page still renders normally when
 * analytics is blocked, still loading, or removed later.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionEvent() {
  useEffect(() => {
    window.gtag?.('event', 'generate_lead', {
      event_category: 'inquiry',
      event_label: 'inquiry_form_submitted',
    });
  }, []);

  return null;
}
