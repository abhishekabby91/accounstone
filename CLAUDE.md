# Accounstone — start here

Marketing site for Accounstone, an outsourced accounting company serving CPA firms and
growing businesses across the **US, UK, and Australia**.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · **pnpm** (not npm) ·
deployed on Vercel, auto-deploying every push to `main` → https://www.accounstone.com

---

## Read these before changing anything

In this order. They are the authoritative sources; this file is only the index.

| File | What it governs |
|---|---|
| `AI-WEBSITE-GUIDE.md` | Tone, content rules, architecture, banned phrases, **"Known build gotchas"**. The single most important file. |
| `knowledge/company/scope-boundaries.md` | **What Accounstone does NOT do.** Every section exists because a real overclaim shipped to production. Check before writing any capability claim. |
| `docs/SEARCH-INTENTS.md` | One search intent → one URL. Check before creating a page. |
| `docs/ROUTES.md` | Route inventory + the sitemap drift check (below). |
| `docs/CONTENT-REGISTRY.md` | Blog/guide inventory and status. Check before writing content. |
| `SEO-CHANGELOG.md` | Dated record of every change and why. Append to it — do not rewrite history. |
| `knowledge/` | Per-service, per-market, per-ICP facts. The source of truth for claims. |

`SEO-AUDIT.md` and `ACCounstone-SEO-AGENT.md` are earlier strategy documents — useful
background, superseded on specifics by the files above.

---

## Current state (verified 2026-08-27)

- **84 routes**, all returning 200. Sitemap has exact parity: 84 ↔ 84.
- **Services are region-first.** 21 commercial pages = 7 services × 3 regions, at
  `/services/{service}/{region}`. The matrix lives in `lib/data.ts` (`regions`,
  `serviceRegions`, `serviceRegionPaths`) and drives the navbar, footer, `/services`
  hub and `app/sitemap.ts` from one place. **Do not recreate a generic
  `/services/{slug}` page** — those 7 URLs are 301s and a generic page competes with
  its own regional children.
- Eight redirects, all single-hop: the 7 retired generic service URLs → their
  United States page, plus `/blog/outsourced-accounting-services` →
  `/resources/guides/outsourced-accounting-services-guide`.
- **Markets are not in the primary navbar** but the pages are live, indexable and
  linked from the footer and contextually. They serve broad regional intent
  (HMRC/VAT/MTD, ATO/GST/BAS, IRS/GAAP/nexus) and measure 0.0% content overlap with
  the commercial Service × Region pages. Keep that boundary.
- Zero duplicate titles/canonicals, zero missing metadata, zero missing or duplicate
  `h1`, zero accidental `noindex`, zero broken internal links, zero orphan pages,
  zero internal links pointing at a redirect.
- Worst near-duplicate pair across the 21 commercial pages is 16.6%; none above 25%.
- No horizontal overflow at any width 320–1440px.

### The navbar is not a crawl path

Dropdown contents render only when open, and parent items with children render as
`<button>`, not `<a>` — so **the navbar emits zero links into server HTML**. The
footer is the site's actual crawl skeleton. If you add a section, add it to the
footer or it will not be discovered by link. This is how `/technology` and `/blog`
ended up with zero inbound links before 2026-08-27.

## Open items — decisions, not engineering

Do **not** resolve these unilaterally. Each needs the owner.

1. **Analytics is not installed.** No GA4/GTM/Vercel Analytics tag exists anywhere.
   Any CRO or CTR work is unmeasurable until one does, and the 2026-08-27 restructure
   cannot be validated without it. The owner said they would add it.
2. **No Search Console connection.** All SEO work so far is on-page. Ahrefs returns
   `Insufficient plan` and Semrush reports insufficient API units, so no traffic,
   ranking or backlink evidence is obtainable at all. (`robots.txt` also deliberately
   blocks AhrefsBot and SemrushBot.)
3. **The 7 service redirects all target the United States page.** Chosen without
   traffic data. If GSC shows non-US demand on those URLs, each is one reversible
   line in `next.config.mjs`.
4. **CFO Support and HR services.** Specified in the 2026-08-27 brief, excluded
   because `scope-boundaries.md` forbids both. The owner has said they may be added
   in future — that is a data change plus page files, not a restructure.
5. **Is Canada a real market?** Paused by the owner. See `knowledge/company/identity.md`.
6. **Should "Financial reporting" be a named service line?** See `scope-boundaries.md`.

## Hard rules

These are the ones that caused real problems before. Full list in `AI-WEBSITE-GUIDE.md`.

- **Never claim IRS representation or power of attorney.** Requires a licensed CPA/EA/attorney under Circular 230.
- **Never claim tax planning, tax strategy, or tax advisory.** Accounstone prepares returns and the underlying books; strategy is the client's CPA or registered agent's role.
- **Never claim CFO, financial-advisory, or HR-compliance services.** Not offered in any form.
- **Never claim software implementation or configuration** for third-party platforms. Accounstone works *inside* an existing setup.
- **No absolutes** — "full compliance", "guaranteed", "we ensure", "Absolutely." Prefer "structured around", "aligned with", "prepared for".
- **Never invent** clients, testimonials, statistics, certifications, or credentials.
- **Verify a regulator actually applies to accounting services before naming it.** FCA and ASIC are financial-services regulators, not accounting-service ones.

---

## Working practice

**Branch, verify, then merge.** Work on `claude/<topic>`, run both checks below, merge to
`main` only when the owner says so — merging deploys to production immediately.

```bash
pnpm eslint .       # must be silent
pnpm next build     # must complete; a single bad prop breaks the whole type check
```

`pnpm`, never `npm` — `pnpm install --frozen-lockfile` mirrors Vercel's build step.

### Check duplication within a page, not just across pages

The restructure measured cross-page similarity throughout and kept it low. What
that missed: adding a second content block to an already-built page can repeat
what the page already said. `accounts-receivable/united-kingdom` ended up
stating statutory interest and VAT bad debt relief twice, in near-identical
wording, and it did not show up in any cross-page metric.

Content for these pages lives in two modules that both render on the same page:

- `lib/service-depth.ts` - the mechanics (workstreams, sequence, what the work is)
- `lib/regional-context.ts` - the situation (who the reader is, what goes wrong,
  what stays their decision)

Before adding to either, check them against each other. A quick 6-gram Jaccard
between the two entries for the same key is enough; anything above roughly 10%
means the page is repeating itself.

### The sitemap drift check

This repo's documented recurring failure mode. `app/sitemap.ts` mixes hardcoded `path:`
entries with URLs generated from `lib/data.ts`, so **grepping the source undercounts by
~30 and looks clean**. Diff against the generated sitemap instead, with `pnpm dev` running:

```bash
find app -name "page.tsx" | sed 's|^app||; s|/page.tsx$||; s|^$|/|' | sort > /tmp/disk.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>' \
  | sed 's|<loc>https://www.accounstone.com||; s|</loc>||; s|^$|/|' | sort -u > /tmp/sitemap.txt

comm -13 /tmp/disk.txt /tmp/sitemap.txt   # in sitemap, no page  → would 404
comm -23 /tmp/disk.txt /tmp/sitemap.txt   # page exists, unlisted → never crawled
```

Both should print nothing. This found four unlisted guides on 2026-08-21, and confirmed 84 ↔ 84 parity after the 2026-08-27 restructure.

### Adding a route

`lib/data.ts` entries do **not** create pages. `app/sitemap.ts` and the navbar generate URLs
from those arrays, so adding an entry without the matching `page.tsx` produces dead links —
this previously caused 15 of them. Create the page, the sitemap entry, and the `docs/`
registry row **in the same pass**.

### Type system

`--font-serif` (Georgia) is the display face: heroes, section headings, resource
card titles. `--font-sans` is body and UI. Both were already brand tokens; the
serif simply went unused until 2026-08-27. Keep new headings on `font-serif` so
the page does not read as two designs stitched together.

Shared pieces worth using instead of rebuilding:
`components/section-heading.tsx` (eyebrow + rule + serif heading + lead),
`components/resource-card.tsx` (guide/insight/article card with topic chips),
`lib/resources.ts` (the resource inventory the Resources hub counts from).

### Tap targets: measure, do not eyeball

WCAG 2.5.8 wants 24px minimum, and it exempts links inline in a sentence.
Breadcrumbs, link lists and contact details are **not** inline links, and they
render ~16-19px tall by default here - which is how 73 of them shipped before
anyone noticed. Anything not inside a sentence needs `inline-block py-1.5`.

The check is a Playwright sweep over `main a, main button` across 320-1440px,
skipping `aria-hidden` elements and links whose parent has meaningfully more
text than the link itself. Run it after any layout change.

### Responsive breakpoints

The desktop nav starts at `lg:`, not `md:` — seven nav items plus logo and CTA need ~963px,
so at `md:` (768px, iPad portrait) the Get Started button fell outside the viewport and
`overflow-x: clip` meant the page could not scroll to reach it. Don't move it back.

Card grids are 2-per-row on mobile via `FeatureCard` / `SectionGrid`. Article listings are
deliberately 1-per-row — their titles run 60–90 characters and wrap badly at half width.

---

## Environment constraints

Known limits when working from a sandboxed session:

- **`www.accounstone.com` is blocked** by network egress policy. Live-site verification,
  Lighthouse, and real SERP checks are not possible from there. Use the Vercel MCP tools
  for deployment status, and `pnpm dev` + Playwright for rendered checks.
- **Ahrefs and Semrush MCP tools return plan/quota errors** on this account. Do not present
  their output as data.
- Playwright is available; Chromium is pre-installed at `/opt/pw-browsers/chromium`. It is
  not a project devDependency — resolve it via `$(npm root -g)/playwright`.

---

## Principle

Do not optimize one page while damaging the site. Prefer improving an existing page over
adding a new one. Every claim must trace to something in `knowledge/`. When a change is
outward-facing or hard to reverse — a URL change, a deletion, a merge to `main` — confirm
with the owner first.
