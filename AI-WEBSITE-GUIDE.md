# Accounstone AI / Developer Website Guide

## Purpose

Accounstone is an accounting operations and support company serving CPA firms and growing businesses. The website should explain practical accounting work clearly and help visitors understand how support fits into their existing workflows.

The site is **not** a generic low-cost outsourcing catalogue and should not be written like one.

## Core positioning

Accounstone communicates:

- Practical accounting support
- Dependable execution
- Familiarity with real accounting workflows
- CPA firm support
- Support for growing businesses
- Technology familiarity
- Flexible capacity
- Process discipline
- Clear communication
- Quality review
- Security-conscious handling
- Transparency

Avoid unsupported superlatives such as `best`, `number one`, `world-class`, `unparalleled`, `cheapest`, `guaranteed`, `save 70%`, or `industry-leading`.

Do not fabricate clients, testimonials, reviews, ratings, awards, certifications, employees, offices, partnerships, statistics or years of experience.

## Primary audiences

### CPA firm partners

Think about workload, realization, deadlines, staff capacity, review time, tax-season pressure, hiring difficulty, consistency and client communication.

### Accounting firm managers

Think about workflow, review queues, standardization, turnaround time, documentation, coordination and error reduction.

### Business owners

Think about accurate books, visibility, taxes, reporting, timely information and predictable support.

The page should answer the visitor's question before explaining Accounstone.

## Site architecture

```text
Home
├── Solutions
├── Services
├── Markets
├── Industries
├── Technology
├── Resources
├── Delivery Framework
└── Trust / Company
```

Existing URLs are established architecture. Preserve them unless a URL is clearly broken, duplicate or strategically unnecessary. If a URL must change, add a 301 redirect, update internal links, canonical and sitemap, and document the change in `SEO-CHANGELOG.md`.

## SEO architecture

### Canonical domain

`https://www.accounstone.com`

Do not introduce the Vercel staging domain into canonical, sitemap or robots output.

### Metadata

Shared metadata helpers live in `lib/seo.ts`.

Use page-specific metadata for every indexable page:

- Clear title
- Natural description
- Self-referencing canonical by default
- Appropriate Open Graph data
- Appropriate Twitter data
- `noindex` only where there is a genuine indexation reason

Do not use meta keywords.

Do not stuff multiple keyword variants into titles or descriptions.

The root layout in `app/layout.tsx` should establish broad brand metadata only. Child pages should own their specific search intent.

### Sitemap

The sitemap lives in `app/sitemap.ts`.

Only include useful canonical, indexable URLs. Do not treat the existence of a data object as proof that a page belongs in the sitemap.

Do not generate fake `lastModified` dates. Add a real date only when a reliable source exists.

Sitemap priority is not a ranking strategy.

### Robots

Robots rules live in `app/robots.ts`.

Keep important site content crawlable and point the sitemap to the production domain.

### Structured data

Helpers live in `lib/seo.ts`.

Use only schema types that match visible/verifiable page content:

- Organization
- WebSite
- Service
- BreadcrumbList
- Article
- FAQPage when the visible page has useful FAQs

Do not add Review schema for illustrative content. Do not fabricate ratings, reviews or endorsements.

## Content rules

Every page should have one primary intent.

For each page, decide:

1. What question does this page answer?
2. What related questions are useful?
3. What should the visitor understand next?
4. What is the most relevant next internal link or CTA?

### Human tone

Avoid phrases such as:

- In today's fast-paced business landscape
- In the ever-evolving world
- Unlock your potential
- Take your business to the next level
- Seamless solutions
- Cutting-edge
- Best-in-class
- Game-changing
- Revolutionary

Prefer concrete accounting language:

- Month-end becomes difficult when review queues build up.
- The issue is often not transaction volume but the time required to review and correct the work afterward.
- A firm may have enough people overall but still lack capacity for a specific workflow.

Use short paragraphs, specific examples and realistic process descriptions.

Do not add content just to reach a word count.

## Tier 1 content

Priority pages:

1. Homepage
2. CPA Firms
3. U.S. Bookkeeping
4. U.S. Tax Preparation
5. U.S. Audit Support
6. Real Estate
7. QuickBooks
8. Xero

These pages should be strengthened before creating large quantities of new content.

## Service page rules

A strong service page should explain, where relevant:

- What the service includes
- Who normally needs it
- Common workflow problems
- How the work is handled
- What can be delegated
- What the client/CPA retains in-house
- Review and quality controls
- Communication and ownership
- Technology/workflow context
- Useful FAQs
- Relevant internal resources
- A clear next step

Avoid generic paragraphs that simply claim that Accounstone is reliable, scalable and cost-effective.

## CPA Firms page

Speak directly to actual practice situations:

- Work accumulating before tax season
- Review queues
- Senior staff spending time on transaction-level work
- Hiring difficulty
- Client books needing cleanup
- Recurring monthly bookkeeping
- Tax-season capacity
- Staff augmentation
- Maintaining review control
- Documentation and communication

Use careful language such as `Many firms run into...`, `When your team is already carrying...`, and `If the review queue keeps growing...` rather than pretending every firm has the same problem.

## Real Estate page

Where supported by the actual offering, discuss:

- Property-level bookkeeping
- Bank reconciliations
- Owner statements
- Tenant-related accounting
- AP/AR
- Month-end close
- Property management software
- Yardi/Buildium workflows
- Reporting
- Entity-level accounting

Do not make generic industry claims.

## Technology pages

Technology pages should explain accounting workflows around the software, not pretend Accounstone is the software vendor.

Discuss relevant topics such as:

- What the software is commonly used for
- Setup or cleanup situations
- Reconciliation
- Reporting
- Month-end close
- Integrations
- Workflow support
- When outside accounting capacity may help

## State/location pages

Do not create thin state pages by replacing a location name in a template.

Keep existing Texas, California and Florida URLs only if they provide meaningful local value. If they do not, recommend consolidation rather than creating more location pages.

## Internal linking

Use contextual links between clusters:

- CPA Firms → Bookkeeping / Tax / Audit / Staff Augmentation
- Real Estate → Bookkeeping / AP / AR / Yardi resources
- QuickBooks / Xero → Bookkeeping / relevant guides
- Markets → market-specific service pages
- Resources → closely related commercial or technology pages

Do not add links just to increase link count.

## Trust and factual accuracy

Before publishing a factual trust claim, verify it.

Current owner-verification items include:

- QuickBooks Certified ProAdvisor status and start year
- 24+ years of team accounting experience
- Exact Global Delivery Center wording/status
- Any future certifications
- Any client testimonials and permission to publish them

If information is unavailable, use a TODO or remove the claim. Never invent a replacement.

## Component guidance

Important shared components include:

- `components/navbar.tsx`
- `components/footer.tsx`
- `components/premium-hero.tsx`
- `components/service-page-template.tsx`
- `components/industry-page-template.tsx`
- `components/section-grid.tsx`
- `components/feature-card.tsx`
- `components/faq-section.tsx`
- `components/article-layout.tsx`
- `components/hero-carousel.tsx`

Prefer improving shared components rather than duplicating fixes across dozens of pages.

## Performance and accessibility

Preserve the current design, but review:

- Client component usage
- Animation cost
- Image sizing and loading
- Layout shift
- Keyboard navigation
- Focus states
- Heading hierarchy
- Alt text
- Button/link semantics
- Form labels
- Color contrast
- Reduced-motion behavior

Do not remove design elements merely because they animate. Remove or reduce them when they create a real usability or performance problem.

## What future AI agents must NOT do

- Do not rebuild the website from scratch.
- Do not rename URLs casually.
- Do not add a large batch of templated location pages.
- Do not add keyword stuffing.
- Do not invent testimonials, reviews, certifications or statistics.
- Do not add Review schema without genuine visible reviews.
- Do not create fake `lastModified` dates.
- Do not canonicalize pages to the homepage just to simplify metadata.
- Do not create competing SEO helper systems without first evaluating `lib/seo.ts`.
- Do not replace useful accounting workflow explanations with generic marketing copy.
- Do not remove the current visual identity without a documented UX/accessibility/performance reason.

## Change management

Every SEO/content implementation pass should be recorded in `SEO-CHANGELOG.md` with:

- Date
- File/page
- What changed
- Why it changed
- SEO purpose
- Whether URL changed
- Whether metadata changed
- Whether content changed

## Final quality test

Before merging, ask:

> Would a real accounting professional say this?

Then verify:

- The page answers its intended question.
- Claims are factual.
- Metadata matches the page.
- Canonical is correct.
- Internal links are useful.
- Schema matches visible content.
- No important URL changed accidentally.
- No unsupported trust claim was introduced.
- Build/type/lint checks pass.

The target is not an `SEO-looking` website. The target is a useful accounting resource that also has a clean technical structure for search engines.
