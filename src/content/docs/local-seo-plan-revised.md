---
title: Local SEO Plan (Revised for Penelope's Boutique Venue)
---

## Context snapshot (what’s already done here)

- Sitemap and robots: `@astrojs/sitemap` configured; `public/robots.txt` points to `/sitemap-index.xml`.
- Canonicals: set in `src/layouts/Layout.astro` using `new URL(Astro.url.pathname, Astro.site)`.
- Meta + OG/Twitter present globally; per‑page overrides supported via layout props.
- Structured data: site‑wide `EventVenue` JSON‑LD; `BreadcrumbList` and `Service/Offer` JSON‑LD on `src/pages/venue.astro`.
- Local landing system: dynamic city pages via `src/pages/service-areas/[city].astro` backed by `service-areas` content collection with rich local fields (landmarks, transport, demographics, testimonials, hero). Index at `/service-areas/`.
- Thematic hubs: `/venue-types/` and `/budget-focused/` index pages pull from `pages` collection (keywordable landing pages).

Net: strong technical SEO foundation and scalable content architecture already exist. This plan narrows focus to winning Denver/Westminster intent quickly, avoids keyword cannibalization at scale, and prescribes high‑impact additions only.

## Phased plan (project‑aligned)

### Phase 0 — Tighten the foundation (week 1)

- Canonical discipline: keep a single canonical for each primary intent (city, occasion, capacity, season). Use layout `canonical` prop only when consolidating variants.
- JSON‑LD upgrades:
  - Add `AggregateRating` and `Review` (if permitted) to the global `EventVenue` using real averages from testimonials.
  - Add `FAQPage` blocks to city pages and any long‑tail pages with questions.
  - Ensure `BreadcrumbList` on key hubs: `/service-areas/`, `/venue/`, `/catering`, and city pages.
- Media: convert hero/gallery JPGs to WebP where feasible; keep originals for fallbacks; set explicit width/height to preserve CLS.
- GBP hygiene (ongoing): keep photos, services, and Q&A aligned with the intents we’re targeting in Phases 1–2.

KPIs: 0 duplicate titles/canonicals; Core Web Vitals steady; rich result coverage for Breadcrumb/FAQ/LocalBusiness.

### Phase 1 — Core money pages (weeks 1–3)

Targets (DataForSEO + current structure):

- Primary: “wedding venue denver”, “event venue denver”, “wedding venue westminster”.
- Commercial modifiers: “affordable wedding venue denver”, “small wedding venue colorado”.
- Differentiator: “spanish wedding venue”.

Actions

- `/venue` (already strong): add internal links to top city pages and to budget hub; include anchor links for capacities (50/75/100) and FAQ.
- Create/verify dedicated pages in `pages` collection for:
  - `budget-focused/affordable-wedding-venue-denver`
  - `venue-types/spanish-wedding-venue` (style/differentiator hub)
  - If not present: `venue-types/micro-wedding-venue` and `venue-types/wedding-reception-venue-denver`
- Expand Westminster and Denver city entries in `service-areas` collection with: 10–15 nearby landmarks, precise driving directions, parking notes, 1–2 local testimonials each, and localized hero.

KPIs: top‑10 for at least 3 core terms; +30% inquiries from those pages.

### Phase 2 — Local expansion (month 2)

Cities (use existing `service-areas` collection): Arvada, Broomfield, Thornton, Lakewood, Northglenn.

Actions

- For each city entry: unique hero, 300–600 words of local copy, 3–5 landmarks, driving directions, parking, area‑specific testimonial, internal links to `/venue` and `/catering`.
- Add cross‑links among neighboring cities and to `/service-areas/` index.

KPIs: rank top‑10 for “[city] wedding venue” in 3+ cities; local pack impressions +50%.

### Phase 3 — Occasion/capacity long‑tails (month 3)

Occasion hubs in `pages` collection: micro wedding, birthday party, corporate, elopement reception, anniversary, holiday party.

Capacity/budget:

- Add `guest-count` items: `venue/capacity/50-guests`, `.../75-guests`, `.../100-guests` (or as `pages` collection entries under a `/venue/capacity/` route if preferred). Link these from `/venue` with jump links.

Seasonal: winter/holiday parties (FAQ + availability CTAs).

KPIs: 6 incremental page leads/month; 5+ long‑tails in top‑10.

### Phase 4 — Style/features scale (ongoing)

Use `pages` collection to add style/feature pages only when there’s a distinct decision dimension and content depth: “moody wedding venue”, “wedding venue with bar/kitchen”, “courtyard ceremony”, etc. Keep variants as sections on primaries to avoid fragmentation.

## Anti‑cannibalization: governance using your collections

Add light schema fields to enforce uniqueness and intent clarity (no code required now; this is the model to follow when adding entries):

- In `pages` and `service-areas` entries’ frontmatter:
  - `primaryKeyword: string` (required, unique per site)
  - `intent: "navigational" | "commercial" | "transactional" | "informational"`
  - `dimension: "city" | "occasion" | "capacity" | "season" | "feature" | "style"`
  - `canonicalOf?: string` (slug of primary if this is a variant to be consolidated)

Process

- Single‑source registry: add a simple `src/content/keyword-registry.json` (id, url, primaryKeyword, intent, dimension). Keep it updated in the same PR as new pages.
- Pre‑flight check (dev/CI script later): fail build if `primaryKeyword` duplicates or if two entries share the same `intent + dimension + city/occasion` combo.
- Consolidation: if overlap detected, keep the higher‑converting URL as canonical; merge content; 301 old → canonical.
- Internal links: always point to the primary for a topic from hubs and city pages.

## Rich page blueprint (tailored to your components)

Applies to: city pages, occasion pages, and budget pages in `pages`/`service-areas`.

- Above the fold: H1 with primary keyword + brand voice; subhead with capacity and services; primary CTA “See the space”.
- Proof: 6–10 WebP images, alt text; optional 20–30s video.
- Problem → solution: “You’re planning in {city} … we handle venue + catering + bar”.
- Packages/pricing: link to `/venue` price table; show inclusive bullets.
- Local trust: driving directions, parking, landmarks, time from downtown.
- Social proof: 1–2 testimonials (already supported via `localTestimonials`).
- FAQs: 5–8 targeted Q&A; emit `FAQPage` JSON‑LD.
- SEO elements: unique title/description; canonical; `BreadcrumbList`; internal links to relevant hubs.

## Prioritized backlog (next 6–8 weeks)

1) Strengthen `/venue` with capacity anchors and internal links; add AggregateRating JSON‑LD.  
2) Complete Denver + Westminster city content; publish Arvada/Broomfield/Thornton next.  
3) Publish `budget-focused/affordable-wedding-venue-denver`.  
4) Publish `venue-types/spanish-wedding-venue` and `venue-types/micro-wedding-venue`.  
5) Add capacity pages/sections and link from `/venue`.

## Measurement

- Track ranks per cluster (core, city, occasion, capacity). Success: top‑5 core; top‑3 city; top‑10 long‑tail in 30–45 days.
- GSC: CTR ≥4% core; ≥6% long‑tail. Coverage clean; rising FAQ/Breadcrumb rich results.
- Conversions: inquiry rate per page; call tracking; tour form completion.

## When to create a new page vs. a section

Create a page when all are true:

- Distinct decision dimension (city/occasion/capacity/season/feature),
- Est. volume ≥90/mo or SERP shows dedicated landers, and
- You can provide 300–600 words of unique copy + local proof.

Else: add a section/FAQ on the most relevant existing page and monitor impressions; spin out later if demand proves out.

---

This plan is written for the current codebase: it leverages your layout SEO, content collections, and dynamic routes, adds only thin schema fields and content ops to prevent cannibalization, and focuses production energy where it will convert fastest.


