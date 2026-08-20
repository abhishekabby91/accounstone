# Accounstone SEO Growth Agent

This folder contains the executable first-pass SEO/content-quality agent for Accounstone.

## What it does

`npm run seo:agent` scans the Next.js `app/` tree and produces a dated report under `seo-agent/reports/` covering:

- missing page metadata
- missing or multiple H1s
- shallow pages that need an intent review
- generic/AI-sounding phrases
- risky or unsupported marketing claims
- weak internal linking
- duplicate title candidates
- page-level quality scores
- a prioritized SEO action queue
- CTR opportunities that should be matched with Google Search Console data

## Important

This agent is deliberately **review-first**. It does not automatically rewrite production copy, delete pages, change URLs, alter canonical strategy, or deploy changes. Those actions require human review.

The broader strategy is defined in `ACCounstone-SEO-AGENT.md` and should be treated as the operating specification for future GSC/SERP/content integrations.

## Local usage

```bash
npm run seo:agent
```

The report is written to:

```text
seo-agent/reports/YYYY-MM-DD.md
seo-agent/reports/latest.md
```

## Priority model

- **HIGH** — trust, missing critical metadata or structural issues
- **MEDIUM** — humanization, heading quality, content depth, duplicate metadata
- **LOW** — incremental internal-linking opportunities

## Future integrations

The architecture is ready to be extended with:

1. Google Search Console query/page data
2. SERP/competitor research
3. LLM-assisted human rewriting with approval workflow
4. automated internal-link suggestions
5. schema validation
6. Core Web Vitals/PageSpeed data
7. pull-request SEO QA
8. monthly performance reports

The agent should optimize for useful organic visibility and qualified clicks, not page count or keyword density.
