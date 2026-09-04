/**
 * Consent state management.
 *
 * Deliberately free of React and of any UI concern: this module owns *what the
 * visitor has agreed to*, and nothing else. `components/cookie-consent.tsx`
 * renders the interface, `components/analytics.tsx` acts on the result, and
 * neither knows about the other. Adding or removing a tracked service should
 * mean editing the category's `services` list here and the loader there — not
 * touching the UI at all.
 *
 * Storage is `localStorage`, not a cookie. A consent record does not need to
 * reach the server (nothing server-side varies on it), and storing it in a
 * cookie would mean sending it on every request for no benefit. It is wrapped
 * in try/catch throughout because Safari private mode and "block all cookies"
 * settings make every storage access throw rather than return null.
 */

export const CONSENT_STORAGE_KEY = 'accounstone.cookie-consent';

/**
 * Bump when the categories or the services inside them change materially.
 * A stored record from an older version is treated as absent, so the banner
 * asks again rather than silently assuming the old answer still covers a new
 * tracker.
 */
export const CONSENT_VERSION = 1;

export type ConsentCategoryId = 'essential' | 'functional' | 'analytics' | 'marketing';

export interface ConsentCategory {
  id: ConsentCategoryId;
  label: string;
  /** Shown under the label in the preferences panel. Plain language, no jargon. */
  description: string;
  /** Essential cannot be switched off; the toggle renders as "Always on". */
  essential: boolean;
  /**
   * What is actually in this category today, named honestly. Where a category
   * is empty we say so rather than implying trackers that do not exist.
   */
  services: string[];
}

export const CONSENT_CATEGORIES: ConsentCategory[] = [
  {
    id: 'essential',
    label: 'Essential',
    description:
      'Required for the site to work — page delivery, security, and sending an enquiry you submit. Never used to track you.',
    essential: true,
    services: ['Website delivery', 'Enquiry form submission'],
  },
  {
    id: 'functional',
    label: 'Functional',
    description:
      'Remembers preferences so the site behaves the way you left it. Your cookie choice itself is always stored.',
    essential: false,
    services: [],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    description:
      'Helps us understand which pages are useful and where people get stuck, measured in aggregate.',
    essential: false,
    services: ['Google Analytics 4'],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description:
      'Would measure advertising campaigns and show relevant content. We run none of this today.',
    essential: false,
    services: [],
  },
];

/** Which categories the visitor has allowed. `essential` is always true. */
export type ConsentCategories = Record<ConsentCategoryId, boolean>;

export interface ConsentRecord {
  version: number;
  /** ISO 8601. Useful if the owner ever needs to evidence when consent was given. */
  timestamp: string;
  /** How the record was created, for the same reason. */
  method: 'accept-all' | 'reject-non-essential' | 'custom';
  categories: ConsentCategories;
}

export const DENY_ALL: ConsentCategories = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const ALLOW_ALL: ConsentCategories = {
  essential: true,
  functional: true,
  analytics: true,
  marketing: true,
};

/** Fired on the window whenever the stored record changes. */
export const CONSENT_CHANGED_EVENT = 'accounstone:consent-changed';
/** Fired to reopen the preferences panel from anywhere (e.g. the footer link). */
export const CONSENT_OPEN_EVENT = 'accounstone:consent-open';

function isCategories(value: unknown): value is ConsentCategories {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return CONSENT_CATEGORIES.every((c) => typeof v[c.id] === 'boolean');
}

/**
 * The stored record, or `null` when the visitor has not decided yet — which is
 * also what a corrupt, foreign or out-of-date record returns, so a bad value
 * can only ever result in *asking again*, never in assuming consent.
 */
export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== 'object' || parsed === null) return null;
    const record = parsed as Partial<ConsentRecord>;
    if (record.version !== CONSENT_VERSION) return null;
    if (!isCategories(record.categories)) return null;
    return {
      version: CONSENT_VERSION,
      timestamp: typeof record.timestamp === 'string' ? record.timestamp : new Date().toISOString(),
      method: record.method ?? 'custom',
      categories: { ...record.categories, essential: true },
    };
  } catch {
    return null;
  }
}

export function writeConsent(
  categories: ConsentCategories,
  method: ConsentRecord['method'],
): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    method,
    categories: { ...categories, essential: true },
  };
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Storage blocked. The choice still applies for this page view via the
      // event below; it simply cannot be remembered for the next one.
    }
    window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_CHANGED_EVENT, { detail: record }));
  }
  return record;
}

/** Current permissions, defaulting to deny for anyone who has not chosen. */
export function currentCategories(): ConsentCategories {
  return readConsent()?.categories ?? DENY_ALL;
}

export function hasConsented(category: ConsentCategoryId): boolean {
  return currentCategories()[category] === true;
}

/** Subscribe to changes. Returns an unsubscribe function. */
export function subscribeConsent(listener: (record: ConsentRecord) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (event: Event) => listener((event as CustomEvent<ConsentRecord>).detail);
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
}

/** Reopens the preferences panel. Used by the footer control. */
export function openConsentPreferences(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/**
 * Best-effort removal of a cookie this site's own domain can see.
 *
 * Used when analytics consent is withdrawn. A script already loaded into the
 * page cannot be unloaded, so withdrawal is handled in three parts: the
 * cookies are deleted here, Google's own `ga-disable-*` flag is set, and a
 * Consent Mode update is pushed. The next page load starts clean.
 */
export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  const hostname = window.location.hostname;
  // A cookie set on ".example.com" is not removed by expiring it on
  // "www.example.com", so every parent domain is tried.
  const domains = new Set<string>(['', hostname]);
  const parts = hostname.split('.');
  for (let i = 0; i < parts.length - 1; i++) domains.add('.' + parts.slice(i).join('.'));
  const expiry = 'Thu, 01 Jan 1970 00:00:00 GMT';
  for (const domain of domains) {
    document.cookie = `${name}=; expires=${expiry}; path=/${domain ? `; domain=${domain}` : ''}`;
  }
}
