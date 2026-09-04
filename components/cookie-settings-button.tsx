'use client';

import { openConsentPreferences } from '@/lib/consent';

/**
 * The footer control that reopens the preferences panel.
 *
 * A client island rather than a prop on the footer, because `footer.tsx` is a
 * server component and should stay one — this is the same approach
 * `inquiry-trigger.tsx` takes. It is styled to match the legal links beside it
 * exactly, including the `inline-block py-1.5` that keeps it above the 24px tap
 * target minimum documented in CLAUDE.md.
 */
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="inline-block py-1.5 text-white/50 hover:text-white transition-colors text-xs md:text-sm leading-5"
    >
      Cookie Settings
    </button>
  );
}
