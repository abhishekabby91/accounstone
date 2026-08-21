# Content Registry

Tracks blog/guide/insight content specifically (not every route — see `ROUTES.md` for the full site). Check here before writing new informational content on a topic that might already be covered.

| Title | URL | Cluster | Primary intent | Status | Last updated |
|---|---|---|---|---|---|
| Outsourced Bookkeeping: What to Expect, Software Workflows, and Red Flags to Watch For | `/blog/outsourced-bookkeeping-guide` | Bookkeeping | Day-to-day workflow, red flags | Re-scoped | 2026-08-21 |
| How Much Does Outsourced Bookkeeping Cost? A Practical Guide | `/resources/guides/outsourced-bookkeeping-cost-guide` | Bookkeeping | Cost/pricing (has `CostEstimator` widget) | Stable | 2026-07-25 |
| 9 Questions to Ask Before Outsourcing Your Bookkeeping | `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | Bookkeeping | Evaluation checklist | Stable | — |
| Outsourced Accounting Services: What's Included, What Costs What, and How to Start | `/blog/outsourced-accounting-services` | Accounting Services | Cost/buyer-journey | **Flagged — see below** | 2026-08-14 |
| Outsourced Accounting Services: Month-End Close, GAAP vs IFRS, and QuickBooks to NetSuite | `/resources/guides/outsourced-accounting-services-guide` | Accounting Services | Close mechanics, standards | **Flagged — see below** | 2026-08-14 |
| Outsourced Payroll: Costs, Bank-Access Red Flags, and What to Watch Out For | `/blog/outsourced-payroll-services` | Payroll | Cost, bank-access line, pitfalls | Re-scoped | 2026-08-21 |
| Outsourced Payroll Processing: What It Actually Covers (US, UK & Australia) | `/resources/guides/outsourced-payroll-processing-guide` | Payroll | Coverage by jurisdiction | Stable | 2026-08-14 |
| Accounts Payable Outsourcing: Fraud Controls, Software Workflows, and Real Costs | `/blog/accounts-payable-outsourcing` | Accounts Payable | Fraud controls, operational detail | Re-scoped | 2026-08-21 |
| What Does Outsourced Accounts Payable Actually Include? | `/resources/guides/outsourced-accounts-payable-guide` | Accounts Payable | Control & authority framework | Stable | 2026-08-14 |
| Outsourcing Accounts Receivable: A Practical Guide for Business Owners | `/blog/accounts-receivable-management` | Accounts Receivable | General practical guide | Stable — differentiated from guide below | 2026-08-14 |
| Outsourced Accounts Receivable: DSO, Collections & Software Workflows | `/resources/guides/outsourced-accounts-receivable-guide` | Accounts Receivable | DSO/collections operational detail | Stable | 2026-08-14 |
| Outsourcing Tax Return Preparation: What CPA Firms and Businesses Need to Know | `/blog/tax-preparation-outsourcing` | Tax Preparation | Buyer-journey overview | Stable | 2026-08-14 |
| Audit Support Outsourcing: What Preparation Work Can Be Delegated (and What Cannot) | `/blog/audit-support-services` | Audit Support | Scope boundary | Stable | 2026-08-14 |
| How CPA Firms Can Handle Tax-Season Capacity Without Overhiring | `/resources/guides/staff-augmentation-tax-season-guide` | CPA Firms | Seasonal capacity | Stable | — |
| Client Accounting Services (CAS): A Guide for CPA Firms | `/resources/guides/client-accounting-services-cas-guide` | CPA Firms | Engagement-model education | Stable | — |
| How to Choose an Accounting Outsourcing Partner | `/resources/guides/how-to-choose-accounting-outsourcing-partner` | CPA Firms | Vendor evaluation | Stable | — |
| QuickBooks Online vs. Xero: Which Fits Your Business? | `/resources/guides/quickbooks-vs-xero-comparison` | Technology | Software comparison | Stable | — |
| ASC 606 Revenue Recognition for SaaS: A Quick Explainer | `/resources/insights/asc-606-revenue-recognition-saas` | Insights | Specialist explainer | Stable | — |
| Sales Tax Nexus: What E-Commerce Sellers Need to Track | `/resources/insights/sales-tax-nexus-ecommerce-guide` | Insights | Specialist explainer | Stable | — |

## Open item: Accounting Services blog/guide pair

`/blog/outsourced-accounting-services` and `/resources/guides/outsourced-accounting-services-guide` overlap at the paragraph level, not just the topic level — several sections (the "what accounting operations covers" list, the month-end close checklist, the GAAP/FRS 102/AASB summary) are near-identical between the two. This is deeper than the bookkeeping/payroll/AP pairs, which had genuinely different framing (concrete pricing tables vs. a scope-first framework; jurisdiction coverage vs. cost/pitfalls) once re-scoped on 2026-08-21.

A light title/intro edit won't fix paragraph-level duplication. The two real options are:
1. **Merge** — retire the blog URL with a 301 to the guide, consolidating into one deeper page. Requires a URL change and a decision on which title/angle survives.
2. **Deepen and differentiate** — keep both, but rewrite the blog's body around the buyer-journey angle its title promises (included/cost/how to start) instead of repeating the guide's technical close-mechanics content.

Either requires an explicit decision — a URL change is out of scope for an unsupervised content pass per this system's own approval policy. Flagged for the site owner; not resolved by this pass.

## Resolved gap: UK/AU payroll, AP, AR pages

The Growth System Audit (2026-08-21, §06) flagged that payroll, AP, and AR had no dedicated UK/AU pages while bookkeeping, tax preparation, and audit support did. Closed the same day: added `/services/payroll/{united-kingdom,australia}`, `/services/accounts-payable/{united-kingdom,australia}`, and `/services/accounts-receivable/{united-kingdom,australia}` — each with genuine regional detail (RTI/PAYE/NI/auto-enrolment and STP/superannuation/PAYG for payroll; input VAT/MTD/CIS and GST/ABN/RCTI for AP; GBP/VAT and AUD/GST invoicing for AR), not a find-and-replace of the U.S. page. Navbar, sitemap, and both market pages' service grids updated to point at the new pages instead of falling back to the generic overview. `/services/accounting` remains U.S.-only by design — no UK/AU page exists yet, and none was claimed in the navbar or market pages.

## Content gap: engagement-model comparison

No page compares the four `/solutions/*` pages (offshore accounting support, staff augmentation, dedicated accounting teams, back-office support) against each other. The CAS guide and "how to choose a partner" guide partially cover the decision but neither is a direct model-vs-model comparison. Candidate for Stage 6 (new content) once Stage 1–2 registries are in place — see the Growth System Audit, §09.
