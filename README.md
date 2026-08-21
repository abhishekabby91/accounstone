# Accounstone

Marketing site for [Accounstone](https://www.accounstone.com) — outsourced accounting,
bookkeeping, tax preparation, payroll, and audit support for CPA firms and growing
businesses across the US, UK, and Australia.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Getting started

This project uses **pnpm**. Using npm will produce a lockfile that does not match
Vercel's build step.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Before committing:

```bash
pnpm eslint .     # must be silent
pnpm next build   # must complete
```

## Contributing

**Read [`CLAUDE.md`](./CLAUDE.md) first.** It is the orientation file for anyone —
human or AI — working on this repository: which documents are authoritative, the
content rules that exist because real overclaims once shipped, the sitemap drift check,
and the open decisions that should not be resolved unilaterally.

Key references:

- [`AI-WEBSITE-GUIDE.md`](./AI-WEBSITE-GUIDE.md) — tone, content rules, build gotchas
- [`knowledge/`](./knowledge) — authoritative facts about what Accounstone does and does not offer
- [`docs/`](./docs) — route, search-intent, and content registries
- [`SEO-CHANGELOG.md`](./SEO-CHANGELOG.md) — dated record of every change and why

Every push to `main` deploys to production automatically.
