# Accounstone SEO Changelog

## 2026-08-14 (remove "financial services" / CFO positioning throughout the site)

Accounstone does not offer financial services, financial advisory, or CFO services — only accounting, bookkeeping, tax preparation support, payroll, AP/AR, and audit support. This pass removed language and links that claimed or implied otherwise. Standard accounting terminology that legitimately contains the word "financial" (financial statements, financial reporting, financial data/position, GAAP/IFRS financial reporting standards) was intentionally left in place — those are accurate descriptions of bookkeeping/accounting deliverables, not service-scope claims, and removing them would make the content less accurate.

### Broken links to a non-existent `/services/cfo-support` page (biggest finding)

**Changed:** Removed 10 internal links across `app/industries/technology`, `app/industries/healthcare`, `app/industries/professional-services`, `app/services/tax-preparation`, `app/services/audit-support`, `app/markets/united-kingdom`, `app/markets/united-states`, `app/markets/australia`, and `app/technology/netsuite`, all pointing to `/services/cfo-support` — a page that does not exist anywhere in `lib/data.ts` or the `app/services` route tree, and a service Accounstone does not provide. Replaced each with a real, existing related-service link (Audit Support, Tax Preparation, Accounting Services, etc.) where the list needed a replacement item, or simply removed the line.  
**Why:** These were both dead links (404s — bad for crawlability and UX) and a claim to offer CFO/financial-advisory services that isn't accurate.  
**SEO purpose:** Eliminates internal 404s and false service claims.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes (related-link lists only).

### `app/solutions/dedicated-accounting-teams/page.tsx`

**Changed:** Replaced "Dedicated CFO-level strategic guidance" with "Dedicated senior-level oversight and coordination", "CFO-level Lead + Multi-specialist team" with "Senior Accounting Lead + Multi-specialist team", "strategic financial partnership" (meta description) with "dependable, long-term accounting partnership", and "provide strategic financial guidance that drives growth" with "provide dependable accounting support that keeps pace with your growth".  
**Why:** CFO-level guidance and financial partnership/advisory positioning overclaim what the company does.  
**SEO purpose:** Accuracy; avoids implying a regulated advisory service.  
**URL changed:** No. **Metadata changed:** Yes (description). **Content changed:** Yes.

### `app/about/page.tsx`

**Changed:** Hero title "Building Better Financial Futures" → "Practical Accounting Support, Built to Last"; hero description no longer says "manage their finances"; mission copy "we deliver financial clarity and strategic guidance that drives growth" → "we deliver accurate books and dependable accounting support that helps your business run smoothly".  
**Why:** "Financial Futures" and "strategic guidance" read as financial-advisory/wealth-management positioning.  
**SEO purpose:** Accuracy on the company's own About page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/terms/page.tsx`

**Changed:** "Accounstone provides accounting, bookkeeping, tax, payroll, and related financial services" → "...tax preparation support, and payroll processing services" (removed the umbrella "financial services" claim from the Terms & Conditions itself).  
**Why:** A legal document should not describe the company's own offering using a category it doesn't provide.  
**SEO purpose:** N/A (legal accuracy).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/markets/united-kingdom/page.tsx`, `app/markets/united-states/page.tsx`, `app/markets/australia/page.tsx`

**Changed:** Removed "Financial services" from each page's "Industries We Serve" list (it isn't one of the six industries actually built out in `lib/data.ts`/`app/industries`). Removed "CFO and financial advisory services" from the US page's tax-services list.  
**Why:** These implied Accounstone serves the financial-services industry vertical and/or offers CFO/advisory services, neither of which is accurate or backed by an actual page.  
**SEO purpose:** Accuracy; these lists still don't fully match the real industries architecture (see note below).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/solutions/staff-augmentation/page.tsx`

**Changed:** "Bring in specialists for areas like tax, audit, or financial advisory" → "...or specialized accounting support".  
**SEO purpose:** Accuracy.

### `app/solutions/back-office-support/page.tsx`

**Changed:** "Financial analysis and forecasting" → "Financial reporting and trend summaries".  
**Why:** "Forecasting" implies FP&A/advisory work beyond back-office bookkeeping scope.  
**SEO purpose:** Accuracy.

### `app/services/bookkeeping/page.tsx`

**Changed:** "Professional bookkeeping is the foundation of financial management" → "...the foundation of accurate, reliable accounting records".  
**Why:** "Financial management" is a broader category claim than bookkeeping.  
**SEO purpose:** Accuracy.

### Note for a future pass

The "Industries We Serve" lists on the three market pages (UK/US/Australia) still include several industries (Manufacturing, Non-profit, Construction, Hospitality, Mining, Agriculture, etc.) that aren't part of the site's actual six-industry architecture in `lib/data.ts`/`app/industries`. That's a broader content-accuracy question beyond this "financial"/CFO cleanup and worth a dedicated review.

## 2026-08-14 (homepage hero: remove AI-generated carousel images)

### `app/page.tsx`, `public/carousel-accounting-team.png` (deleted), `public/carousel-global-team.png` (deleted)

**Changed:** Removed the first two homepage hero carousel slides, which used AI-generated stock images. Both had visible AI-generation artifacts (garbled on-screen text, a fabricated "Acuity Financial Partners" logo rendered on an office wall in the first image, distorted hands/objects in the second). Replaced them with two already-present, genuine stock photos (`carousel-budget-planning.jpg`, `carousel-worldwide.jpg`) that were sitting unused in `public/`. The third slide (`carousel-tax-returns.jpg`, a real stock photo) was kept as-is.  
**Why:** AI-generated imagery with visible artifacts (and an unrelated fake competitor/company logo) undermines trust on the highest-visibility part of the homepage.  
**SEO purpose:** No ranking impact expected; this is a trust/brand-integrity fix. Alt text was updated to match the new images.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes (hero slide images, alt text, ids). Titles/subtitles per slide were kept as-is since they already matched the intended message, not the specific photo.

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

- Strengthen contextual internal linking across all clusters.
- Review state pages for unique local value.
- Review Tier 2 pages and resource content.
- Set up ESLint config (`next lint` currently prompts for first-time setup; not run in CI yet).
- Re-crawl production after deployment.

## 2026-08-14 (build verification + crawlability/responsiveness pass)

This pass followed up on the "Next planned changes" items from the audit above: running a real production build (crawlability depends on the site actually deploying) and auditing page-level metadata and responsive image handling across the full route set.

### `app/resources/guides/questions-to-ask-before-outsourcing-bookkeeping/page.tsx`

**Changed:** Added the required `publishedDate`, `section`, and `slug` props to the `ArticleLayout` call.  
**Why:** `next build` failed a type check on this page (missing required props), which would have blocked production deployment entirely — i.e. the whole site would not have been crawlable/live until this was fixed.  
**SEO purpose:** Restore a working production build; this also fixes the Article schema and breadcrumb generation for this page, which depend on those props.  
**URL changed:** No.  
**Metadata changed:** No (schema/structured data only).  
**Content changed:** No visible content change.

### `app/contact/layout.tsx` (new file)

**Changed:** Added a route-level layout that supplies page-specific metadata (title, description, canonical, Open Graph/Twitter) via `generateMetadata()` from `lib/seo.ts`.  
**Why:** `/contact` is a `'use client'` page (it holds form state), so it cannot export Next.js `metadata` directly. It was the only route in the app with no page-specific metadata and was silently inheriting only the generic site-wide title/description.  
**SEO purpose:** A high commercial-intent page (contact/conversion) now has its own title, description and canonical instead of a generic fallback.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** No.

### `components/SectorSection.tsx`

**Changed:** Added a `sizes` attribute to the `<Image fill>` usage in the sector/industry card grid.  
**Why:** A Next.js `fill` image with no `sizes` prop defaults to requesting a full-viewport-width image on every breakpoint, including mobile, which works visually but is wasteful and can hurt mobile LCP/Core Web Vitals.  
**SEO purpose:** Better mobile performance signal; no visual change.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** No.

### Verification performed, no changes needed

- Confirmed every other `app/**/page.tsx` exports `metadata` or `generateMetadata`.
- Confirmed `app/robots.ts` and `app/sitemap.ts` point at the production domain and exclude non-indexable routes.
- Confirmed root `viewport` meta (`width=device-width, initialScale=1`) is set in `app/layout.tsx`.
- Confirmed the mobile navigation (`components/navbar.tsx`) has a working toggle with `aria-expanded`/`aria-controls`/`aria-label` and closes on Escape.
- Confirmed responsive (`sm:`/`md:`/`lg:`) classes are used throughout the homepage, navbar, footer and hero carousel.
- Ran a full `next build`: all 69 routes now compile and prerender as static content with no type errors.

### Next planned changes (updated)

- Strengthen contextual internal linking across all clusters.
- Review state pages for unique local value.
- Review Tier 2 pages and resource content.
- Set up ESLint config (`next lint` prompts for first-time setup; not run yet) and fix any lint findings.
- Manual/visual responsive QA at 375px, 768px and 1280px viewports (this pass checked code-level responsive patterns, not rendered screenshots).
- Re-crawl production after deployment and confirm the `/contact` metadata and Article schema fix are live.
