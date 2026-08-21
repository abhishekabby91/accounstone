# Company Identity

Single source of truth for factual business information. Every value here is mirrored in `lib/data.ts` (`companyInfo`) and rendered on the site.

**Rule: never change a value in this file without evidence from the client.** Agents may read and cite; only a human may edit.

---

## Verified

| Field | Value | Rendered in |
|---|---|---|
| Name | Accounstone | `companyInfo.name`, Organization schema |
| Tagline | Outsourced Accounting \| Tax \| Audit \| Bookkeeping | Footer, page titles, PWA manifest |
| Website | https://www.accounstone.com | canonical, `baseUrl` |
| Email | partner@accounstone.com | header bar, footer, ContactPoint schema |
| Phone | +91 99905 97192 | header bar, ContactPoint schema |
| Delivery centre | Global Delivery Center - New Delhi, India | footer |
| Markets served | United States, United Kingdom, Australia | market pages, `areaServed: ['US','GB','AU']` |

## Social profiles (in Organization `sameAs`)

- LinkedIn — https://www.linkedin.com/company/accounstone/
- Facebook — https://www.facebook.com/profile.php?id=61591501869187
- Instagram — https://www.instagram.com/accounstone
- YouTube — https://www.youtube.com/@accounstone

## Service lines

Bookkeeping · Accounting · Tax Preparation · Payroll · Accounts Payable · Accounts Receivable · Audit Support

Region-specific deep-dive pages exist for bookkeeping, tax preparation and audit support in all three markets.

## Solutions (engagement models)

Offshore Accounting Support · Staff Augmentation · Dedicated Accounting Teams · Back Office Support

## Industries (six — each has a dedicated page)

CPA Firms · Technology · Healthcare · E-Commerce · Real Estate · Professional Services

## Platforms supported

QuickBooks · Xero · NetSuite · Sage · Drake Tax · CCH Axcess · MYOB

Support means the recurring accounting work inside an existing setup — never implementation. See `scope-boundaries.md` §5.

## Trust signals (as currently published)

- NDA-backed engagements
- Security-first data handling
- Documented workflows and review
- SOC 2: **actively working toward — not yet held.** Never describe as achieved.

---

## Unverified — do not publish

| Claim | Source | Status |
|---|---|---|
| Serves Canada | Third-party directory | No site content. Needs client confirmation. |
| "Financial reporting" as a service line | Third-party directory | Conflicts with scope boundary §1. Needs decision. |

## Not on file — ask before writing

Founding year · Legal entity name · Team size · Registered office address (distinct from delivery centre) · Named client references · Verifiable case study outcomes

If a page needs one of these, ask. Do not estimate.
