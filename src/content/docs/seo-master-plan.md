---
title: SEO Master Plan — Keyword Strategy + Local SEO (Consolidated)
---

# Penelope's Venue: Consolidated SEO Strategy (Keyword + Local)

This single document consolidates the “98‑Keyword SEO Strategy & Implementation Plan (Revised)” and the “Local SEO Plan (Revised)” into one actionable playbook. It also documents the anti‑cannibalization enforcement we implemented in code so content ops and engineering stay aligned.

## Executive Summary

- Focus SEO on budget/value terms, Spanish style differentiators, and Denver/Westminster local intent.
- Ship high‑impact landing pages through the `pages` collection; scale city coverage with the `service-areas` collection.
- Enforce anti‑cannibalization with a prebuild validator and governance fields (`primaryKeyword`, `intent`, `dimension`, `citySlug/state`, `canonicalOf`).
- KPI targets (30–90 days): top 10 rankings for core terms, rising rich results (FAQ/Breadcrumb/LocalBusiness), and sustained increases in qualified tour requests.

---

## Keyword Clusters & Targets (Prioritized)

### Cluster 1 — Budget & Value (Highest Priority)
- affordable/cheap/budget wedding venue terms for Denver/Colorado
- Examples: “affordable wedding venue denver”, “cheap wedding venues denver”, “wedding venue under 5000 denver”, “colorado wedding venues on a budget”

### Cluster 2 — Intimate & Small Weddings (High)
- small/intimate/micro + guest‑count pages: 50/60/75/100

### Cluster 3 — Spanish & Cultural Style (High; unique differentiator)
- spanish wedding venue, spanish style wedding venue colorado, hacienda wedding venue denver

### Cluster 4 — Local City Coverage (High)
- service areas around Denver/Westminster (Arvada, Broomfield, Thornton, Lakewood, etc.)

### Cluster 5 — Event Types (Medium)
- birthday/anniversary/corporate/private party, reception venues, elopement reception

### Cluster 6 — Seasonal (Medium)
- holiday/christmas/new year, winter/summer/fall/spring weddings

### Cluster 7–10 — Planning, Features, Generic, Packages (Medium→Low)
- rehearsal dinner, engagement/bridal/baby shower; venue with catering/bar/parking; generic halls; booking/package pages

---

## Local SEO Plan (Condensed)

### Technical foundation (already in codebase)
- `@astrojs/sitemap` configured; robots.txt points to sitemap index.
- Canonicals resolved in layout via `Astro.url` (per‑page overrides supported).
- JSON‑LD: global `EventVenue`; `FAQPage` where applicable; `BreadcrumbList` on hubs.
- Collections: `pages` for landing pages; `service-areas` for city landers with rich local fields.

### Phase 1 — Core money pages (weeks 1–3)
- Strengthen `/venue` with internal links to city/budget hubs; add anchors for capacities; ensure FAQ.
- Publish/verify high‑value pages in `pages`:
  - `budget-focused/affordable-wedding-venue-denver` (primary for Denver budget intent)
  - Style hubs: `venue-types/spanish-wedding-venue`, plus `micro-wedding-venue` if missing
- Expand Denver/Westminster in `service-areas` with localized content (landmarks, directions, parking, testimonials, localized hero).

### Phase 2 — Local expansion (month 2)
- Flesh out Arvada/Broomfield/Thornton/Lakewood/Northglenn city content.
- Cross‑link among neighbors and to `/service-areas/` index.

### Phase 3 — Occasion & Capacity long‑tails (month 3)
- Occasion: micro wedding, corporate, birthdays, elopement reception, anniversary, holiday party.
- Capacity: 50/60/75/100 guest pages; link from `/venue` with jump links.

### Phase 4 — Style/Features scale (ongoing)
- Add style/feature pages only when demand and content depth justify a dedicated page.

---

## Anti‑Cannibalization Enforcement (Implemented)

This system is live and enforced at build time.

### Governance fields (frontmatter)
In `src/content/config.ts` for the `pages` collection:
- `primaryKeyword: string` — unique site‑wide (required for new keyword pages).
- `intent: "navigational" | "commercial" | "transactional" | "informational"` — defines searcher purpose.
- `dimension: "city" | "occasion" | "capacity" | "season" | "feature" | "style"` — decision dimension for the page.
- `citySlug?: string`, `state?: "CO"` — scope local variants (for city‑scoped topics).
- `canonicalOf?: string` — set when this entry is a variant that must canonicalize to a primary URL.

These fields also exist appropriately in `service-areas` with a rich local schema.

### Prebuild validator (CI‑safe)
- Script: `scripts/validate-keywords.mjs` (runs as `prebuild`).
- Builds a registry at `src/content/keyword-registry.json` from `pages` and `service-areas`.
- Enforces two rules:
  1) `primaryKeyword` must be unique across the site (unless the entry is a canonical variant via `canonicalOf`).
  2) No duplicate tuple of `(intent + dimension + scope)` where `scope := citySlug || season || ''` across entries (unless canonical variant).
- Example error messages:
  - `Duplicate primaryKeyword: "..."` with colliding URLs
  - `Duplicate intent/dimension scope: commercial|feature|denver`

### How to resolve conflicts
1) If two entries target the same primary intent, keep one canonical URL and set `canonicalOf` on the others to point to it.
2) If two entries share the same `(intent + dimension + scope)`, either:
   - Differentiate scope (e.g., set `citySlug: "denver"` vs `"westminster"`), or
   - Merge content into the primary and set `canonicalOf` on the variant.
3) Re‑run `npm run build` (validator executes on `prebuild`) until no conflicts remain.

### Authoring checklist (new page)
- Choose one unique `primaryKeyword`.
- Set `intent` and `dimension` accurately.
- If the topic is city or seasonal, set `citySlug` or `season`.
- If this is a variant of a primary, set `canonicalOf` to the primary URL.
- Keep SEO limits: title ≤ 60 chars, description 120–160 chars.

---

## Implementation Priorities (Consolidated)

1) Budget cluster (now shipping): under‑$5k, cheap/affordable/budget pages; Colorado budget hub.
2) Spanish style cluster: `spanish-wedding-venue` hub, plus `spanish-style-wedding-venue-colorado`, `hacienda-wedding-venue-denver` as variants or scoped pages per validator.
3) Capacity pages: 50/60/75/100 guests; link from `/venue`.
4) City expansion: Denver/Westminster deepening, then Arvada/Broomfield/Thornton/Lakewood.

---

## Technical SEO Requirements (Essentials)

- URL structure: `/category/keyword-phrase`
- Canonicals: single canonical per primary intent; variants set `canonicalOf`.
- Titles ≤ 60 chars; descriptions 120–160 chars (enforced by `zod` schema).
- Internal links: hubs ↔ spokes; city pages link to `/venue` and `/catering`.
- JSON‑LD: `EventVenue` globally; `FAQPage` where helpful; `BreadcrumbList` on hubs.
- Media: prefer WebP; set explicit image width/height to reduce CLS.

---

## Measurement & KPIs

### 30‑Day Targets
- Top‑10 for core budget/style/local terms; +40% organic traffic; 20+ tour requests.

### 90‑Day Targets
- Top‑5 for expanded set; +150% organic; 60+ tour requests; improved local pack visibility.

---

## When to Create a Page vs. a Section

Create a new page when all are true:
1) Distinct decision dimension (city/occasion/capacity/season/feature),
2) Est. volume ≥ 90/mo or SERP shows dedicated landers, and
3) You can provide 300–600 words of unique content + proof.

Otherwise, add a section/FAQ to the most relevant existing page and monitor impressions. Spin out later if demand proves out.

---

## Ops Notes

- Content locations:
  - Landing pages: `src/content/pages/...` (collection: `pages`)
  - City pages: `src/content/service-areas/...` (collection: `service-areas`)
- Build commands:
  - Dev: `npm run dev`
  - Validate only: `npm run validate:keywords`
  - Build: `npm run build` (runs validator first)


