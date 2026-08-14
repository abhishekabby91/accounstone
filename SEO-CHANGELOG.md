# Accounstone SEO Changelog

## 2026-08-14

### `SEO-AUDIT.md`

**Changed:** Added the initial repository-wide SEO, content and UX audit.  
**Why:** Establish implementation priorities before broad page rewriting.  
**SEO purpose:** Create a stable roadmap and prevent unnecessary URL or design changes.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** No.

### `app/layout.tsx`

**Changed:** Removed global meta keywords and simplified the site-wide title, description and social metadata.  
**Why:** Global metadata was trying to represent too many individual services.  
**SEO purpose:** Keep global metadata concise and brand-focused.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Global metadata only.

### `lib/seo.ts`

**Changed:** Simplified the shared metadata helper, tightened self-canonical behavior, removed unused Review schema generation, removed the unsupported WebSite SearchAction pointing at a non-existent `/search` route, corrected the Organization logo to the actual production PNG, and limited Organization/Service market claims to US, UK and Australia.  
**Why:** Reduce schema errors, unsupported claims and conflicting SEO logic.  
**SEO purpose:** Make canonical, Open Graph and structured-data behavior more predictable.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Schema/SEO helper only.

### `app/sitemap.ts`

**Changed:** Removed generated `new Date()` last-modified values, added route deduplication, and kept the sitemap focused on useful indexable content.  
**Why:** A sitemap should not claim every URL was modified every time it is generated.  
**SEO purpose:** More accurate crawl/indexation signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Sitemap logic only.

### `lib/data.ts`

**Changed:** Replaced illustrative testimonial records with clearly labelled engagement themes and replaced credential-style trust badges with factual workflow/process statements.  
**Why:** The old content could be interpreted as client endorsements or unsupported credentials.  
**SEO purpose:** Improve factual accuracy and avoid misleading trust signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `components/testimonials-section.tsx`

**Changed:** Reframed the component from customer testimonials to `Common Engagement Themes`.  
**Why:** The repository does not currently contain verified, permissioned client testimonials.  
**SEO purpose:** Prevent illustrative content from appearing to be fabricated endorsements.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `app/page.tsx`

**Changed:** Removed the unsupported `24+ Years of Team Accounting Experience` statistic and replaced it with workflow-oriented statements. The engagement section now clearly describes common workflow situations rather than client testimonials.  
**Why:** Avoid unsupported claims while improving the practical positioning of the homepage.  
**SEO purpose:** Stronger trust, clearer entity positioning and better human usefulness.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/industries/cpa-firms/page.tsx`

**Changed:** Reworked the page around review queues, busy-season capacity, delegation boundaries, onboarding, software workflows and quality review. Removed a fixed productivity timeline claim.  
**Why:** CPA firm buyers need workflow detail rather than generic outsourcing language.  
**SEO purpose:** Strengthen the CPA-firm intent cluster and reduce unsupported claims.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/bookkeeping/united-states/page.tsx`

**Changed:** Expanded the page around what bookkeeping can include, what can be delegated, what normally remains with the client/CPA, month-end workflow and related internal resources.  
**Why:** Make the page answer the operational questions behind outsourced bookkeeping.  
**SEO purpose:** Improve U.S. bookkeeping intent coverage and contextual internal linking.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/tax-preparation/united-states/page.tsx`

**Changed:** Expanded the page around preparation scope, review/sign-off boundaries, tax-season workflow and related technology/resources.  
**Why:** Clarify what is delegated and what remains with the licensed tax professional.  
**SEO purpose:** Strengthen U.S. tax-preparation intent while avoiding overclaiming filing authority.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/services/audit-support/united-states/page.tsx`

**Changed:** Expanded the page around working papers, schedules, documentation, testing support, audit-team boundaries and related services.  
**Why:** Explain audit support as preparation work rather than implying Accounstone issues audit opinions.  
**SEO purpose:** Strengthen U.S. audit-support intent and improve factual clarity.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/industries/real-estate/page.tsx`

**Changed:** Refined the page around property-level bookkeeping, AP/AR, owner reporting, CAM reconciliation, Yardi workflows and multi-entity close. Compliance language was qualified by jurisdiction/scope.  
**Why:** Make real estate content genuinely workflow-specific.  
**SEO purpose:** Improve real-estate topical relevance without making universal compliance claims.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/technology/quickbooks/page.tsx`

**Changed:** Reworked the page around QuickBooks accounting workflows, cleanup, capacity, close and practical starting points. Removed unsupported certification claims and vendor-like language.  
**Why:** Technology pages should demonstrate workflow familiarity rather than pretend to be the software vendor.  
**SEO purpose:** Strengthen QuickBooks topical intent and connect it to bookkeeping services/resources.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `app/technology/xero/page.tsx`

**Changed:** Reworked the page around Xero setup, cleanup, reconciliation, AP/AR, month-end and capacity use cases.  
**Why:** Make the page useful to someone evaluating Xero-related accounting support.  
**SEO purpose:** Strengthen Xero topical intent and internal connections to bookkeeping/resources.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Yes.

### `AI-WEBSITE-GUIDE.md`

**Changed:** Added a persistent developer/AI handoff document covering positioning, SEO architecture, metadata, sitemap, schema, content tone, internal linking, URL policy, trust rules and future-agent restrictions.  
**Why:** Future development should preserve the reasoning behind the current architecture.  
**SEO purpose:** Prevent regressions and inconsistent SEO/content implementation.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Documentation only.

## Production crawl observation

A production crawl performed before the latest deployment still showed older homepage content containing CFO/finance positioning and illustrative client testimonials. Those items have been removed from the current `main` branch implementation. The live site should be re-crawled after the connected Vercel deployment becomes ready.

## URL policy

No existing public URL was renamed during this implementation pass.

## Owner verification TODOs

- [ ] Verify any QuickBooks certification claim before publishing it again.
- [ ] Verify any team-experience statistic before publishing it again.
- [ ] Verify exact wording/status of the Global Delivery Center claim.
- [ ] Verify any future certification/security-certification claims.
- [ ] Add genuine, permissioned client testimonials only when available.

If a claim cannot be verified, remove it rather than inventing a replacement.

## Next planned changes

- Audit remaining page-level metadata across the full route set.
- Strengthen contextual internal linking across all clusters.
- Review state pages for unique local value.
- Review Tier 2 pages and resource content.
- Run production build/type/lint validation and fix any errors.
- Re-crawl production after deployment.
