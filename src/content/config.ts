import { defineCollection, z } from 'astro:content';

// SEO schema reusable across collections
const seoSchema = z.object({
  title: z.string().max(60, 'Title should be under 60 characters for SEO'),
  description: z.string().min(120).max(160, 'Description should be 120-160 characters'),
  keywords: z.array(z.string()).min(3, 'Include at least 3 keywords'),
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
    template: z.enum(['landing', 'service', 'about', 'contact']).default('landing'),
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

// Services collection - for venue packages
const services = defineCollection({
  type: 'content',
  schema: z.object({
    ...seoSchema.shape,
    packageName: z.string(),
    price: z.object({
      starting: z.number(),
      currency: z.string().default('USD'),
      unit: z.enum(['per-event', 'per-hour', 'per-guest']).default('per-event'),
    }),
    capacity: z.object({
      min: z.number(),
      max: z.number(),
    }),
    amenities: z.array(z.string()),
    availability: z.enum(['year-round', 'seasonal', 'weekends-only', 'custom']),
    bookingLink: z.string().url().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
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

export const collections = {
  pages,
  blog,
  services,
  testimonials,
};