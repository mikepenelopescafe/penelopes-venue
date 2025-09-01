# Service Content Management Guidelines

This directory contains service content files that power the services listing page. These files work in conjunction with the centralized pricing data model to provide rich, SEO-optimized service pages.

## Architecture Overview

### **Hybrid Content System**
- **Pricing Page** → Powered by `/src/data/pricing.ts` (centralized data)
- **Services Page** → Powered by MDX files in this directory
- **Individual Service Pages** → Combination of MDX content + pricing data

### **Data Flow**
1. Add MDX file → Automatically appears on services page
2. Remove MDX file → Automatically removed from services page  
3. Update pricing in `pricing.ts` → All linked services update automatically
4. MDX provides rich content, SEO, descriptions
5. Pricing data provides rates, packages, add-ons

## Requirements for New Service Files

### **1. Required Frontmatter Fields**
Every service MDX file MUST include:

```yaml
---
title: "SEO-optimized title (60 chars max)"
description: "Meta description (120-160 characters)"
keywords: ["keyword1", "keyword2", "keyword3"]
serviceType: "micro-wedding" # Must match schema enum
location:
  city: "Westminster"
  state: "CO"
  region: "Denver Metro"
  isGeneric: false # true for city-agnostic service pages
packageName: "Service Package Name"
shortDescription: "Brief description under 200 characters"
pricingTierId: "wedding-micro" # REQUIRED - must exist in pricing.ts
capacity:
  min: 10
  max: 30
  ideal: 20
amenities:
  - "Amenity 1"
  - "Amenity 2"
availability: "year-round" # year-round, seasonal, weekends-only, custom
duration:
  min: 4
  max: 8
  recommended: 6
targetAudience: ["couples", "families"]
featured: false # true to highlight on services page
---
```

### **2. Pricing Tier Relationship**
- `pricingTierId` MUST reference an existing tier in `/src/data/pricing.ts`
- The pricing tier must be defined BEFORE creating the MDX file
- Pricing tier provides: basePrice, duration, includes, addOns

### **3. Content Structure**
- Use clear, customer-focused language (8th grade reading level)
- Start with customer problem/question
- Include what's included, capacity, pricing info
- Add local SEO elements (city, landmarks, directions)
- Follow brand voice guidelines from main CLAUDE.md

## Workflow for Adding New Services

### **Step 1: Define Pricing Tier**
Add to `/src/data/pricing.ts`:
```typescript
social: {
  graduation: {
    id: 'social-graduation',
    name: 'Graduation Party',
    description: 'Celebrate academic achievements',
    guestRange: [15, 50],
    basePrice: 1200,
    duration: 4,
    includes: [...],
    addOns: [...]
  }
}
```

### **Step 2: Create MDX File**
Create file in this directory:
- Filename: `graduation-party-westminster.md`
- Set `pricingTierId: "social-graduation"`
- Include all required frontmatter
- Write customer-focused content

### **Step 3: Verify**
- Check services page displays new service
- Verify pricing displays correctly
- Test service detail page
- Run build to catch any errors

## Workflow for Removing Services

### **Option 1: Hide Service**
```yaml
# In frontmatter
featured: false
# Service won't appear prominently but page still exists
```

### **Option 2: Remove Completely**
1. Delete the MDX file from this directory
2. Service automatically removed from services page
3. Optionally clean up pricing tier from `pricing.ts` if not needed

## Workflow for Updating Pricing

### **Price Changes**
1. Edit `/src/data/pricing.ts`
2. All services with matching `pricingTierId` update automatically
3. No need to touch individual MDX files

### **Service Details Changes**
1. Edit the MDX file directly
2. Update frontmatter fields as needed
3. Pricing information will still come from pricing.ts

## Validation & Error Prevention

### **Validation Checks**
The system includes validation to ensure data integrity:
- Warns if `pricingTierId` doesn't exist in pricing data
- TypeScript validation for frontmatter schema
- Build-time checks for missing required fields

### **Common Issues to Avoid**
- ❌ Don't hardcode prices in MDX content - use pricing references
- ❌ Don't create MDX file before defining pricing tier
- ❌ Don't use duplicate `pricingTierId` across services
- ❌ Don't skip required frontmatter fields
- ✅ Always link to existing pricing tier
- ✅ Use descriptive, unique filenames
- ✅ Follow SEO guidelines for title/description

## Service Categories

### **Current Service Types**
Based on schema definition:
- `micro-wedding` - Intimate wedding ceremonies
- `elopement` - Very small, private ceremonies  
- `corporate-event` - Business meetings and parties
- `private-party` - Birthday, anniversary, celebrations
- `bridal-shower` - Pre-wedding celebrations
- `baby-shower` - Baby celebration events
- `wedding` - Full wedding ceremonies
- `reception` - Wedding receptions
- `anniversary` - Anniversary celebrations
- `birthday` - Birthday parties
- `graduation` - Graduation celebrations
- `retirement` - Retirement parties

### **Location Strategy**
- Generic services (`isGeneric: true`) for SEO authority
- Location-specific services for local search
- Westminster focus with expansion capability

## SEO Best Practices

### **File Naming**
- `service-type-location.md` (e.g., `micro-wedding-westminster.md`)
- Use hyphens, not underscores
- Include location for local SEO

### **Content Structure**
- H1: Problem-focused headline
- Lead with customer pain points
- Include local landmarks and directions
- Add capacity, pricing, what's included
- Link to related services and locations

### **Meta Data**
- Title: Under 60 characters, include location
- Description: 120-160 characters, compelling
- Keywords: 3-5 relevant, local terms

## Maintenance

### **Monthly Reviews**
- [ ] Verify all pricing tier references are valid
- [ ] Update seasonal availability if needed
- [ ] Check for new service opportunities
- [ ] Review and respond to customer feedback

### **When Pricing Changes**
- [ ] Update `/src/data/pricing.ts`
- [ ] Verify changes appear on services page
- [ ] Test individual service pages
- [ ] Run full build to check for issues

### **When Adding Locations**
- [ ] Create location-specific variants
- [ ] Update `availableLocations` arrays
- [ ] Add location hub pages
- [ ] Update navigation if needed

---

## Quick Reference Commands

```bash
# Add new service
1. Edit src/data/pricing.ts (add tier)
2. Create src/content/services/new-service.md
3. Set pricingTierId in frontmatter
4. npm run dev (test locally)

# Remove service  
1. Delete src/content/services/service-name.md
2. Optionally clean up pricing.ts

# Update pricing
1. Edit src/data/pricing.ts
2. All related services update automatically

# Validate setup
npm run build  # Catches validation errors
```

Remember: The goal is scalable, maintainable service management where pricing stays consistent and content remains flexible for SEO and marketing needs.