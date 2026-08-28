# Accounstone SEO Changelog

## 2026-08-28 (About page rewrite; favicon un-cropped)

### About page

`/about` rewritten from copy supplied by the owner: an opening on milestones,
support areas, people and shared knowledge, technology, four engagement models,
a transparency section, data security and working environments, reach across the
three markets, the founder story, and a closing "More Milestones. More
Possibilities."

Two editorial decisions on top of the supplied copy:

- The "areas we may support" and "technology we may work with" lists render as
  real internal links (to `/services/*/united-states`, `/solutions/*`,
  `/technology/*`) rather than plain text, so the page contributes to the link
  graph instead of being a dead end. "Working Across Borders" links the three
  `/markets/*` pages with their flags.
- The page's hedged register ("may", "can", "is being built") is the owner's own
  and was kept. It reads carefully rather than confidently, which is the correct
  side to err on given `scope-boundaries.md`.

Title was shipping as `About Accounstone | Accounstone` — the layout template
appends the brand to a title that already carried it. Now absolute:
`About Accounstone | Outsourced Accounting Support Team`.

Measured: 1,290 words, one `h1`, canonical present, Organization + AboutPage +
BreadcrumbList schema intact, 0.2% worst 5-gram overlap against all 83 other
routes, no banned phrase or scope-boundary claim.

**Two items for the owner, not resolved here:**

1. The support list includes **financial reporting**.
   `knowledge/company/identity.md` still records that as "Needs decision"
   (conflicts with scope boundary §1 as a *service-line name*). It is published
   here as a support area linking to `/services/accounting/united-states`, not as
   a named service line, which stays inside the boundary — but `identity.md` is
   human-edit-only and still says undecided.
2. The **Microsoft Azure virtual desktop** claim is an owner assertion about
   Accounstone's own infrastructure. Nothing in `knowledge/` corroborates it; it
   is published on the owner's authority.

### Favicon

The icon set had been tiered: 16 and 32 used a tighter 24% inset crop on the
theory that the mark's two outer frames collapse into noise at small sizes. What
it actually did was clip the S and the foot of the A — and that clipped version
is what Google was serving in search results.

Every size is now rendered from one uncropped square: the mark's ink box
(x 48-284, y 43-253 of `accounstone-logo-horizontal.png`) centred at 84% of a
white square. `favicon.ico` (16/32/48), `icon-16x16`, `icon-32x32`,
`apple-touch-icon` (180), `icon-192`, `icon-512`, and `icon-maskable-512` (mark
at 55% so a circular OS mask cannot clip it). 16px is softer than the old crop;
the mark is whole, which is the trade that matters in a SERP.

Google re-crawls favicons on its own schedule — expect days, not hours, before
search results update.

**URL changed:** No. **Metadata changed:** `/about` title. **Content changed:**
`/about`.

## 2026-08-27 (design pass: type system, Resources, tap targets)

Visual and accessibility work, no architecture change.

### Typography

The brand defined `--font-serif` (Georgia) and nothing used it. Display and
section headings are now serif, body and UI stay sans - 165 headings across 47
files plus both hero components. No new colours or fonts were introduced; this
is the existing palette applied with more intent.

### Resources

`lib/resources.ts` became the single source of truth for guides, insights and
blog articles, each carrying factual topic and region classifications. Counts
and the topic index on the hub derive from it, so they cannot drift from the
content.

The hub gained a stat strip, a featured "start here" guide, section cards with
counts, a latest-guides list, and a topic index where each topic links through
to the service page that work sits behind. Guides and insights share a
`ResourceCard` with topic and region chips and an accent rail that carries
hierarchy. Case studies became numbered scenarios with a Situation / Approach /
Outcome rail, and the "illustrative, not real client work" disclaimer is now a
visible notice rather than a line inside the intro paragraph.

Listings stay one per row - these titles run 60-90 characters and wrap badly at
half width, which `CLAUDE.md` already records.

### Tap targets - the substantive finding

A Playwright sweep across 20 pages x 7 widths found **73 links below the WCAG
2.5.8 24px minimum**: 65 breadcrumb links, 8 more with no className at all, the
`/services` industry and technology lists, and the contact page's email and
phone - the page's primary conversion targets - at 19px.

WCAG 2.5.8 exempts links inline in a sentence. None of these qualified: they
are navigation, lists and contact details. All are now at least 24px. One of
them was introduced by the previous content pass and had quietly broken the
"homepage has no tap target under the minimum" invariant recorded in
`CLAUDE.md`.

This is worth recording as a method note: the previous responsive work was
verified by screenshot, which is why 73 undersized targets survived it. Sizes
have to be measured.

### Verification

Playwright across 320, 375, 390, 768, 1024, 1280 and 1440px on 20 pages: no
horizontal overflow, nothing outside the viewport, no tap target under 24px.
Crawl after: 84 routes all 200, 0 broken internal links, 0 links to redirects,
0 orphans, no duplicate titles or H1s. `pnpm eslint .` silent; build clean.

## 2026-08-27 (content pass: region-specific narrative on the commercial pages)

Follow-up to the restructure. The 21 Service x Region pages were
architecturally correct but read as feature inventories - scope checklists,
delegated/retained lists and numbered steps, with very little prose. The
guide asks for the opposite.

### What was added

One narrative section per page (`lib/regional-context.ts`, rendered by
`components/regional-context.tsx`), written against the content-psychology
principles in `AI-WEBSITE-GUIDE.md`: name the reader's situation (4),
operational specificity as proof of understanding (5), the hidden cost of
review (2), respect the buyer's control (3), and say what happens when
information is missing (1).

It sits before the mechanics section, so the page leads with the reader's
problem rather than with a list of what is included.

Each entry is genuinely regional. A sample:

| Page | Angle |
|---|---|
| bookkeeping/US | The suspense account the reviewer unpicks every month |
| bookkeeping/UK | Why MTD raised the cost of ordinary ledger drift |
| bookkeeping/AU | GST coding errors that only surface at lodgment |
| payroll/US | A remote hire creating a registration obligation nobody noticed |
| payroll/UK | RTI removing the room to fix it later |
| payroll/AU | Superannuation calculated on gross instead of ordinary time earnings |
| AP/UK | Approval as the step everything waits on |
| AR/UK | Credit control being nobody's actual job |
| AR/AU | Receivables and the BAS as the same problem |
| audit/AU | The audit request list arriving with the June BAS |

Every entry carries an aside naming a boundary or a decision that stays with
the client - payment authority, worker classification, lodgment, credit
decisions - because that is the objection these pages have to answer.

### Two entries were rewritten after measuring

`accounts-receivable/united-kingdom` repeated its own ServiceDepth section at
**22.1%** - statutory interest and VAT bad debt relief appeared twice on the
same page, in near-identical wording. `accounts-payable/united-kingdom` was
conceptually duplicative at 9.1% (both sections led on VAT invoice validity).
Both were rewritten onto ground nothing else on the page covers: ownership and
customer relationship for AR, intake and approval flow for AP. Worst
intra-page repetition is now 7.0%.

This is worth recording as a method note: cross-page duplication was being
measured throughout the restructure, but **duplication within a single page**
was not, and it is the failure mode that adding content to already-built pages
actually produces.

### Measured

| | Before | After |
|---|---|---|
| Page depth | 623-1001w | 855-1293w |
| Worst cross-page pair | 16.6% | 13.6% |
| Pairs above 25% | 0 | 0 |
| Worst intra-page repetition | 22.1% | 7.0% |

Cross-page duplication *fell*, because the new prose is regional enough to
dilute shared vocabulary rather than add to it.

### Tone and scope checks

No banned phrases from the guide's "Human tone" list. No absolutes
("full compliance", "guaranteed", "we ensure"). Every occurrence of tax
planning, CFO, advisory or representation across the new content is an
explicit disclaimer, not a claim. All regional facts trace to
`knowledge/markets/{us,uk,au}.md`.

84 routes all 200, 0 broken internal links, 0 links to redirects, 0 orphans,
no duplicate titles or H1s. `pnpm eslint .` silent; `pnpm next build` clean.

## 2026-08-27 (region-first services restructure)

Full crawl of all 89 routes, then a restructure to a region-first commercial
architecture. Audit delivered before any change was made.

### The finding that reframed the work

A Service x Region layer already existed — this was a completion and a
re-pointing of authority, not a greenfield build. Three measured facts drove
every decision:

1. **The navbar contributed zero crawlable links.** Dropdown contents render
   only when `isOpen` is true, and parent items with children render as
   `<button>`, not `<a>`. Nothing from the navbar appears in server HTML.
   `/technology` and `/blog` had **0** inbound links sitewide as a result.
2. **The footer was the real crawl skeleton, pointing at the wrong layer.** It
   linked all 7 generic service pages and 0 of the 19 Service x Region pages.
3. **Authority was inverted.** Generic pages held 600-1301 words with zero
   editorial inbound links; the regional pages held the commercial intent at
   484-758 words. The site was arguing with itself.

### Changes

**Completed the matrix.** Added `/services/accounting/united-kingdom` and
`/services/accounting/australia`. The navbar had been silently falling back to
the generic page for those two regions. Now 7 services x 3 regions = 21 pages.

**Retired the generic layer.** Content merged into the regional pages first
(`lib/service-depth.ts`), all 68 internal links repointed, 19 breadcrumb schemas
collapsed so structured data no longer declares a redirected URL, then the page
files removed and 301s added. Order mattered: nothing redirected until its
target held the content.

**Rebuilt `/services`** as the core authority page — H1 "Accounting & Finance
Services", overview, then US / UK / AU sections with real introductory copy and
region-specific service descriptions, plus how-we-work, industries, technology,
compliance, resources, FAQ and CTA.

**Rewrote the three Market pages** as broad regional authority. They previously
shared a rigid template and carried almost no regional substance — no HMRC, VAT
or MTD on the UK page; no ATO, GST or BAS on the Australian one.

**Fixed a 52.6% duplicate pair.** `/services/audit-support/united-kingdom` and
`/services/audit-support/australia` were the same page with the country
adjective swapped.

**Navigation.** Services dropdown is region-first and every entry resolves to a
real page. Markets removed from the primary navbar (pages preserved, indexable,
now linked contextually and from the footer). Compliance promoted. The footer
was rebuilt as the crawl skeleton.

**Homepage.** Title set to `Accounting, Bookkeeping, Tax & Payroll Outsourcing
Services` with no brand suffix — this required an `absoluteTitle` option in
`lib/seo.ts` to opt out of the `"%s | Accounstone"` template. Description set
per brief. The `sr-only` H1 was `"... for CPA Firms | Accounstone"`; the
pipe-and-brand construction is a title-tag artifact that reads badly aloud, so
it is now `Outsourced Accounting, Bookkeeping, Tax and Payroll for CPA Firms and
Businesses`. Homepage service cards were building `/services/{slug}` from
`lib/data.ts` — all 7 became redirects, on the highest-authority page — and now
point at the US regional pages.

**Five double-suffixed titles fixed** (`"... | Accounstone | Accounstone"`), and
`components/service-page-template.tsx` deleted as dead code.

### The sitemap drift trap, again

`app/sitemap.ts` generated the 7 generic URLs from a `services.map()` loop.
Removing them required **changing the loop, not deleting lines** — exactly the
failure mode `CLAUDE.md` documents. The loop now emits `serviceRegionPaths`.

### Measured before → after

| | Before | After |
|---|---|---|
| Routes | 89 | 84 |
| Sitemap parity | 89 ↔ 89 | 84 ↔ 84 |
| Worst duplicate pair | 52.6% | 16.6% |
| Pairs above 25% | 3 | 0 |
| Crawlable links per page | 36 | 58 |
| Service x Region pages in footer | 0 | 21 |
| Orphan pages | 2 (`/technology`, `/blog`) | 0 |
| Market page depth | 594-627w | 1127-1223w |
| Market vs Service x Region overlap | 0.1% | 0.0% |
| Internal links to redirects | — | 0 |
| Broken internal links | 0 | 0 |

All 84 routes return 200. Zero duplicate titles, zero duplicate H1s, exactly one
H1 per page, zero accidental `noindex`, zero canonical mismatches, every image
has `alt`. `pnpm eslint .` silent; `pnpm next build` clean.

### Regulatory guardrails held

ASIC is **not** cited on the Australian pages. The brief listed it, but
`knowledge/markets/au.md` records it as a financial-services regulator that was
already found live on the Compliance page and removed once. FCA is likewise
absent from UK copy. CFO Support was specified in the brief as an eighth service
in all three regions; `CLAUDE.md` and `scope-boundaries.md` forbid it and record
that `/services/cfo-support` "never existed — do not recreate it". Confirmed with
the owner and excluded; both CFO and HR are planned for a future pass.

### Not done — needs the owner

- **Analytics and Search Console are still absent.** No GA4, GTM or Vercel
  Analytics tag exists anywhere. Until at least GA4 and GSC are connected, none
  of this restructure is measurable, and the redirect decision below cannot be
  validated.
- **The 7 redirects target the United States page.** That was the owner's
  decision ("merge content down, then redirect"), taken without traffic data
  because none was obtainable — Ahrefs returns `Insufficient plan` and Semrush
  reports insufficient API units. If GSC later shows non-US demand on those
  URLs, each redirect is one independently reversible line in `next.config.mjs`.
- **Email authentication (SPF/DKIM/DMARC) was not verified.** These are DNS
  records, not repository files, and production DNS is unreachable from the
  sandbox. No DNS was modified.
- **Content gaps remain** for UK tax/VAT/MTD, AU BAS/GST, and UK/AU payroll
  resources. Each has a commercial page to support and no article yet.


## 2026-08-21 (finalization pass: full-site technical verification + 6 unlisted sitemap URLs)

End-of-engagement verification sweep across all 89 routes, checking the things that quietly break rather than re-reading copy. Everything passed except one real finding.

### `app/sitemap.ts` — six indexable pages were never declared for crawling

**Changed:** Added `/resources/guides/outsourced-accounting-services-guide`, `/resources/guides/outsourced-payroll-processing-guide`, `/resources/guides/outsourced-accounts-payable-guide`, `/resources/guides/outsourced-accounts-receivable-guide`, plus `/privacy` and `/terms`.  
**Why:** The four guides shipped 2026-08-14 and were internally linked but never added to the sitemap, so they were crawlable only by link discovery. The accounting-services guide is the most consequential of the four — it is the 301 target for the retired `/blog/outsourced-accounting-services` URL, so the destination of a permanent redirect was itself unlisted. `/privacy` and `/terms` are indexable and footer-linked exactly like `/compliance` and `/data-security`, which were already listed; excluding only those two was an inconsistency rather than a decision.  
**How it was missed until now:** `app/sitemap.ts` mixes hardcoded `path:` entries with URLs auto-generated from `lib/data.ts`, so grepping the source undercounts by ~30 URLs and looks fine. The check only works against the *generated* `/sitemap.xml`. That method is now documented in `docs/ROUTES.md` so it is reproducible.  
**Result:** 89 page files ↔ 89 sitemap URLs, exact parity in both directions.

### Verification performed (all clean, no changes needed)

- **Every route responds:** all 89 return HTTP 200 — no broken or orphaned routes.
- **Internal links:** crawled all 89 pages, extracted 87 unique internal link targets, every one resolves to a real page. Zero dead links — the failure mode that previously produced 15 of them here.
- **Metadata integrity across all 89 pages:** 0 duplicate `<title>`, 0 duplicate canonicals, 0 missing title/description/canonical, 0 pages without an `<h1>`, 0 pages with multiple `<h1>`s, 0 accidental `noindex`.
- **Redirect:** the retired blog URL still resolves 308 → the guide.
- **Registry accuracy:** `docs/ROUTES.md` said 85 routes against an actual 89; corrected to the measured figure.

**URL changed:** No. **Metadata changed:** No. **Content changed:** No (sitemap declarations and docs only).  
**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (responsive audit: unreachable tablet nav + CTA, tap targets, footer overflow)

Ran an instrumented responsive audit (not a visual skim) across 320/360/375/390/768/820/1024/1280/1440px, measuring horizontal overflow, tap-target sizes against WCAG 2.5.8 AA, and per-element clipping. Found one significant bug and two real accessibility issues.

### `components/navbar.tsx` — the significant one: primary CTA unreachable on iPad portrait

**Changed:** The desktop nav switched on at `md:` (768px), but the seven nav items plus the logo and CTA need ~963px. At 768px — iPad portrait, the most common tablet width — "Resources", "About", and the **"Get Started" button** were pushed past the viewport edge. Because `html` sets `overflow-x: clip`, the page could not scroll to reach them: the primary conversion CTA was simply invisible and untappable on tablets. Moved the desktop nav to `lg:` (1024px) so tablets get the mobile menu (which carries every link plus its own Get Started button), and grouped the CTA with the hamburger so `justify-between` keeps them together on the right instead of stranding the CTA mid-header. Also tightened the nav gap and logo padding at `lg:` only — at exactly 1024px the logo, nav, and CTA were touching with 0px between them; they now have 13px, and the CTA no longer wraps to two lines.  
**Why:** A conversion CTA that does not exist on tablets is a revenue bug, not a styling nit. Verified before and after by enumerating which header elements fell outside the viewport at each width, and confirming the page genuinely could not scroll to them.

### `components/footer.tsx` and `components/hero-carousel.tsx` — tap targets below the accessibility minimum

**Changed:** Footer navigation links rendered at 20px tall and the legal links (Privacy, Terms, Data Security, Compliance) at 14px — both under the 24×24px WCAG 2.5.8 AA minimum, and awkward to hit on a phone. Added vertical padding (28px and 26px respectively) and reduced the row gap to match, so the footer's overall height barely changes. The hero carousel's slide indicators were **3px tall** buttons; the button is now padded to 27px with the padding cancelled by a negative margin, so the hit area grows while the 3px bar stays visually identical and in the same position.  
**Result:** sub-24px interactive targets on the homepage went from 40+ to 0 (the one remaining is the `sr-only` skip link, correctly 1×1 until keyboard focus).

### `components/footer.tsx` — horizontal overflow traced and fixed

**Changed:** Every page reported a 4px horizontal overflow (`scrollWidth` 379 vs `clientWidth` 375). Traced it to the footer's wide uppercase `tracking-[0.14em]` section headings: "TECHNOLOGY" needed 180px inside a 152px column and was clipped at the viewport edge. Tightened tracking and size on mobile only, and dropped the footer nav to a single column below 375px, where no readable size of that word fits a 2-column grid. Breakpoint chosen by measurement, not assumption — 360px still clipped, 375px does not.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/accessibility only, 3 components).  
**Verified:** Zero horizontal overflow and zero clipped headings at all nine widths; desktop dropdowns, tablet menu, and phone submenu all confirmed still functional after the header restructure. `next build` and `eslint .` both pass.

## 2026-08-21 (mobile UX sweep: every remaining single-column card grid on mobile)

User asked to find and convert any other card grids sitewide that were still stacking one-per-row on mobile, following the same pattern already fixed on the main Services/Solutions grids. Audited every `grid-cols-1 md:grid-cols-2` (and `md:grid-cols-3`) occurrence in the codebase and classified each by content, not just by class name — the same Tailwind classes are used for genuinely different layouts (short checklist cards vs. large "delegated vs. retained" 2-panel splits vs. sequential numbered process steps), so a blind find-and-replace would have broken several pages.

### Converted to 2-per-row on mobile (short-item card grids only)

**Changed:** `components/service-page-template.tsx` (benefits + deliverables grids — used by 7 pages via the shared template: `/services/accounting` and all 6 `/industries/*` pages), `components/industry-page-template.tsx` (benefits grid), the inline "benefits/preparation/support" checklist grids on all region-specific bookkeeping/tax-preparation/audit-support pages (9 files), the "elements" compliance-layer grids on all region-specific payroll/AP/AR/accounting pages (10 files), the "workflows" grids on all 7 technology pages, the 3 US state market pages' benefits grids, the Yardi/Texas industry page's benefits grid, the "Services for X Market" title-only link grids on all 3 market pages, both grids on the About page (2-card "Growing Team" row and 6-card "Why Choose Us" grid), the AR and Bookkeeping general-service pages' title+description info-box grids, the Quality Assurance page's two 4-item boxes (nested inside the existing 2-column QA Framework/Quality Standards split, which itself stays 1-column on mobile), and the Communication page's 6-item channel grid. Padding, icon/text size, and description line-clamp are tightened on mobile in each case, matching the earlier Services/Solutions fix; desktop is unchanged throughout.  
**Why:** Direct user request to extend the same fix everywhere it applied. Verified with Playwright screenshots across a representative sample (UK bookkeeping, Xero, Australia market, About, Quality Assurance, Communication) at 375×812 before shipping.

### Deliberately left alone (checked, not just skipped)

**Not changed:** "Delegated vs. retained" 2-panel splits (each panel holds 5-6 list items — halving the width would cram far too much into one column), numbered process-step timelines (sequential narrative content reads better top-to-bottom than in a 2-column zigzag), the 3-item "Common starting points" paragraph cards on technology pages (each already has full-paragraph content, a separate treatment from the short-item grids), and the Blog/Guides/Insights/Case-studies article listing cards — checked visually first: article titles run 60-90 characters and would wrap to 8+ lines at half-width, which is worse, not better.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/typography only, ~35 files).  
**Verified:** `next build` (all routes) and `eslint .` both pass.

## 2026-08-21 (mobile UX follow-up: 2-per-row card grid)

Follow-up to the same-day card-density fix. User reviewed the shipped 1-per-row result and asked whether 2 cards per row was possible to fit more on screen. Prototyped it, found a real tradeoff (2-up cuts the description to ~1 line and, without care, truncates short titles mid-word), fixed the truncation, and shipped once it looked "systematic and organized" per the user's own bar rather than just technically fitting.

### `components/section-grid.tsx`, `components/feature-card.tsx`, `components/icon-badge.tsx`

**Changed:** Grid is `grid-cols-2` on mobile (was `grid-cols-1`), unchanged at `md:grid-cols-3`+. Card padding, icon size (`IconBadge`'s `md` size is now responsive: 40px on mobile, 56px from `sm:` up), title size, and description size/line-clamp are all tightened further on mobile only. Title no longer clamps with an ellipsis — a first pass did, and a 3-word service name mid-truncated to "Dedicated Accounti…", which reads as broken; titles now wrap fully with only a reserved minimum height for row alignment across cards. Description clamps to 2 lines on mobile (was 3 in the 1-per-row version), 3 lines at `sm:`, uncapped at `md:`+.  
**Why:** Direct user request, verified against the specific failure mode (title truncation) before shipping rather than shipping the first version that technically fit two columns.  
**Verified:** Playwright screenshots at 375×812 (iPhone SE — the narrowest common device) for `/services` and `/solutions`, plus a 1440px desktop screenshot confirming zero visual change above the `md:` breakpoint. `next build` and `eslint .` both pass.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (layout/typography only).

## 2026-08-21 (mobile UX: services/solutions cards were taking nearly a full screen each)

User-reported bug: on mobile (iOS/Android), browsing Services or Solutions felt like cards were "coming on one by one," each taking the whole screen, making it slow to check the full list. Verified with Playwright at a 390×844 mobile viewport before touching anything: on `/services`, each card measured ~385px tall against an 844px viewport — roughly 46% of the screen per card, so only ~1.3 cards were visible at once. Root cause: `FeatureCard` (shared by every `SectionGrid` usage — services, solutions, industries, technology, and markets grids, plus the homepage) rendered the full marketing-length `description` with generous padding and no height cap, which reads fine on desktop but is disproportionate on a narrow phone screen.

### `components/feature-card.tsx`, `components/section-grid.tsx`

**Changed:** Capped the description to 3 lines on mobile only (`line-clamp-3 md:line-clamp-none` — desktop still shows the full text, matching current behavior exactly), tightened card padding (`p-7 md:p-8` → `p-5 md:p-8`), title size (`text-xl` → `text-lg md:text-xl`), and internal spacing (`space-y-5` → `space-y-3 md:space-y-5`) on mobile, and reduced the grid gap between cards on mobile (`gap-6 md:gap-7` → `gap-4 md:gap-7`). Desktop values are unchanged throughout — this is a mobile-only fix.  
**Why:** This single shared component drives every service/solution/industry/technology/market card sitewide, so fixing it here fixes the complaint everywhere it occurs rather than patching one page.  
**Verified:** Re-measured with Playwright at the same 390×844 viewport after the change — card height dropped from ~385px to ~258px (about 2.5 cards now visible per screen instead of 1.3), full `/services` page height dropped from 6229px to 5462px. Also screenshotted `/solutions`, the homepage's services section, and a 1440px desktop view of `/services` to confirm desktop rendering is byte-for-byte the same (full description text, same 3-column layout, same card heights). `next build` and `eslint .` both pass.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (styling/layout only — same copy, no truncation on desktop; mobile truncates with a CSS ellipsis rather than removing any text).

## 2026-08-21 (deepen the 3 market pages — content depth, differentiation, internal linking)

Owner asked to focus on the US/UK/Australia markets specifically, since live ranking data (GSC, Ahrefs, Semrush) isn't reachable from this environment — this is on-page depth and linking work, not a ranking-data-driven change. Ran the local SEO agent scan first: all three market pages already score 90/100 with no flagged issues, but a manual read showed they were noticeably shallower than the region-specific service pages a visitor lands on next — a bullet-list "expertise" section with no operational specificity, and no links out to the site's own blog/guide/insight content.

### `app/markets/{united-states,united-kingdom,australia}/page.tsx`

**Changed:** Added a second paragraph to each market's "expertise" intro explaining *why* that market's accounting is harder to get right in practice — not a generic claim, but the specific mechanism (US: three states means three filing calendars, not one; UK: Making Tax Digital plus Companies House deadlines create a reporting cadence, not just a VAT-rate difference; Australia: BAS/STP/EOFY create a rhythm where a missed deadline cascades into the next cycle). Added a "Related resources" link row to each page pointing at genuinely relevant existing content that wasn't linked from these pages before (US → sales-tax-nexus insight, ASC 606 insight, accounting-services guide; UK → the same guide's FRS 102 section, QuickBooks-vs-Xero, the CAS guide; Australia → the payroll/super guide, MYOB, the how-to-choose-a-partner guide).  
**Why:** Matches the site's own stated psychology principle — "use operational specificity as proof of understanding" — and closes an internal-linking gap the audit's linking review didn't catch because it was looking cluster-to-cluster, not within a single page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (3 pages).

**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (growth-system audit: merge the accounting-services blog/guide pair — owner decision)

Owner decision on the one cannibalization pair the audit couldn't resolve on its own: merge `/blog/outsourced-accounting-services` into `/resources/guides/outsourced-accounting-services-guide` rather than deepen-and-differentiate. Executed per the standard the audit itself proposed for a merge (see `docs/CONTENT-REGISTRY.md`).

### `/resources/guides/outsourced-accounting-services-guide` — extended before the merge

**Changed:** Ported the blog's "Cost Ranges" section — the guide's only real content gap versus the blog — into a new "What Does It Cost?" section (SMB vs. mid-market offshore ranges, onshore comparison, a pointer to the bookkeeping cost guide's fuller framework). Title/description updated to "...Month-End Close, Cost, GAAP vs IFRS..." to reflect the addition.  
**Why:** A merge shouldn't lose the one piece of the losing page that wasn't already duplicated.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `/blog/outsourced-accounting-services` — retired

**Changed:** Deleted `app/blog/outsourced-accounting-services/page.tsx`. Added a permanent 301 redirect from `/blog/outsourced-accounting-services` to the guide in `next.config.mjs`. Removed its entry from the `/blog` listing and `app/sitemap.ts`. Searched the repo for remaining references — the only other mentions were in `docs/*.md`, `SEO-CHANGELOG.md`, and auto-generated `seo-agent/reports/*` (updated or left to regenerate on the next scheduled run).  
**Why:** The two pages shared several near-identical sections; retiring the weaker, less-linked page into the stronger one removes the duplication rather than papering over it.  
**URL changed:** Yes — `/blog/outsourced-accounting-services` now 301s to `/resources/guides/outsourced-accounting-services-guide`. **Metadata changed:** N/A (page removed). **Content changed:** N/A (page removed; see above for what it became).

**Verified:** `next build` and `eslint .` both pass; confirmed the redirect resolves and no remaining internal `<Link>` points at the retired URL.

## 2026-08-21 (growth-system audit, Stage 6: engagement-model comparison guide)

Closed the content gap flagged in the Growth System Audit §06: no page compared the four `/solutions/*` engagement models against each other, so a visitor deciding between staff augmentation, a dedicated team, offshore accounting support, and back-office support had no single page to work from.

### New: `/resources/guides/choosing-an-engagement-model`

**Changed:** Added a comparison guide — a side-by-side table (unit of engagement, best fit, typical duration), a four-question decision framework, and honest notes that the models overlap in practice (a dedicated team can end up doing back-office-style work; offshore support can look like staff augmentation once running) rather than presenting them as four rigid, non-overlapping tiers. Cross-linked from all four `/solutions/*` pages, the `/solutions` index, and the "how to choose a partner" guide (kept distinct — that guide covers evaluating a provider generally; this one covers choosing between models once you've decided to work with Accounstone).  
**Why:** Real content gap identified in the audit's search-intent registry — the intent existed with no owning URL.  
**URL changed:** No (new URL only). **Metadata changed:** N/A (new page). **Content changed:** Yes (1 new page + 6 cross-link updates).

### `/solutions/offshore-accounting-support` — found while researching the comparison guide

**Changed:** The page claimed "2-4 Weeks to Full Onboarding" as a stat and "Most clients are fully onboarded within 2-4 weeks" in an FAQ — the same category of overclaim already removed from `delivery-framework/onboarding` in an earlier pass ("Typically 2-4 weeks" / "immediate productivity" contradicted the honest ramp-up language on the CPA-firms page), just not caught on this page at the time. Reworded the FAQ to route to a discovery conversation instead of a fixed number, and replaced the stat with "Flexible — Scope That Scales With You."  
**Why:** Same standard the site already applies elsewhere: don't promise a timeline that depends on a client's specific file complexity.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

**Verified:** `next build` (86 routes) and `eslint .` both pass.

## 2026-08-21 (growth-system audit, Stage 4: UK/AU payroll, AP, AR pages)

Closed the regional-coverage gap flagged in the Growth System Audit §06: payroll, accounts payable, and accounts receivable had dedicated U.S. pages but fell back to the generic overview for UK and Australia, unlike bookkeeping, tax preparation, and audit support, which already had all three regions.

### New pages

**Changed:** Added `/services/payroll/united-kingdom`, `/services/payroll/australia`, `/services/accounts-payable/united-kingdom`, `/services/accounts-payable/australia`, `/services/accounts-receivable/united-kingdom`, `/services/accounts-receivable/australia` — each following the existing region-page pattern (Service/FAQ/Breadcrumb schema, delegated-vs-retained split) with genuine jurisdiction-specific detail rather than a template substitution: UK payroll covers RTI/PAYE/NI/auto-enrolment, AU payroll covers STP Phase 2/superannuation/PAYG/award rates, UK AP/AR cover input/output VAT and Making Tax Digital, AU AP/AR cover GST input tax credits/ABN verification/RCTI.  
**Why:** Same root cause as the U.S. pages created in an earlier pass — a service existing in `lib/data.ts` and the market pages' prose doesn't mean a matching page exists for every region it's described in.  
**URL changed:** No (new URLs only). **Metadata changed:** N/A (new pages). **Content changed:** Yes (6 new pages).

### Updated: navbar, sitemap, market pages, general service pages

**Changed:** `components/navbar.tsx` now declares all three regions for Payroll, Accounts Payable, and Accounts Receivable (previously US-only, matching the pattern already fixed for Bookkeeping/Tax Preparation/Audit Support in an earlier pass). `app/sitemap.ts` includes the 6 new routes. `app/markets/united-kingdom/page.tsx` and `app/markets/australia/page.tsx` "Services for X Markets" grids now point Payroll/AP/AR at the new dedicated pages instead of the generic overview — the same fix already applied to the U.S. market page. The three general service pages (`/services/payroll`, `/services/accounts-payable`, `/services/accounts-receivable`) gained UK/AU cross-links alongside the existing U.S. one. `/services/accounting` intentionally stays U.S.-only — no UK/AU page exists, and nothing now claims one does.  
**Why:** Same class of bug the navbar/market-page region-URL fix caught earlier this session — a page existing without every place that links to it being updated to point at it.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (5 files) — plus `docs/ROUTES.md` and `docs/CONTENT-REGISTRY.md` updated so the registry doesn't go stale the same day it was created.

**Verified:** `next build` (all 85 routes) and `eslint .` both pass.

## 2026-08-21 (growth-system audit, Stage 1: governance registries + blog/guide cannibalization fixes)

Ran a full Phase 1–4 repository audit against the hub-and-spoke/search-intent architecture requested for the site's SEO growth system, delivered as a report for review. This entry covers the Stage 1 work approved to proceed without further sign-off: the registries the audit's own framework requires, and the low-risk cannibalization fixes it identified with high confidence. The one pair flagged as needing an explicit merge-vs-deepen decision (`/blog/outsourced-accounting-services` vs. `/resources/guides/outsourced-accounting-services-guide`) was **not** touched — see `docs/CONTENT-REGISTRY.md` for why.

### New: `docs/ROUTES.md`, `docs/SEARCH-INTENTS.md`, `docs/CONTENT-REGISTRY.md`

**Changed:** Added a formal route registry (all 79 routes, by cluster), search-intent registry (intent → primary URL), and content registry (blog/guide inventory with status) — none existed before in this form, though the same governance intent was previously spread informally across `AI-WEBSITE-GUIDE.md`, `SEO-AUDIT.md`, and `ACCounstone-SEO-AGENT.md`.  
**Why:** Prevents the specific failure this pass found (see below) from recurring — future agents/sessions now have one place to check for an existing intent owner before creating a page.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** N/A (new docs, no site-facing content).

### `/blog/outsourced-bookkeeping-guide`, `/blog/outsourced-payroll-services`, `/blog/accounts-payable-outsourcing` — cannibalization fix

**Changed:** These three blog articles independently grew near-duplicate coverage of the same questions already owned by a `/resources/guides/*` counterpart (verified by reading both pages in each pair, not just titles). Re-scoped each blog's title, meta description, intro, and the one most-duplicated section to lead with the angle its own title already half-promised but the body didn't deliver on, and added an explicit cross-link to the guide that owns the overlapping intent:
- **Bookkeeping:** title/intro re-scoped away from "what it costs" (the guide's job — it has the `CostEstimator` widget) toward "what to expect day to day, software workflows, red flags" (the blog's actual unique content: QBO/Xero mechanics, Reddit-sourced FAQ, warning signs). Added a pointer to the cost guide above the pricing tables.
- **Payroll:** title/intro re-scoped away from "what it covers" (the guide's job — it has the full US/UK/AU jurisdiction breakdown) toward "costs, bank-access red flags, watch-outs." Condensed the duplicated "what's included" bullet list to a short summary + link to the guide's full version.
- **Accounts Payable:** title/intro re-scoped toward "fraud controls, software workflows, real costs" (the blog's unique operational detail) away from restating the guide's control-and-authority framework. Condensed the duplicated "what the AP team handles vs. stays with you" section to a summary + link.

Also updated the corresponding listing entries on `/blog` (title/description) to match.  
**Why:** `/blog` and `/resources/guides` grew as two separately-built content systems; nothing before `docs/SEARCH-INTENTS.md` existed would have caught two pages competing for the same primary intent. This is the concrete instance the growth-system audit was designed to surface.  
**URL changed:** No (no page removed or redirected — differentiation only, per the audit's own escalation path: only MERGE/REDIRECT require the URL-change approval this pass didn't seek). **Metadata changed:** Yes (3 pages). **Content changed:** Yes (3 pages + blog index).

**Not touched:** `/blog/outsourced-accounting-services` vs. `/resources/guides/outsourced-accounting-services-guide` — overlap here is paragraph-level, not just topical (several sections are near word-for-word matches). A title/intro edit wouldn't fix it, and a real fix means either merging with a 301 or a substantial rewrite — both need an explicit owner decision. Flagged in `docs/CONTENT-REGISTRY.md`, left as-is.

**Verified:** `next build` and `eslint .` both pass.

## 2026-08-21 (follow-up sweep: caught one missed FAQ + tone/absolute-claim cleanup)

Re-ran the same red-flag grep sweep after the market-pages fix shipped, to catch anything missed. Found one real gap and a few lower-severity tone issues.

### `app/markets/united-kingdom/page.tsx` — missed in the previous pass

**Changed:** FAQ #1 ("Are you familiar with UK IFRS standards?") still said "**We ensure compliance** with international financial reporting standards" — the same absolute-claim pattern already fixed on the other 5 FAQs on this page, but this one was the first item and got missed. Reworded to "our... reporting is structured around IFRS accounting standards," with statutory-accounts sign-off routed to the client's accountant of record.  
**Why:** Same category as the rest of the market-pages fix — an unhedged compliance claim.

### Tone/absolute-claim consistency (lower severity — no scope violation, just inconsistent voice)

**Changed:** Two FAQ answers still opened with "**Absolutely.**" (`app/solutions/dedicated-accounting-teams/page.tsx`, `app/solutions/back-office-support/page.tsx`) — the same unhedged-affirmation style already removed from the Australia market page's tax-planning FAQ in an earlier pass. Reworded both to a plain "Yes." opener. Also softened "Multi-level QA processes... **ensure** accuracy and compliance" (back-office-support FAQ) and "Learn how our QA processes **ensure** accuracy and compliance" (quality-assurance page CTA, which also dropped the vague "Premium Quality" framing) to describe the review process rather than guarantee its outcome.  
**Why:** Neither claim was factually wrong, but "ensure"/"Absolutely" read as guarantees, which the site's own principles (`scope-boundaries.md` §7) treat as something to avoid consistently, not just where a legal-risk claim happens to ride along with it.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (4 files).

**Verified:** re-ran the full grep sweep (Absolutely., "ensure compliance/accuracy", "full compliance/knowledge/ATO/HMRC", "optimization", "we handle all", "we file/submit/lodge on your behalf") across the entire `app/` tree — clean. `next build` and `eslint .` both pass.

## 2026-08-21 (market pages: cleared leftover pre-cleanup overclaims in FAQs and hero/meta copy)

Resumed general content-accuracy review after the previous fixes were merged and deployed. Swept the codebase for the site's established banned-phrase categories (superlatives, "optimization"/tax-strategy language, "full compliance", regulator citations, HR-scope overclaims) and found the three market pages (`app/markets/{australia,united-kingdom,united-states}/page.tsx`) still carried unhedged FAQ answers and hero/meta copy from before the site's main August accuracy pass — that earlier pass (see the `2026-08-14` entries below) only touched the "Industries We Serve" lists and one tax-planning FAQ on each page; the rest of the FAQ set, hero description and meta description were never revisited.

### `app/markets/australia/page.tsx`

**Changed:** Meta description and hero description both said "**ASIC** ... compliance included" — the exact FCA/ASIC violation already fixed on the Compliance page in an earlier pass, reintroduced here. Removed. The "Do you understand IFRS and ASIC requirements?" FAQ claimed "**we ensure compliance** with... ASIC reporting requirements" — rewrote to route ASIC/Corporations Act obligations to the client's accountant and auditor, matching the pattern already used correctly on `services/audit-support/australia/page.tsx`. The GST FAQ said "**Absolutely**. We manage GST registration... and **optimization** of GST positions" — removed the absolute opener and the tax-strategy word "optimization," reframed as BAS-ready preparation with registration/lodgment left to the client's registered agent. The ABN FAQ claimed "**full ATO compliance requirements**" — an absolute claim banned under `scope-boundaries.md` §7 — softened to preparation-only language.  
**Why:** Direct violations of two already-documented scope boundaries (§1/§6 regulator citation, §7 absolute claims) that had already been fixed once elsewhere on the site but were missed on this page.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/markets/united-kingdom/page.tsx` — the more serious finding of this pass

**Changed:** The "Our UK Expertise" list included three items outside anything Accounstone actually offers: **"Director obligations and filings"** (a governance/legal matter, not an accounting deliverable — removed), **"Pension and benefits administration"** (the same HR-scope overclaim already fixed on the back-office-support page — replaced with "Pension auto-enrolment bookkeeping," the legitimate payroll-adjacent version already used on the Payroll service page), and **"R&D tax relief"** / **"Grant funding and incentives"** (specialist tax-advisory and grants-consulting services that aren't in Accounstone's service lines at all — removed, no hedge could make these accurate since they're not offered in any form). "VAT management and **optimization**" → "VAT reconciliation and return preparation." "Corporation tax compliance" / "Companies House compliance" → reworded to "return/filing preparation" framing.  
**FAQs rewritten:** VAT FAQ dropped "Absolutely... **optimization**... full knowledge" for a prep-scoped answer that explicitly states Accounstone doesn't hold HMRC portal credentials (matching `knowledge/markets/uk.md`). Companies House FAQ dropped "**we handle all** ... **director obligations**" (a legal-authority overclaim) for preparation-only language. Corporation tax FAQ dropped "**optimization for R&D relief and other CT reliefs**" — a direct tax-advisory overclaim, the same category as the already-fixed IRS-representation and Australian tax-planning findings — for return-preparation language that routes relief-eligibility questions to the client's accountant or an R&D specialist. The entity-structure FAQ dropped "**entity structure optimization**" — entity selection advice is explicitly banned under `scope-boundaries.md` §2.  
**Why:** This page had the most and the most serious overclaims of the three — several items claimed services genuinely outside Accounstone's scope, not just imprecise wording around real services.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/markets/united-states/page.tsx`

**Changed:** The state-requirements FAQ said "**we... handle** specific state compliance, **filings**, and reporting" — filing authority stays with the client's CPA; reworded to preparation-for-review language. The multi-state FAQ opened with "**Absolutely**" and claimed "**proper nexus analysis**" — nexus determination is a tax-judgment call; reworded to describe tracking activity by state so exposure is *visible*, with the determination itself left to the client's CPA/tax advisor. The payroll-tax FAQ claimed "**quarterly filings**" as something Accounstone handles — reworded to match the already-established Payroll knowledge doc pattern (filing can be included in scope or stay with the client's accountant, agreed at onboarding).  
**Why:** Same category as the UK/Australia fixes — filing-authority and tax-determination claims that contradict the site's own scope boundaries.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

**Verified:** `next build` (all routes, no errors), `eslint .` clean, and a targeted re-grep for every removed pattern (ASIC, "optimization," "full ... compliance," "Absolutely.", "benefits administration," "R&D tax relief," "grant funding," "entity structure optimization") across all three files confirmed clean before committing.


Picked up from a Claude.ai handoff prompt. Verified the prompt's Priority 1 claims first: `app/industries/cpa-firms/page.tsx` and the healthcare/e-commerce/professional-services industry pages were already reworked with 250–650+ words, workflow-specific FAQs, and auto-generated FAQ/Breadcrumb schema via `IndustryPageTemplate` — the "57 lines / thin content" note in the handoff was stale (line count is misleading because the template pulls content from data arrays). No changes made there; making them longer for its own sake would have violated the guide's anti-padding rule. Moved to the parts of the handoff that were genuinely unaddressed.

### New pages — Priority 2 (zero-coverage bottom-funnel guides)

**Changed:** Created `app/resources/guides/how-to-choose-accounting-outsourcing-partner/page.tsx` and `app/resources/guides/client-accounting-services-cas-guide/page.tsx`, both using `ArticleLayout` (`section="guides"`), which auto-generates Article + BreadcrumbList schema. Added both to `app/resources/guides/page.tsx`'s guide list and to `app/sitemap.ts`.
**Why:** Both were confirmed zero-coverage (`grep` found no existing content) and are high commercial-intent, pre-shortlist search terms per the handoff brief.
**Content notes:**
- The partner-selection guide is a decision framework (scope-first comparison, review structure, red flags, onboarding expectations) — written as buyer-neutral evaluation criteria, not a sales pitch for Accounstone. Its "red flags" section explicitly calls out unqualified IRS-representation claims and "guaranteed/full compliance" language as warning signs, reinforcing `knowledge/company/scope-boundaries.md` from the buyer's side.
- The CAS guide explains Client Accounting Services as an industry practice-growth model for CPA firms, then draws the same production-vs-judgment delegation line used everywhere else on the site: bookkeeping/close/reporting production can be delegated, advisory and sign-off stay with the firm's licensed staff. No CFO/advisory positioning introduced.
**SEO purpose:** Fills two zero-coverage, high-intent bottom-funnel search terms named in the handoff brief; both link back into the CPA-firms, staff-augmentation and bookkeeping-cost-guide clusters.
**URL changed:** No (new URLs). **Metadata changed:** N/A (new pages). **Content changed:** Yes (new pages).

### Schema completion — Priority 3

**Audited:** Every `page.tsx` route for BreadcrumbList and FAQPage coverage against visible content. Result: every page with visible FAQ content already had matching `FAQPage` schema (0 gaps — the earlier "37/77" FAQ count undercounted because it didn't account for `IndustryPageTemplate`/`ServicePageTemplate`/`ArticleLayout` auto-generating schema for every page that uses them). Breadcrumb coverage had two real gaps.
**Changed:** Added `BreadcrumbList` schema to `app/compliance/page.tsx` and `app/data-security/page.tsx` (both had none; neither has FAQ-style visible content, so `FAQPage` schema was correctly not added — schema must match visible content). `app/page.tsx` (homepage) and `/terms`, `/privacy` (utility pages, intentionally excluded from the sitemap per its own documented policy) were left without breadcrumb schema, consistent with existing site convention.
**SEO purpose:** Closes the last real BreadcrumbList gaps; confirms FAQPage coverage was already effectively complete rather than the 37/77 figure the handoff cited.
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (schema only).

### Knowledge base expansion — Priority 4

**Added:** `knowledge/services/{bookkeeping,accounting,tax-preparation,payroll,accounts-payable,accounts-receivable,audit-support}.md` (one per service line, each with exact deliverables split into "can be delegated" vs. "stays with the client/CPA," sourced from `lib/data.ts` service descriptions and the existing service pages — no new claims invented). `knowledge/markets/{us,uk,au}.md` (regulatory context, the FCA/ASIC boundary restated per-market, terminology differences, buyer expectations, software ecosystem). `knowledge/icp/cpa-firms.md` (buyer persona, what they outsource, the seasonal-capacity pattern, the handoff pattern, vocabulary, primary objection, and a note on the CAS trend tying back to the new CAS guide).
**Why:** Requested in the handoff's Priority 4; these didn't exist yet. Written as internal reference docs for future agents/content passes, not as site copy.
**URL changed:** No. **Metadata changed:** No. **Content changed:** Documentation only (not rendered on the site).

### Tooling: ESLint dependency

**Changed:** Re-added `eslint`, `eslint-config-next`, `@eslint/eslintrc` to `package.json` devDependencies — pinned to `eslint@^9` / `eslint-config-next@^15` (matching the project's Next 15 major version) rather than letting the resolver pick the latest majors, which is what caused the peer-dependency mismatch (`eslint-config-next` 16.x wanting `eslint` 9.x, resolver installing `eslint` 10.x) that broke this the last time it was attempted (commit `7dfca5f`, "Fix Vercel deploy: remove ESLint devDeps that broke pnpm-lock.yaml sync"). Regenerated `pnpm-lock.yaml` via `pnpm add -D`.  
**Why:** `npm run lint` / `pnpm run lint` had no working `eslint` installed even though `eslint.config.mjs` existed — the previous fix had to be reverted for breaking the Vercel build.  
**Verified:** `npx eslint .` runs clean (0 findings), `pnpm install --frozen-lockfile` succeeds (the exact command Vercel runs on deploy), and `next build` still produces all 79 static routes.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (tooling only).

### Tooling: fixed a word-count undercount bug in `scripts/accounstone-seo-agent.mjs`

**Found while triaging the agent's "content-depth" priority queue:** `app/services/accounting/page.tsx` was flagged MEDIUM at only 46 words — but reading the actual page showed a full overview, 6 benefits, a 5-step process, 5 deliverables, related services, and 4 FAQs (~490 words), all rendered through `ServicePageTemplate`. Root cause: the scanner's tag-stripping regex (`<[^>]+>`) has no way to tell a real HTML tag from a multi-line, self-closing component call like `<ServicePageTemplate overview="..." benefits={[...]} .../>` — since that entire call contains no literal `>` character until its closing `/>`, the regex swallowed everything between as one "tag" and erased it, including every prop string.  
**Changed:** Tightened the regex to `<[a-zA-Z][^>{]*>`, which stops matching at the first `{` — a real JSX tag's attributes don't contain raw `{`, so plain tags still strip correctly, while a component call with JS-expression props now survives as visible text instead of vanishing.  
**Impact:** Re-ran the full scan. Word counts corrected upward across nearly every page (undercounts had ranged from ~15% on long-form guides to the 10x case on `/services/accounting`). Medium-priority findings dropped from 18 to 11 — the false positives on already-substantial pages cleared. The 11 that remain are exactly the site's hub/index pages (`/industries`, `/markets`, `/solutions`, `/resources`, `/resources/insights`) and legal/trust pages (`/terms`, `/privacy`, `/compliance`, `/data-security`, `/delivery-framework/communication`, `/delivery-framework/quality-assurance`) — all legitimately short by design per `AI-WEBSITE-GUIDE.md`'s own rule against padding hub and utility pages. **No content changes made** — confirmed there is no genuine thin-content problem left on the site; the previous "18 medium findings" figure was mostly a tooling artifact.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (tooling only; `seo-agent/reports/2026-08-21.md` regenerated with corrected counts).

### Tooling: fixed internal-link undercount, then closed the genuine gaps it revealed

**Changed:** Broadened the internal-link counter from `href\s*=\s*["']\/` to `href\s*[:=]\s*["'\`]\/`, so it also catches object-literal links (`href: '/...'`) used by `relatedLinks` arrays passed into `IndustryPageTemplate`, not just JSX-attribute links. Low-priority internal-linking findings dropped from 33 to 12 once this and the word-count fix were both applied — most of the original 33 were the same class of false positive (a template component renders the actual `<a href>`, but the scanner only walks `app/`, not `components/`). Documented the remaining known limitation in a code comment: pages using `ServicePageTemplate`'s `relatedServices` prop (bare `slug:` values resolved to a URL only inside the template) still won't be counted, so LOW findings on those pages should be treated with skepticism, not as confirmed gaps.  
**Checked the 12 that remained:** most are legal/utility pages (contact, privacy, terms, compliance, data-security) or hub pages that link out via card grids rather than literal `href=` strings — not real gaps, left alone per the site's own "don't add links just to increase count" rule. Three were genuine: `app/delivery-framework/{onboarding,communication,quality-assurance}.tsx` had no content links at all beyond a generic `/contact` CTA, leaving a reader in the "how we work" cluster with no path back into services/industries content.  
**Added:** One short, on-topic paragraph of contextual links to each of the three pages — onboarding links to CPA firms, staff augmentation, and quality assurance; communication links to CPA firms, quality assurance, and onboarding; quality assurance links to audit support, tax preparation, onboarding, and communication. All three cross-reference each other, forming a small linked cluster instead of three dead ends.  
**Also found and fixed while reading these pages (real content-accuracy issues, not just linking):**
- `app/delivery-framework/onboarding/page.tsx` claimed "Typically 2-4 weeks" for onboarding and "immediate productivity" in its meta description — this directly contradicts the honest-ramp-up language already established elsewhere on the site (the CPA-firms FAQ explicitly says *"We prefer to establish a realistic ramp-up plan... rather than promise an arbitrary number of days"*, and a fixed timeline claim was already removed from that same page in an earlier pass — see the `2026-08-14` entry below, "Removed a fixed productivity timeline claim"). Reworded both to match the rest of the site.
- `app/delivery-framework/quality-assurance/page.tsx` said "Monthly reports and **filings** delivered on the schedule we agree to" — "filings" reads as a claim to handle the actual filing/lodgment, which contradicts `knowledge/company/scope-boundaries.md` §2 (lodgment/filing stays with the client's CPA, EA, or registered agent). Changed to "filing-ready documentation."  
**URL changed:** No. **Metadata changed:** Yes (onboarding page description). **Content changed:** Yes (3 pages; small additions + 2 accuracy fixes).

### Navbar Services dropdown: fixed misleading region grouping, added 4 real U.S. service pages

**Reported by the client:** the Services dropdown looked like it was "only showing USA services," and services appeared to have "USA in their cluster as others."  
**Root cause:** `components/navbar.tsx`'s Services mega-menu bucketed Payroll, Accounts Payable, Accounts Receivable and Accounting Services under the "USA" column only (alongside Bookkeeping/Tax Preparation/Audit Support, which do have real region pages), while the UK and Australia columns showed just 3 items each. None of those 4 services are actually US-exclusive — they simply had no dedicated region page yet — but the layout made it look that way: USA had 7 listed services, UK/Australia had 3.  
**First fix (superseded below):** briefly split the 4 generic services into a separate "All Regions" row instead of nesting them under USA. The client's follow-up made clear the actual ask was for these to become genuinely region-specific, not just relabeled — so this was reverted before shipping.  
**Actual fix — created 4 new dedicated U.S. service pages:**
- `app/services/payroll/united-states/page.tsx` — federal/state withholding, FICA, FUTA/SUTA, W-2/1099-NEC record-keeping, delegated-vs-retained split (filing authority stays with the client's accountant).
- `app/services/accounts-payable/united-states/page.tsx` — ACH/check/wire payment-run preparation, 1099-NEC vendor tracking, sales/use tax coding on vendor invoices.
- `app/services/accounts-receivable/united-states/page.tsx` — USD invoicing, ACH/check payment application, DSO framing, aging/follow-up cadence.
- `app/services/accounting/united-states/page.tsx` — U.S. GAAP-oriented reconciliations, month-end close, management reporting, explicit hand-off boundary to tax preparation.

Each follows the same pattern as the existing `bookkeeping/tax-preparation/audit-support` region pages: Service + FAQ + BreadcrumbList schema, a delegated-vs-retained split, genuine U.S.-specific detail (not a find-and-replace of the generic page), and a link back to the general multi-region overview. Added all 4 to `app/sitemap.ts`.  
**Navbar restructured:** `regionServiceGroups` now derives from one `allServices` list where each service declares which regions have a dedicated page for it. USA links to all 7 dedicated U.S. pages. UK and Australia link to their 3 dedicated region pages plus fall back to the general (multi-region) page for the 4 services that don't have UK/Australia-specific versions yet — so no column ever links to a URL that doesn't exist, and no column looks artificially empty relative to another.  
**Cross-linked:** the 4 general service pages (`/services/payroll`, `/services/accounts-payable`, `/services/accounts-receivable`, `/services/accounting`) now each link to their new U.S.-specific page.  
**Verified:** `next build` (81 routes, up from 77), `eslint .` clean, and visually confirmed in a browser (desktop dropdown, mobile menu, and the new pages themselves) via Playwright before committing.  
**URL changed:** No existing URL changed; 4 new URLs added. **Metadata changed:** N/A (new pages) + minor related-link additions on 4 existing pages. **Content changed:** Yes.

### `app/markets/united-states/page.tsx` — same inconsistency the client had just flagged in the navbar, found on the U.S. market page too

**Found:** the "Services for U.S. Markets" card grid on this page already mixed region-specific slugs (`bookkeeping/united-states`, `tax-preparation/united-states`, `audit-support/united-states`) with plain, non-regional slugs (`accounting`, `payroll`, `accounts-payable`, `accounts-receivable`) — the exact same inconsistency just fixed in the navbar, on the one page whose entire purpose is describing U.S. services specifically. Grepped the rest of the codebase for the same dynamic-slug link pattern (`` href={`/services/${...}`} ``) to confirm this was the only remaining instance.  
**Changed:** all 7 entries now point at their dedicated U.S. page (`accounting/united-states`, `payroll/united-states`, `accounts-payable/united-states`, `accounts-receivable/united-states`, joining the existing 3). Card labels updated to match ("Accounting Services" → "Accounting Services for U.S. Businesses", etc.) for consistency with the other four.  
**Checked, no change needed:** the UK and Australia market pages have the identical-looking pattern (3 region-specific + 4 generic slugs) — that's correct there, since no UK/Australia-specific pages exist yet for those 4 services; changing them would link to nothing.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (7 link targets + labels on one page).

### Open questions — unchanged, still awaiting client answer

Per `knowledge/company/identity.md` and `knowledge/company/scope-boundaries.md`: (1) whether Canada is a real market needing a content cluster or a third-party directory error, and (2) whether "Financial reporting" should exist as a named service line or stay strictly as accounting-deliverable terminology. Neither was resolved this pass — both require a client decision, not an agent judgment call.

## 2026-08-14 (top bar, footer, robots, sitemap, performance)

### `components/header-bar.tsx` (full rework)

**Changed:** Replaced the generic announcement-bar banner ("Transform Your Accounting with Offshore Expertise" + Get Started + close button) with a slim, permanent top bar containing the site's contact info (email + phone on left) and social media icons (LinkedIn, Facebook, Instagram, YouTube on right), matching the same social links already used in the footer. Added a small "Get Started" CTA that's desktop-only (hidden on mobile since the navbar's own CTA covers that). The bar is now `bg-primary-dark` (one shade darker than the navbar's `bg-primary`) so the two bars are visually distinct but related.  
**Why:** Social media visibility at the top of the page (above the fold, before scrolling to the footer) is a common trust/reach signal for B2B service businesses. The previous announcement banner read as generic marketing ("Transform Your Accounting") and had a dismissible close button, meaning it could vanish permanently for returning visitors.  
**SEO purpose:** Social-media links above the fold are a crawlability and brand-signal benefit; no metadata change.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `components/footer.tsx` (alignment and structure fix)

**Changed:** Restructured the footer into three visually separated bands: a top band (logo/tagline/social + right-aligned contact info), a middle band (the 6-column link grid, now using `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` instead of the previous fractional-width grid that didn't align cleanly on tablets), and a bottom bar with a subtle darker background (`bg-primary-dark/50`) for legal links. The contact column's text is now right-aligned on desktop and left-aligned on mobile (previously left-aligned everywhere, leaving the right side of the footer's top row empty on desktop). The 6-column link grid now wraps to 2 columns on mobile and 3 on tablet instead of a single column, which was unnecessarily long on smaller screens.  
**Why:** The previous footer had alignment issues at intermediate breakpoints (the fractional-width grid broke, and the contact info floated awkwardly) and no visual separation between the link section and the legal section.  
**SEO purpose:** Cleaner, more scannable footer helps both crawlers and visitors find links.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (same links, same copy).

### `app/robots.ts` (AI crawler rules)

**Changed:** Added explicit `allow: '/'` rules for GPTBot (OpenAI/ChatGPT), Google-Extended (Google AI features), PerplexityBot, ClaudeBot, Applebot-Extended, and anthropic-ai. These are the AI crawlers that respect robots.txt and that the site wants to be discoverable by (the site already publishes `llms.txt` for exactly this purpose).  
**Why:** Without explicit allow rules, some AI crawlers default to restricted crawling. Since the site actively publishes `llms.txt` as its AI-crawler-facing content summary, it should also explicitly allow those crawlers at the robots.txt level.  
**SEO purpose:** Maximizes AI-tool discoverability (ChatGPT, Perplexity, Google AI Overviews, Apple Intelligence) alongside the existing Google crawling.

### `app/sitemap.ts` (lastModified dates)

**Changed:** Added `lastModified: '2026-08-14'` to every route that was touched in today's content/crawlability audit. Routes that weren't touched don't get a `lastModified` (per the existing sitemap policy: "Do not invent lastModified dates").  
**Why:** `lastModified` tells crawlers which pages have been recently updated, helping them prioritize re-crawling freshly reworked content over pages that haven't changed.  
**SEO purpose:** Signals content freshness to search engines for the ~50 pages that were materially updated today.

### `app/globals.css` (font stack performance)

**Changed:** Replaced `var(--font-inter), "Helvetica Neue", system-ui, sans-serif` (where `--font-inter` was undefined — never loaded from anywhere, so the browser was doing a lookup for a missing variable on every text element) with a clean system font stack (`"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`). System fonts have zero download time and zero FOIT/FOUT since they're already on the user's device.  
**Why:** An undefined CSS variable in the font stack is a small but real performance waste (the browser resolves it to nothing on every repaint). The site was never actually loading Inter from anywhere — the `--font-inter` variable was referenced but never defined.  
**SEO purpose:** Faster text rendering contributes to LCP and CLS metrics.


## 2026-08-14 (homepage: visual decoration pass)

Purely visual work — no content, metadata, or URL changes on this pass.

### Signature direction

The site already had the seed of a "ledger" motif (`.ledger-rule` hairline dividers, an `animate-ledger-fill` progress-bar animation named for it, and an inline ruled-paper texture used once on the homepage's stats panel). Extended this into a proper, reusable signature system instead of inventing an unrelated decorative language: a bookkeeping ledger's own visual vocabulary (ruled lines, a margin rule with tick marks, a page-break tick) is specific to an accounting company in a way generic gradients/blobs aren't.

### `app/globals.css`

**Added:** Three new reusable utility classes building on the existing `.ledger-rule`: `.ledger-lines` / `.ledger-lines-dark` (a faint repeating horizontal-line texture echoing ruled ledger paper, light and dark variants), `.margin-rule` (a vertical accent-colored rule with soft opacity, echoing the ruled margin column of a paper ledger — used as a left-border treatment, not a claim of any kind), and `.ledger-divider` (a hairline section divider with a small centered accent dot, replacing plain empty gaps between homepage sections). All additive — nothing existing was changed, so this doesn't affect any other page.

### `components/hero-carousel.tsx` (homepage-only component, confirmed no other usages)

**Changed:** Added the `.margin-rule` accent beside the hero's text content, and replaced the plain progress-dot row with a small ledger-style slide counter ("01 / 03", tabular-nums) above it — an appropriate use of numbering here since it's a real sequence (slide position), unlike a decorative 01/02/03 badge on non-sequential content.

### `app/page.tsx`

**Changed:** Applied the new texture/divider classes across the homepage: `.ledger-lines` on the trust-badge strip, `.ledger-lines-dark` on the primary-colored capacity CTA band (matching the texture already used once on the stats panel, now consistent across all primary-colored sections), `.ledger-divider` between three major section transitions, `.margin-rule` on the "Why Accounstone" checklist, and a small accent-tick treatment (a short horizontal line before the uppercase text) applied consistently to the two eyebrow labels that didn't already have one, matching the pattern already used in shared components elsewhere on the site.  
**Verification:** Ran a full production build and served it locally; confirmed via the rendered HTML and compiled CSS that all new classes and the slide counter render correctly. No headless-browser/screenshot tooling is available in this environment, so this was verified at the HTML/CSS level rather than visually — worth a quick look in an actual browser after deploy.


## 2026-08-14 (compliance page + tax-advisory overclaim cleanup)

Continued the accuracy sweep into pages not yet checked: the standalone Compliance page, and tax-related content on the services and market pages.

### `app/compliance/page.tsx` — most serious finding of this pass

**Changed:** The UK compliance list included **"FCA Requirements"** — the Financial Conduct Authority regulates financial services firms (banks, investment firms, insurers), not accounting/bookkeeping providers. This directly contradicted the entire "we don't provide financial services" cleanup from earlier today. Replaced with "Anti-Money Laundering (AML) Requirements", which is the regulation that actually applies to UK accountancy service providers. Also replaced "ASIC Standards" (Australia) with "GST and BAS Reporting Standards" (ASIC is primarily a financial-services/corporate-securities regulator; GST/BAS is the accounting-scoped equivalent). Also fixed an internal contradiction: the page's own meta description and hero said "Full compliance" / "Full adherence" (absolute claims), while a section further down the same page honestly stated "as a growing company, here is where we honestly stand today... actively working toward formal certifications." Softened the absolute claims so the page is consistent with its own honesty elsewhere. Same fix applied to the CTA description, which said "Learn about our compliance certifications" — implying certifications already held.  
**Why:** FCA in particular is a direct, unambiguous regulatory-scope overclaim on a page whose entire purpose is building compliance trust.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### `app/services/tax-preparation/page.tsx` — IRS representation overclaim

**Changed:** An FAQ literally said "Can you represent us with the IRS? Yes, we can provide power of attorney to represent your interests in IRS matters." **This is false and risky as written** — IRS representation with power of attorney (Form 2848) requires being a licensed CPA, Enrolled Agent, or attorney under Circular 230, and nothing elsewhere on the site suggests Accounstone itself holds those credentials (every other tax page explicitly routes representation/sign-off to "your CPA or Enrolled Agent"). Changed the answer to explicitly say no and explain the distinction. Also removed "Tax reduction strategies and optimization," "Multi-entity tax planning," "Tax planning summary and recommendations," and "IRS representation letters" from the benefits/deliverables lists, and reworded the process steps ("Analysis & Planning" → "Organization & Review", "Review & Optimization" → "Quality Review") to remove tax-strategy/advisory framing throughout.  
**Why:** This is the most concrete legal-risk finding of the entire cleanup — a specific, actionable false claim about a credentialed activity, not just marketing tone.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes (full page).

### `app/markets/australia/page.tsx` — unhedged tax-advisory claim

**Changed:** An FAQ said "Can you help with tax planning? Absolutely. We provide strategic tax planning including capital gains strategies, negative gearing optimization, and salary sacrificing" — a direct, unhedged claim to provide tax advisory services, the same category of issue as the FCA and IRS-representation findings. Rewrote to explain Accounstone prepares the underlying bookkeeping/documentation, while those specific strategies are advice from the client's registered tax agent or accountant. Also removed "tax optimization" from the page's body copy, "GST management and **optimization**" → "reconciliation", "Capital gains tax **planning**" → "reporting support", and "Income tax returns and **lodgement**" → "preparation" (lodging on a client's behalf requires registered tax/BAS agent status, which isn't established anywhere on the site).  
**URL changed:** No. **Metadata changed:** No. **Content changed:** Yes.

### `app/services/payroll/page.tsx`, `app/markets/united-states/page.tsx`

**Changed:** Removed "full compliance with federal and state regulations" (absolute claim) from the payroll page description. Removed "entity selection and tax planning" (advisory claim) from a US market FAQ, and "Multi-state tax **optimization**" / "Quarterly estimated tax **planning**" bullets, replacing with preparation/calculation framing consistent with the rest of the site.  
**URL changed:** No. **Metadata changed:** Some. **Content changed:** Yes.

### Also checked, no changes needed

State pages (California, Texas, Florida), homepage trust badges, testimonials data (already clearly labeled "illustrative engagement themes, not client testimonials"), and the case studies page (already clearly labeled as illustrative scenarios, not real client results) were all already accurate and appropriately hedged — no fabricated stats, no unlabeled claims.

## 2026-08-14 (broader content sweep: technology hub page, generic filler, HR-scope overclaim)

Continued the content-quality pass after finishing the technology pages — swept the rest of the site for the same categories of issue: generic marketing filler ("seamless," "enterprise-grade," "superior results") and scope overclaims (implementation/dev work, advisory work, and — newly found — general HR services).

### `app/technology/page.tsx` (full rework)

**Changed:** This was the worst offender found in the sweep. Replaced "We leverage the latest... to deliver superior results," "Advanced analytics and forecasting" (forecasting overclaim, same category as the earlier back-office-support fix), "Enterprise-grade security" (used twice, vague), and a "Schedule Demo" CTA (odd for an accounting firm — no other page on the site uses "demo" language) with concrete, accounting-scoped content. Added a new "What Stays With Your Software Provider" panel that's explicit about what's out of scope: software licensing/hosting, implementation/configuration for larger platforms, custom development, and forecasting/BI tools. Updated one FAQ that claimed "advanced business intelligence tools for... forecasting" and another claiming the team can "build custom integrations as needed" — both are scope overclaims for an accounting-support company.  
**Why:** This is the hub page for all seven technology pages, so it's high-visibility, and it had the most generic, unspecific copy on the site.  
**SEO purpose:** Consistency with the now-reworked individual technology pages; removes unverifiable/vague claims.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes (full rework).

### `app/solutions/back-office-support/page.tsx` — HR scope overclaim (new finding)

**Changed:** This page's meta description, hero, one FAQ, and two bullet lists all claimed "HR," "HR compliance," "benefits administration," and "regulatory requirements" as part of back-office support. None of that is in the `back-office-support` solution's actual description in `lib/data.ts` ("bookkeeping, payables, receivables, payroll processing, and account maintenance"). Rescoped every instance to the payroll-related accounting work Accounstone actually does (payroll processing, payroll tax withholding, payroll reporting), and added an explicit line in the FAQ stating broader HR functions (benefits administration, employment compliance, regulatory filings) sit with the client's HR provider or in-house team.  
**Why:** Same category of issue as the earlier "financial services"/CFO cleanup — claiming a regulated adjacent service (general HR/benefits administration) that isn't actually offered.  
**SEO purpose:** Accuracy.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** Yes.

### Generic filler cleanup ("seamless," "enterprise-grade," "strategic partnership")

**Changed:** Replaced vague, unelaborated "Seamless integration with X" bullets and similar filler phrases with concrete detail across `app/solutions/staff-augmentation/page.tsx`, `app/solutions/dedicated-accounting-teams/page.tsx` (also removed "Proactive tax planning and optimization" — the same tax-advisory overclaim already fixed on the Drake Tax page — and reworded the hero from "Your Strategic Accounting Partner" / "strategic partnership, and long-term value creation" to concrete language), `app/solutions/offshore-accounting-support/page.tsx`, `app/services/bookkeeping/page.tsx`, `app/delivery-framework/quality-assurance/page.tsx` ("Enterprise-grade quality standards" → specific description of the actual review process), and `app/delivery-framework/onboarding/page.tsx` (page title "Seamless Client Onboarding" and two body instances).  
**Why:** These phrases read as generic outsourcing marketing language rather than the specific, workflow-grounded tone established elsewhere on the site (per AI-WEBSITE-GUIDE's content principles).  
**SEO purpose:** Consistency; replaces vague adjectives with content that actually differentiates the page.  
**URL changed:** No. **Metadata changed:** Some (titles/descriptions on a few pages). **Content changed:** Yes.

### Full sitewide sweep performed

Grepped the entire `app/` tree for the AI-WEBSITE-GUIDE's banned superlatives list (best, number one, world-class, unparalleled, cheapest, guaranteed, industry-leading) plus "seamless," "enterprise-grade," "cutting-edge," "state-of-the-art," "revolutionary." After this pass, zero remaining hits except contextually appropriate uses (e.g. "best practices" as a standard industry term, "which service is best for my business" as a natural FAQ question).

## 2026-08-14 (finish technology page rework: CCH, MYOB, Drake Tax)

Follow-up to the NetSuite/Sage rework — the same generic vendor-marketing pattern was present on the three remaining technology pages.

### `app/technology/cch/page.tsx`, `app/technology/myob/page.tsx`, `app/technology/drake-tax/page.tsx`

**Changed:** Same rework as NetSuite/Sage. Removed "is the leading..." vendor-marketing openers (CCH Axcess, MYOB, and Drake Tax pages each claimed to be "the leading" software in their category — an unverifiable superlative about a third party's product, not something Accounstone can substantiate), "Why Choose \[Vendor\]" bullet lists that were really just describing the software's own features rather than Accounstone's work, and "setup and configuration" implementation-style claims. Replaced with accounting-scoped workflow content matching each platform's real use case (CCH: tax-practice review queues and document management; MYOB: AU/NZ GST/BAS and STP-aligned payroll bookkeeping; Drake Tax: return-preparation capacity for tax season). Also removed "Tax planning and optimization" from the Drake Tax services list and added an explicit FAQ stating tax planning/advisory stays with the client's CPA/EA — the same class of overclaim as the earlier CFO/financial-advisory cleanup.  
**Why:** Same reasoning as the NetSuite/Sage pass: this is an accounting-support company, not a software vendor or implementation partner, and "the leading software" claims about third-party products aren't something Accounstone can verify or should be making on their behalf.  
**SEO purpose:** Consistent accounting-scoped positioning across all seven technology pages; removes unverifiable superlative claims per the AI-WEBSITE-GUIDE content rules.  
**URL changed:** No. **Metadata changed:** Yes (all three titles/descriptions). **Content changed:** Yes (full rework, all three pages).

All seven `/technology/*` pages (QuickBooks, Xero, NetSuite, Sage, CCH, MYOB, Drake Tax) are now consistently accounting-scoped.

## 2026-08-14 (Tier 2 review: rework NetSuite and Sage pages)

Spot-checked the Tier 2 pages flagged in the original audit (UK/Australia bookkeeping, NetSuite, Sage, e-commerce, professional services). UK/Australia bookkeeping and both industry pages were already at the same specificity bar as Tier 1 (region-specific workflow detail, not generic filler) — no changes needed. NetSuite and Sage were the exception: both still read as generic software-vendor marketing copy rather than accounting-support content, unlike the already-reworked QuickBooks/Xero pages.

### `app/technology/netsuite/page.tsx`, `app/technology/sage/page.tsx`

**Changed:** Full content rework of both pages to match the established QuickBooks/Xero pattern. Removed vendor-marketing language ("leading cloud-based ERP", "powerful accounting platform... of all sizes", "Strong user community", "Competitive pricing", "Regular updates and improvements" — none of which describe anything Accounstone does) and claims that read as ERP-implementation-partner positioning ("NetSuite implementation and deployment", "we handle complete Sage implementation... including... training"). Replaced with accounting-scoped workflow content: multi-entity/multi-currency reconciliations, intercompany eliminations, consolidation, close activities — consistent with each technology's own description in `lib/data.ts`. Added an explicit FAQ on each page clarifying Accounstone supports the accounting work inside these systems, not implementation/configuration, and is not NetSuite/Oracle or Sage (matching the disclaimer pattern already used on the QuickBooks page).  
**Why:** These two pages hadn't been through the same content pass as QuickBooks/Xero and were making claims (software implementation, "why choose \[vendor\]" marketing bullets) well outside what an accounting/bookkeeping support company does.  
**SEO purpose:** Aligns both pages with the site's actual positioning and the AI-WEBSITE-GUIDE content rules (avoid generic/vendor-style copy, avoid unsupported superlatives).  
**URL changed:** No.  
**Metadata changed:** Yes (both titles/descriptions).  
**Content changed:** Yes (full page rework, both pages).

## 2026-08-14 (set up ESLint properly)

### `eslint.config.mjs` (new), `package.json`

**Changed:** Added a flat ESLint config (`eslint-config-next` via `FlatCompat`, since this is ESLint 9 + Next.js 15) so linting runs non-interactively instead of prompting for first-time setup. Switched `package.json`'s `lint` script from the deprecated `next lint` (removed in Next.js 16) to the plain `eslint .` CLI, which is Next's own recommended migration path. Also fixed the two real (non-cosmetic) findings: an unused `Link` import in `app/technology/drake-tax/page.tsx`, and an `any` type in `components/touch-ripple.tsx` (replaced with a properly typed optional property for the legacy IE `msMaxTouchPoints` check). Disabled `react/no-unescaped-entities`, which flagged ~75 plain apostrophes/quotes inside JSX text across ~20 content files — purely cosmetic (doesn't affect rendering, accessibility, or crawling), and mechanically escaping that many instances risked mangling copy for no functional benefit.  
**Why:** This was a pending item from the original audit ("Set up ESLint config"). Without it, `npm run lint` couldn't run in CI at all.  
**SEO purpose:** N/A directly, but a working lint step catches real bugs (like the unused import and `any` type) before they ship.  
**URL changed:** No. **Metadata changed:** No. **Content changed:** No (code/tooling only).  
**Caveat:** `package.json` now lists `eslint` and `eslint-config-next` as devDependencies, but this environment only has `npm` available, not `pnpm` (the project's canonical package manager per `pnpm-lock.yaml`). `pnpm-lock.yaml` was **not** regenerated here — run `pnpm install` locally once to bring it in sync before relying on a clean `pnpm install` in CI/deploy.

## 2026-08-14 (crawlability audit: Google + AI-tool crawling)

Full site-wide crawlability sweep, prompted by a direct request to check for crawling issues affecting Google and other AI tools (ChatGPT/Perplexity-style crawlers that read `llms.txt`, etc.).

### `app/services/accounting/page.tsx` (new page — the big one)

**Changed:** Created the missing `/services/accounting` page. This route was referenced from **15 places** across the codebase — including the site-wide footer (every page), the homepage service grid, `public/llms.txt`'s own Services list, and `app/sitemap.ts` (which auto-generates `/services/${slug}` for every entry in `lib/data.ts`'s `services` array, which already included `accounting`) — but no `page.tsx` existed for it. Every one of those links, and the sitemap entry, was a 404.  
**Why:** This is exactly the kind of issue that hurts both Google and AI-tool crawling: a sitemap referencing a dead URL wastes crawl budget and can trigger Search Console errors, `llms.txt` (the file AI tools use to discover site content) pointed AI crawlers at a 404, and a footer link that's broken on literally every page is a poor signal for both crawlers and visitors. Built the page using the `accounting` service's existing description in `lib/data.ts` and the same `ServicePageTemplate` pattern as the other service pages, so it's now consistent with the rest of the services cluster.  
**SEO purpose:** Fixes 15 internal 404s at once, makes the sitemap fully accurate, and makes `llms.txt` accurate for AI-crawler discovery.  
**URL changed:** No (this URL already existed conceptually everywhere it was linked from — it just didn't resolve).  
**Metadata changed:** Yes (new page).  
**Content changed:** Yes (new page).

### `app/services/page.tsx`

**Changed:** Meta title "Accounting Services" → "Accounting & Bookkeeping Services".  
**Why:** Adding the new `/services/accounting` page created an exact duplicate `<title>` with the `/services` hub page, which had reused the same title.  
**SEO purpose:** Removes a duplicate-title issue between two distinct, now-both-real pages.  
**URL changed:** No. **Metadata changed:** Yes. **Content changed:** No.

### Full audit performed, no other issues found

- **Sitemap accuracy:** Programmatically diffed every URL in the generated `sitemap.xml` against every real `page.tsx` route. Before this pass: 1 sitemap URL with no page (`/services/accounting`, now fixed). After: 0 mismatches in either direction. (`/privacy` and `/terms` are intentionally excluded per the sitemap's own documented utility-page policy.)
- **Internal links:** Programmatically checked every `href="/..."` and every `slug`-based link pattern across the entire `app/` and `components/` tree against the real route list. 0 broken links remain.
- **robots.ts / meta robots:** Confirmed no page has an accidental `noindex`; robots.ts correctly allows crawling and points at the production sitemap.
- **Duplicate titles/descriptions:** Programmatically parsed every page's `generateMetadata()` call. Found and fixed 1 duplicate title (`/services` vs the new `/services/accounting`). No duplicate descriptions found.
- **Heading structure:** Every page renders exactly one `<h1>` (via the shared `PremiumHero`, `HeroCarousel`, or `ArticleLayout` components).
- **External images:** No `<Image>` usage references a domain outside `next.config.mjs`'s `remotePatterns` (only `images.unsplash.com` is allowed, and nothing else is used) — an unlisted domain would silently break the image at build/runtime.
- **`public/llms.txt`:** No stale CFO references; the `/services/accounting` link it already contained is now a real page instead of a 404.

## 2026-08-14 (market pages: fix "Industries We Serve" accuracy + add internal links)

Follow-up to the note left at the end of the previous pass.

### `app/markets/united-states/page.tsx`, `app/markets/united-kingdom/page.tsx`, `app/markets/australia/page.tsx`

**Changed:** Replaced each market page's "Industries We Serve" list. Previously each list was plain, unlinked text mixing the site's six real industries (CPA Firms, Technology, Healthcare, E-Commerce, Real Estate, Professional Services) with several industries that have no dedicated page anywhere on the site (Manufacturing, Non-profit, Construction, Hospitality, Mining, Agriculture, Tourism). Replaced with the site's actual industries only, each now a real internal link to its `/industries/*` page (previously plain `<span>` text, not links).  
**Why:** The old lists implied industry coverage the site doesn't actually have pages for, and were a missed internal-linking opportunity between market pages and industry pages (flagged as a pending item in the original audit).  
**SEO purpose:** Removes inaccurate claims; adds genuine contextual internal links from three market pages to six industry pages.  
**URL changed:** No.  
**Metadata changed:** No.  
**Content changed:** Yes.

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
