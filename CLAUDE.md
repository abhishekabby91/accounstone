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

## Current state (verified 2026-08-21)

- **89 routes**, all returning 200. Sitemap has exact parity: 89 ↔ 89.
- One redirect: `/blog/outsourced-accounting-services` → `/resources/guides/outsourced-accounting-services-guide` (in `next.config.mjs`).
- Zero duplicate titles/canonicals, zero missing metadata, zero missing or duplicate `h1`, zero accidental `noindex`.
- No horizontal overflow at any width 320–1440px. Homepage has no tap target under the 24px WCAG 2.5.8 minimum.
- Production is live and green.

## Open items — decisions, not engineering

Do **not** resolve these unilaterally. Each needs the owner.

1. **Analytics is not installed.** No GA4/GTM/Vercel Analytics tag exists anywhere. Any CRO or CTR work is unmeasurable until one does. The owner said they would add it.
2. **No Search Console connection.** All SEO work so far is on-page. Real ranking work needs GSC data. (`robots.txt` deliberately blocks AhrefsBot and SemrushBot, which is why those tools show little for this domain.)
3. **Is Canada a real market?** Paused by the owner. Either it needs a full cluster like US/UK/AU, or it was a third-party directory artifact. See `knowledge/company/identity.md`.
4. **Should "Financial reporting" be a named service line?** A positioning decision near the financial-advisory boundary the site deliberately stays behind. See `knowledge/company/scope-boundaries.md`.

---

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

Both should print nothing. This found four unlisted guides on 2026-08-21.

### Adding a route

`lib/data.ts` entries do **not** create pages. `app/sitemap.ts` and the navbar generate URLs
from those arrays, so adding an entry without the matching `page.tsx` produces dead links —
this previously caused 15 of them. Create the page, the sitemap entry, and the `docs/`
registry row **in the same pass**.

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
