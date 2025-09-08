# Venue & Catering Architecture Guidelines (No Service Pages)

This document defines the simplified content and pricing architecture centered on two offerings pages: a single Venue page and a single Catering page. Service-specific pages are deprecated. The goal: simple, transparent pricing that’s easy for customers to understand, while keeping strong foundations for location and keyword SEO.

## Architecture Overview

### **Hybrid Content System**
- **Venue Page (`/venue`)** → Powered by `venuePricing` in `/src/data/pricing.ts` + venue amenities/content
- **Catering Page (`/catering`)** → Powered by `cateringPackages` and `barPackages` in `/src/data/pricing.ts`
- **Location Pages (`/locations/...`)** → Powered by MD/MDX in `/src/content/locations/`; link to `/venue` and `/catering`
- **Keyword Landing Pages (`/content/pages/...`)** → MD/MDX pages for SEO topics; link to `/venue` and `/catering`

### **Data Flow**
1. Update `/src/data/pricing.ts` → Venue and Catering pages update automatically
2. Update `/src/content/locations/*.md` → Location hub pages update
3. Update `/src/content/pages/*.md` → Keyword landing pages update
4. No service MDX files are used; service-specific pricing is removed

## Offerings Pages

### Venue Page (`/venue`)
- Source of truth: `venuePricing` in `/src/data/pricing.ts`
- Shows: pricing by day-type (offPeak/peak/premium), minimum hours, hour blocks, included amenities, capacity ranges, gallery, FAQs, CTAs
- Schema: `EventVenue`

### Catering Page (`/catering`)
- Source of truth: `cateringPackages` and `barPackages` in `/src/data/pricing.ts`
- Shows: menu families, service styles (plated/buffet/passed), per-guest ranges, bar options and minimums, FAQs, CTAs
- Schema: `Caterer`

### Content Style
- Use clear, customer-focused language 
- Start with the customer problem
- Include what’s included and transparent pricing
- Add local SEO elements (city, landmarks, directions)
- Follow brand voice and tone guidelines in Cursor Rules `brand-voice.mdc`

## Workflow Updates

### Add or Update Pricing
1. Edit `/src/data/pricing.ts`
   - Venue: update `venuePricing`
   - Catering: update `cateringPackages` and `barPackages`
2. Run locally and verify `/venue` and `/catering`

### Add or Update Locations
1. Create/update MD/MDX in `/src/content/locations/`
2. Ensure each location links to `/venue` and `/catering`
3. Include local landmarks, directions, and testimonials

## Decommissioning Services (Deprecated)

- No new service pages or MDX files
- Remove `/src/pages/services/*` routes
- Remove the `services` collection from `src/content/config.ts`
- Replace any remaining links to `/services` with `/venue` or `/catering`

## Updating Pricing

1. Edit `/src/data/pricing.ts`
2. Verify updates on `/venue` and `/catering`

## Validation & Error Prevention

### Remove Legacy Validation
- Remove validation tied to service `pricingTierId`
- Remove utilities that expect service pages

### New Checks
- Ensure `/venue` renders `venuePricing` blocks and minimums
- Ensure `/catering` renders all packages and bar options
- Verify all legacy `/services` links are updated

## SEO Strategy

### Core Pages
- `/venue`: Primary commercial intent for all “venue” queries
- `/catering`: Primary commercial intent for catering + bar queries

### Location SEO
- Keep `/locations/[city]` hub pages with local landmarks, directions, testimonials, and links to `/venue` and `/catering`

### Keyword Pages (Topical Authority)
- Use `/src/content/pages` for keyword clusters (venue-types, guest-count, budget-focused, seasonal, special-features)
- Each keyword page links back to `/venue` and/or `/catering`

## SEO Best Practices

### **File Naming**
- Keyword pages: `topic-keyword.md`
- Location pages: `city-slug.md`

### **Content Structure**
- H1: Problem-focused headline
- Lead with customer pain points
- Include local landmarks and directions (on location pages)
- Add capacity, pricing, and what’s included (on `/venue` and `/catering`)
- Link to related keyword and location pages

### **Meta Data**
- Title: Under 60 characters, include location when relevant
- Description: 120-160 characters, compelling
- Keywords: 3-5 relevant, local terms

## Maintenance

### **Monthly Reviews**
- [ ] Verify venue and catering pricing is accurate
- [ ] Update seasonal availability if needed
- [ ] Add new keyword pages as opportunities arise
- [ ] Review and respond to customer feedback

### **When Pricing Changes**
- [ ] Update `/src/data/pricing.ts`
- [ ] Verify changes appear on `/venue` and `/catering`
- [ ] Run full build to check for issues

### **When Adding Locations**
- [ ] Add/Update MD/MDX in `/src/content/locations/`
- [ ] Link to `/venue` and `/catering`
- [ ] Update navigation if needed

---

## Quick Reference Commands

```bash
# Update pricing
1. Edit src/data/pricing.ts
2. npm run dev (test locally)

# Update locations  
1. Edit src/content/locations/*.md
2. Link to /venue and /catering

# Add keyword page
1. Create src/content/pages/new-topic.md
2. Link to /venue and/or /catering

# Validate setup
npm run build  # Catches content errors
```

Remember: Keep it simple for customers—one clean Venue page and one clean Catering page—while building SEO depth through locations and keyword pages. For tone/voice, follow Cursor Rules `brand-voice.mdc`.