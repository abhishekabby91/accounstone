# Accounstone SEO Changelog

## 2026-08-21 (handoff continuation: bottom-funnel guides, schema completion, knowledge base)

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
