'use client';

import { openConsentPreferences } from '@/lib/consent';

/**
 * "Cookie Settings" as an inline control inside a sentence on the cookie
 * policy page. Separate from the footer button because this one sits in running
 * text — WCAG 2.5.8 exempts links inline in a sentence from the 24px target
 * minimum, so it takes the underline treatment of surrounding prose instead of
 * the footer's padded block styling.
 */
export default function CookieSettingsInlineButton() {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="font-medium text-primary underline underline-offset-2 hover:text-accent"
    >
      Cookie Settings
    </button>
  );
}
