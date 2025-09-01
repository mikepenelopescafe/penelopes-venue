import { defineCollection, z } from 'astro:content';

// SEO schema reusable across collections
const seoSchema = z.object({
  title: z.string().max(60, 'Title should be under 60 characters for SEO'),
  description: z.string().min(120).max(160, 'Description should be 120-160 characters'),
  keywords: z.array(z.string()).min(3, 'Include at least 3 keywords'),
  customerProblem: z.string().optional(), // What specific problem does this solve?
  canonical: z.string().url().optional(),
  ogImage: z.string().optional(),
  publishDate: z.date().optional(),
  updateDate: z.date().optional(),
  noIndex: z.boolean().default(false),
  featured: z.boolean().default(false),
});

// Pages collection - for keyword-targeted landing pages
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    template: z.enum(['landing', 'service', 'about', 'contact', 'keyword']).default('landing'),
    hero: z.object({
      headline: z.string(),
      subheadline: z.string().optional(),
      ctaText: z.string().default('Book Your Event'),
      ctaLink: z.string().default('/contact'),
    }).optional(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
      image: z.string().optional(),
    })).optional(),
    keywordCategory: z.enum([
      'venue-types',
      'event-styles', 
      'budget-focused',
      'guest-count',
      'seasonal',
      'special-features',
      'location-specific'
    ]).optional(),
    relatedServices: z.array(z.string()).optional(),
    relatedLocations: z.array(z.string()).optional(),
  }),
});

// Blog collection - for SEO articles
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    author: z.string().default('Penelope\'s Venue Team'),
    category: z.enum([
      'weddings',
      'events',
      'planning-tips',
      'venue-features',
      'testimonials',
      'seasonal'
    ]),
    tags: z.array(z.string()).optional(),
    readingTime: z.number().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
  }),
});

// Services collection - for venue packages and service types (generic and location-specific)
const services = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    serviceType: z.enum([
      'micro-wedding',
      'elopement',
      'corporate-event',
      'private-party',
      'bridal-shower',
      'baby-shower',
      'wedding',
      'reception',
      'anniversary',
      'birthday',
      'graduation',
      'retirement'
    ]),
    location: z.object({
      city: z.string().default('Westminster'),
      state: z.string().default('CO'),
      region: z.string().default('Denver Metro'),
      isGeneric: z.boolean().default(false), // true for city-agnostic service pages
    }),
    packageName: z.string(),
    shortDescription: z.string().max(200, 'Short description should be under 200 characters'),
    // Primary pricing reference system
    pricingTierId: z.string(), // Reference to pricing tier ID (required)
    capacity: z.object({
      min: z.number(),
      max: z.number(),
      ideal: z.number().optional(),
    }),
    amenities: z.array(z.string()),
    availability: z.enum(['year-round', 'seasonal', 'weekends-only', 'custom']),
    duration: z.object({
      min: z.number(), // hours
      max: z.number(), // hours
      recommended: z.number().optional(),
    }).optional(),
    targetAudience: z.array(z.string()).optional(), // e.g., ["couples", "families", "professionals"]
    bookingLink: z.string().url().optional(),
    pricingPageLink: z.string().default('/pricing'),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    relatedServices: z.array(z.string()).optional(), // slugs of related services
    availableLocations: z.array(z.string()).optional(), // for generic services, list of cities
    featured: z.boolean().default(false),
  }),
});

// Locations collection - for city-specific hub pages and location-service combinations
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    city: z.string(),
    state: z.string().default('CO'),
    region: z.string().default('Denver Metro'),
    citySlug: z.string(), // URL-friendly version: "westminster", "arvada"
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    demographics: z.object({
      population: z.number().optional(),
      medianIncome: z.number().optional(),
      description: z.string().optional(),
    }).optional(),
    localInfo: z.object({
      landmarks: z.array(z.string()).optional(),
      neighborhoods: z.array(z.string()).optional(),
      nearbyAttractions: z.array(z.string()).optional(),
      transportation: z.object({
        fromDenver: z.string().optional(),
        fromBoulder: z.string().optional(),
        publicTransit: z.string().optional(),
        parking: z.string().optional(),
      }).optional(),
    }).optional(),
    availableServices: z.array(z.object({
      serviceType: z.string(),
      packageName: z.string(),
      slug: z.string(),
      price: z.number(),
      featured: z.boolean().default(false),
    })),
    localTestimonials: z.array(z.string()).optional(), // slugs to testimonials
    businessSchema: z.object({
      name: z.string(),
      address: z.object({
        street: z.string().optional(),
        city: z.string(),
        state: z.string(),
        zipCode: z.string().optional(),
      }),
      phone: z.string().optional(),
      email: z.string().optional(),
      website: z.string().optional(),
    }),
    priority: z.enum(['primary', 'secondary', 'tertiary']).default('secondary'),
  }),
});

// Testimonials collection - for social proof
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    eventType: z.string(),
    eventDate: z.date(),
    rating: z.number().min(1).max(5),
    highlight: z.string().max(150, 'Keep highlight under 150 characters'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    verified: z.boolean().default(true),
  }),
});

// Docs collection - for internal documentation and strategy documents
const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  pages,
  blog,
  services,
  locations,
  testimonials,
  docs,
};