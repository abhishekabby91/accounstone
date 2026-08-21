# Accounstone Knowledge Base

Source of truth for **what is factually true about the business**. Read before writing any page, article, metadata description, or schema.

## Read in this order

1. **`company/scope-boundaries.md`** — what Accounstone does NOT do. Read first, always. Every rule here was a real overclaim removed from production.
2. **`company/identity.md`** — verified facts: contact details, service lines, markets, industries, platforms. Includes an explicit "unverified — do not publish" list.

## How this fits with the other agent files

| File | Governs |
|---|---|
| `knowledge/` (this) | **What is true** — facts, scope, verified claims |
| `AI-WEBSITE-GUIDE.md` | **How to write** — tone, content principles, architecture, known build gotchas |
| `ACCounstone-SEO-AGENT.md` | **How to operate** — agent modes, SEO workflows, output formats |
| `SEO-CHANGELOG.md` | **What changed and why** — dated audit trail |

They do not overlap. When they appear to conflict, `knowledge/` wins on facts, `AI-WEBSITE-GUIDE.md` wins on style.

## Why this exists

Every overclaim found and removed during the August 2026 audit — FCA regulatory references, IRS representation with power of attorney, tax planning services, HR compliance, CFO advisory, "leading software" superlatives — had the same cause: an agent wrote plausible-sounding copy with no authoritative source to check it against.

Fluent and wrong is the failure mode this directory prevents.

## Rules for agents

- **Read-only.** Agents may cite these files. Only a human may edit them.
- If a needed fact is missing, **ask** — do not infer, estimate, or borrow from a competitor.
- If a fact appears under "unverified", it may not be published in any form.
- If a draft crosses a scope boundary, the draft is wrong, not the boundary.

## Still to build

- `services/` — one file per service line, with the exact deliverables and authority boundaries for each
- `markets/` — us.md, uk.md, au.md: regulatory context, terminology, buyer expectations per market
- `icp/` — buyer personas (CPA firm partner, SMB owner, finance manager)
- `competitors/` — positioning and content-gap tracking
- `geo/` — monthly AI-search visibility log
