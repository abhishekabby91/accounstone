# Route Registry

Source of truth for every indexable route on accounstone.com. Generated from a full repository audit on 2026-08-21 (see the Growth System Audit delivered that date). Update this file in the same pass as any change that adds, removes, or re-scopes a route — don't let it drift from `app/**/page.tsx` the way `app/sitemap.ts` did once before (see `AI-WEBSITE-GUIDE.md`, "Known build gotchas").

Type key: **B** commercial SEO page · **C** blog/guide/informational · **E** proof · **Hub** index/directory page · **Corp** non-cluster company page (intentionally outside the SEO cluster architecture).

## Services

| URL | Type | Cluster | Region variants | Status |
|---|---|---|---|---|
| `/services` | Hub | — | — | Published |
| `/services/bookkeeping` | B | Bookkeeping | `/united-states`, `/united-kingdom`, `/australia` | Published |
| `/services/accounting` | B | Accounting Services | `/united-states` | Published |
| `/services/tax-preparation` | B | Tax Preparation | `/united-states`, `/united-kingdom`, `/australia` | Published |
| `/services/payroll` | B | Payroll | `/united-states`, `/united-kingdom`, `/australia` | Published |
| `/services/accounts-payable` | B | Accounts Payable | `/united-states`, `/united-kingdom`, `/australia` | Published |
| `/services/accounts-receivable` | B | Accounts Receivable | `/united-states`, `/united-kingdom`, `/australia` | Published |
| `/services/audit-support` | B | Audit Support | `/united-states`, `/united-kingdom`, `/australia` | Published |

## Solutions (engagement models)

| URL | Type | Status |
|---|---|---|
| `/solutions` | Hub | Published |
| `/solutions/offshore-accounting-support` | B | Published |
| `/solutions/staff-augmentation` | B | Published |
| `/solutions/dedicated-accounting-teams` | B | Published |
| `/solutions/back-office-support` | B | Published |

## Markets

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/markets` | Hub | — | Published |
| `/markets/united-states` | B | `/texas`, `/california`, `/florida` | Published |
| `/markets/united-kingdom` | B | — | Published |
| `/markets/australia` | B | — | Published |

Canada is not a route. See `knowledge/company/identity.md` — open business decision, not an engineering gap.

## Industries

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/industries` | Hub | — | Published |
| `/industries/cpa-firms` | B | — | Published — site's declared Tier-1 audience |
| `/industries/technology` | B | — | Published |
| `/industries/healthcare` | B | — | Published |
| `/industries/ecommerce` | B | — | Published |
| `/industries/real-estate` | B | `/yardi-accounting-outsourcing-texas` | Published |
| `/industries/professional-services` | B | — | Published |

## Technology

| URL | Type | Status |
|---|---|---|
| `/technology` | Hub | Published |
| `/technology/quickbooks` | B | Published |
| `/technology/xero` | B | Published |
| `/technology/sage` | B | Published |
| `/technology/netsuite` | B | Published |
| `/technology/drake-tax` | B | Published |
| `/technology/cch` | B | Published |
| `/technology/myob` | B | Published |

## Resources — Blog

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/blog` | Hub | — | Published |
| `/blog/outsourced-bookkeeping-guide` | C | Bookkeeping | Re-scoped 2026-08-21 (see CONTENT-REGISTRY) |
| `/blog/accounts-payable-outsourcing` | C | Accounts Payable | Re-scoped 2026-08-21 |
| `/blog/accounts-receivable-management` | C | Accounts Receivable | Published — no conflict |
| `/blog/outsourced-payroll-services` | C | Payroll | Re-scoped 2026-08-21 |
| `/blog/outsourced-accounting-services` | — | Accounting Services | **Removed 2026-08-21** — 301 redirect to `/resources/guides/outsourced-accounting-services-guide` in `next.config.mjs`, see CONTENT-REGISTRY |
| `/blog/tax-preparation-outsourcing` | C | Tax Preparation | Published — no conflict |
| `/blog/audit-support-services` | C | Audit Support | Published — no conflict |

## Resources — Guides

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/resources/guides` | Hub | — | Published |
| `/resources/guides/outsourced-bookkeeping-cost-guide` | C | Bookkeeping | Published — primary owner of cost intent |
| `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | C | Bookkeeping | Published |
| `/resources/guides/quickbooks-vs-xero-comparison` | C | Technology | Published |
| `/resources/guides/staff-augmentation-tax-season-guide` | C | CPA Firms | Published |
| `/resources/guides/outsourced-accounting-services-guide` | C | Accounting Services | Published — sole owner of this intent since 2026-08-21 merge |
| `/resources/guides/outsourced-accounts-payable-guide` | C | Accounts Payable | Published — primary owner of scope intent |
| `/resources/guides/outsourced-accounts-receivable-guide` | C | Accounts Receivable | Published |
| `/resources/guides/outsourced-payroll-processing-guide` | C | Payroll | Published — primary owner of coverage-by-region intent |
| `/resources/guides/how-to-choose-accounting-outsourcing-partner` | C | CPA Firms | Published |
| `/resources/guides/client-accounting-services-cas-guide` | C | CPA Firms | Published |
| `/resources/guides/choosing-an-engagement-model` | C | Solutions | Published 2026-08-21 — fills the comparison gap flagged in the audit |

## Resources — Insights & Case Studies

| URL | Type | Status |
|---|---|---|
| `/resources/insights` | Hub | Published |
| `/resources/insights/asc-606-revenue-recognition-saas` | C | Published |
| `/resources/insights/sales-tax-nexus-ecommerce-guide` | C | Published |
| `/resources/case-studies` | E | Published — correctly labeled illustrative scenarios, not real client stories |

## Delivery Framework / Trust

| URL | Type | Status |
|---|---|---|
| `/delivery-framework/onboarding` | Trust | Published |
| `/delivery-framework/communication` | Trust | Published |
| `/delivery-framework/quality-assurance` | Trust | Published |
| `/compliance` | Trust | Published |
| `/data-security` | Trust | Published |

## Company / Corporate

| URL | Type | Status |
|---|---|---|
| `/` | Corp | Published |
| `/about` | Corp | Published |
| `/contact` | Corp | Published |
| `/privacy` | Corp | Published |
| `/terms` | Corp | Published |

---

**89 routes total**, plus one 301 redirect (`/blog/outsourced-accounting-services` → the accounting-services guide). Verified 2026-08-21: 89 page files, 89 sitemap URLs, exact parity — no dead sitemap entries and no unlisted pages.

Before adding a route: check this file, `SEARCH-INTENTS.md`, and `CONTENT-REGISTRY.md` for an existing owner of the intent. Before removing one: search all internal references and add a redirect — see `AI-WEBSITE-GUIDE.md`.

## Re-running the drift check

`app/sitemap.ts` mixes hardcoded `path:` entries with URLs auto-generated from `lib/data.ts`, so grepping the source undercounts. Diff against the **generated** sitemap instead, with the dev server running:

```bash
find app -name "page.tsx" | sed 's|^app||; s|/page.tsx$||; s|^$|/|' | sort > /tmp/disk.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>' \
  | sed 's|<loc>https://www.accounstone.com||; s|</loc>||; s|^$|/|' | sort -u > /tmp/sitemap.txt
comm -13 /tmp/disk.txt /tmp/sitemap.txt   # in sitemap, no page  -> would 404
comm -23 /tmp/disk.txt /tmp/sitemap.txt   # page exists, unlisted -> not crawled
```

Both should print nothing. This is the check that catches the failure mode recorded in `AI-WEBSITE-GUIDE.md` ("Known build gotchas") — it found four unlisted guides on 2026-08-21.
