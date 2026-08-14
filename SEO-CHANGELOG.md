# Accounstone SEO Changelog

## 2026-08-14

### `SEO-AUDIT.md`

**Changed:** Added the initial repository-wide SEO, content and UX audit.  
**Why:** Establish the implementation priorities before broad page rewriting.  
**SEO purpose:** Create a stable content/technical roadmap and prevent unnecessary URL or design changes.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** No.

### `app/layout.tsx`

**Changed:** Removed the global `keywords` metadata array and simplified the global title/description/Open Graph/Twitter descriptions.  
**Why:** Global metadata was trying to cover too many individual services and search phrases.  
**SEO purpose:** Keep site-wide metadata concise, topical and human-readable.  
**URL changed:** No.  
**Metadata changed:** Yes.  
**Content changed:** Global metadata only.

### `app/sitemap.ts`

**Changed:** Removed the generated `new Date()` `lastModified` value and added route deduplication. Legal pages that have little search intent are excluded while useful trust/delivery pages remain.  
**Why:** A sitemap should contain useful canonical URLs and should not claim every page was modified today.  
**SEO purpose:** More accurate crawl/indexation signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Sitemap logic only.

### `lib/data.ts`

**Changed:** Replaced illustrative testimonial records with clearly labelled engagement themes and replaced credential-style trust badges with factual workflow/process statements.  
**Why:** The old content could be interpreted as client endorsements or unsupported credentials.  
**SEO purpose:** Improve factual accuracy and trustworthiness; avoid misleading Review/credential signals.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `components/testimonials-section.tsx`

**Changed:** Reframed the component from customer testimonials to `Common Engagement Themes`.  
**Why:** The repository does not currently contain verified, permissioned client testimonials.  
**SEO purpose:** Prevent the presentation from implying fabricated endorsements.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

### `app/page.tsx`

**Changed:** Removed the unsupported `24+ Years of Team Accounting Experience` homepage statistic and replaced the panel with factual workflow-oriented statements. The homepage engagement section now explicitly describes common workflow themes rather than client testimonials.  
**Why:** Avoid unsupported claims while keeping the page useful and conversion-focused.  
**SEO purpose:** Stronger trust and clearer business positioning.  
**URL changed:** No.  
**Metadata changed:** Yes, homepage metadata refined.  
**Content changed:** Yes.

## URL policy

No existing public URL was renamed as part of this audit/implementation pass.

## Next planned changes

- Refine Tier 1 commercial pages.
- Strengthen contextual internal links.
- Review page-level metadata across all indexable routes.
- Improve technology and industry content around real workflows.
- Review state pages for unique local value before expanding the location cluster.
- Run build/type/lint checks after the Tier 1 pass.
