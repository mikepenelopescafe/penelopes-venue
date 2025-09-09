import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// SEO schema reusable across collections with enhanced validation
const seoSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(60, 'Title should be under 60 characters for SEO')
    .trim(),
  description: z.string()
    .min(120, 'Description should be at least 120 characters for SEO')
    .max(160, 'Description should be under 160 characters for SEO')
    .trim(),
  keywords: z.array(z.string().min(1).trim())
    .min(3, 'Include at least 3 keywords')
    .max(10, 'Maximum 10 keywords for optimal SEO')
    .refine(
      (keywords) => new Set(keywords).size === keywords.length,
      'Keywords must be unique'
    ),
  customerProblem: z.string()
    .max(200, 'Customer problem should be concise')
    .optional(), // What specific problem does this solve?
  canonical: z.string().url().optional(),
  ogImage: z.string().optional(),
  publishDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
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
      ctaText: z.string().default('Schedule a Tour'),
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

// Blog collection - for SEO articles with enhanced performance
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    author: z.string()
      .min(1, 'Author is required')
      .trim()
      .default('Penelope\'s Venue Team'),
    category: z.enum([
      'weddings',
      'events',
      'planning-tips',
      'venue-features',
      'testimonials',
      'seasonal'
    ]),
    tags: z.array(z.string().min(1).trim())
      .max(5, 'Maximum 5 tags per post')
      .optional(),
    readingTime: z.number()
      .min(1)
      .max(30, 'Reading time should be realistic')
      .optional(),
    image: z.object({
      src: z.string().url('Image source must be a valid URL'),
      alt: z.string().min(1, 'Alt text is required for accessibility'),
      caption: z.string().max(150, 'Caption should be concise').optional(),
      width: z.number().positive().optional(),
      height: z.number().positive().optional(),
    }).optional(),
    slug: z.string().optional(), // For custom URL slugs
    excerpt: z.string()
      .max(200, 'Excerpt should be under 200 characters')
      .optional(),
  }),
});


// Service Areas collection - for areas served by the Westminster venue with enhanced validation
const serviceAreas = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    city: z.string()
      .min(1, 'City name is required')
      .trim(),
    state: z.string()
      .length(2, 'State should be 2-letter code')
      .toUpperCase()
      .default('CO'),
    region: z.string()
      .trim()
      .default('Denver Metro'),
    citySlug: z.string()
      .regex(/^[a-z0-9-]+$/, 'City slug should be URL-friendly (lowercase, numbers, hyphens only)')
      .toLowerCase(), // URL-friendly version: "arvada", "lakewood"
    coordinates: z.object({
      lat: z.number()
        .min(-90, 'Latitude must be between -90 and 90')
        .max(90, 'Latitude must be between -90 and 90'),
      lng: z.number()
        .min(-180, 'Longitude must be between -180 and 180')
        .max(180, 'Longitude must be between -180 and 180'),
    }).optional(),
    demographics: z.object({
      population: z.number()
        .positive('Population must be positive')
        .max(10000000, 'Population seems unrealistically high')
        .optional(),
      medianIncome: z.number()
        .positive('Median income must be positive')
        .max(500000, 'Median income seems unrealistically high')
        .optional(),
      description: z.string()
        .max(300, 'Demographic description should be concise')
        .optional(),
    }).optional(),
    localInfo: z.object({
      landmarks: z.array(z.string().min(1).trim())
        .max(10, 'Maximum 10 landmarks')
        .optional(),
      neighborhoods: z.array(z.string().min(1).trim())
        .max(8, 'Maximum 8 neighborhoods')
        .optional(),
      nearbyAttractions: z.array(z.string().min(1).trim())
        .max(10, 'Maximum 10 nearby attractions')
        .optional(),
      transportation: z.object({
        fromDenver: z.string()
          .max(200, 'Transportation description should be concise')
          .optional(),
        fromBoulder: z.string()
          .max(200, 'Transportation description should be concise')
          .optional(),
        publicTransit: z.string()
          .max(200, 'Public transit description should be concise')
          .optional(),
        parking: z.string()
          .max(200, 'Parking description should be concise')
          .optional(),
      }).optional(),
    }).optional(),
    localTestimonials: z.array(z.string().min(1))
      .max(5, 'Maximum 5 local testimonials')
      .optional(), // slugs to testimonials
    businessSchema: z.object({
      name: z.string()
        .min(1, 'Business name is required')
        .trim(),
      address: z.object({
        street: z.string().trim().optional(),
        city: z.string().min(1, 'City is required').trim(),
        state: z.string().length(2, 'State should be 2-letter code').toUpperCase(),
        zipCode: z.string()
          .regex(/^\d{5}(-\d{4})?$/, 'Zip code should be valid format')
          .optional(),
      }),
      phone: z.string()
        .regex(/^[\+]?[\d\s\-\(\)]{10,20}$/, 'Phone number should be valid (10-20 characters including digits, spaces, dashes, parentheses)')
        .optional(),
      email: z.string().email('Email should be valid').optional(),
      website: z.string().url('Website should be valid URL').optional(),
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

// Services collection - for venue services and offerings
const services = defineCollection({
  loader: file('src/content/services.json'),
  schema: z.object({
    id: z.string().optional(), // Auto-generated from array index
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    category: z.enum(['catering', 'bar', 'venue', 'coordination']).optional(),
    pricing: z.object({
      bronze: z.string().optional(),
      silver: z.string().optional(),
      gold: z.string().optional(),
    }).optional(),
  }),
});

// Testimonials collection - converted from JSON for better performance
const testimonialsFile = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: z.object({
    id: z.string().optional(), // Auto-generated from array index
    quote: z.string(),
    author: z.string(),
    event: z.string(),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    verified: z.boolean().default(true),
  }),
});

// Venue stats collection - for venue statistics and features
const venueStats = defineCollection({
  loader: file('src/content/venue-stats.json'),
  schema: z.object({
    id: z.string().optional(), // Auto-generated from array index
    label: z.string(),
    value: z.string(),
    icon: z.string(),
    description: z.string(),
    category: z.enum(['capacity', 'catering', 'style', 'location', 'amenities']).optional(),
  }),
});

export const collections = {
  pages,
  blog,
  'service-areas': serviceAreas,
  testimonials,
  docs,
  services,
  testimonialsFile,
  venueStats,
};