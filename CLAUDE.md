# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a premium wedding and event venue website for "Penelope's Venue" built with modern web technologies:

- **Astro v5.13+** - Static site generator with React integration for optimal performance
- **React v19** - Component framework for interactive UI components and animations
- **Tailwind CSS v4** - Modern utility-first CSS framework with custom design system
- **shadcn/ui** - High-quality component library with New York style configuration
- **TypeScript** - Full type safety with strict mode enabled
- **MDX** - Content management with Markdown and JSX support

## Development Commands

```bash
# Start development server
npm run dev

# Build production site
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Tech Stack
- **Framework**: Astro v5.13+ with MDX support for content management
- **UI Framework**: React v19 for interactive components and animations
- **Styling**: Tailwind CSS v4 with custom design system and CSS custom properties
- **Components**: shadcn/ui with New York style and Radix UI primitives
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx + tailwind-merge via `cn()` utility for class management
- **Content**: MDX for blog posts, services, and testimonials
- **Build**: Vite for fast development and optimized production builds

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (button, card, etc.)
│   ├── Hero.astro      # Main hero section with logo and CTA
│   ├── Navigation.astro # Responsive navigation header
│   ├── Footer.astro    # Site footer with links and info
│   ├── ServiceCard.astro # Service feature cards
│   └── ScrollHint.astro # Scroll indicator component
├── content/            # MDX content files
│   ├── blog/          # Wedding planning blog posts
│   ├── services/      # Service packages and details
│   └── testimonials/  # Client testimonials and reviews
├── layouts/           # Page layouts
│   ├── Layout.astro   # Main layout with navigation/footer
│   └── main.astro     # Minimal layout for special pages
├── lib/               # Utility functions
│   └── utils.ts       # cn() utility and helper functions
├── pages/             # Route pages and API endpoints
│   ├── index.astro    # Homepage with hero and services
│   ├── [...slug].astro # Dynamic content pages
│   ├── blog/          # Blog listing and detail pages
│   └── services/      # Service listing and detail pages
└── styles/            # Global styles and design system
    └── global.css     # Tailwind config and custom theme
```

### Key Configuration
- **Path Aliases**: `@/*` maps to `./src/*` for clean imports
- **TypeScript**: Strict mode enabled with React JSX configuration
- **Tailwind v4**: Modern CSS with `@theme` directives and custom properties
- **shadcn/ui**: Configured in `components.json` for component installation
- **Astro Config**: SEO optimization, sitemap generation, and redirects
- **Content Collections**: Type-safe MDX content with frontmatter validation

### Design System
The project features a custom design system optimized for wedding venues:

#### Color Palette (OKLCH)
- **Forest Green** (#2a4035): Primary brand color for elegance
- **Warm Tan** (#d6b67e): Secondary accent for warmth
- **Soft Black** (#17191b): Neutral text and backgrounds
- **Blue Gray** (#284b5e): Supporting elements and links

#### Typography
- **Display Fonts**: Custom fonts for headings and branding
- **Body Text**: Clean, readable typography for content
- **Accent Elements**: Script fonts for decorative touches

#### Component Patterns
- **Astro Components**: Static content, SEO-critical sections
- **React Components**: Interactive elements, animations, forms
- **shadcn/ui Pattern**: Consistent component API and styling
- **Utility Classes**: `cn()` function for conditional styling
- **Responsive Design**: Mobile-first approach with breakpoint utilities

### Content Management
- **Services**: MDX files in `src/content/services/` with pricing and details
- **Blog Posts**: Wedding planning tips and venue updates
- **Testimonials**: Client reviews and success stories
- **SEO Optimization**: Meta tags, structured data, and sitemap generation

## 🏗️ Astro Design Principles Implementation

### Image Optimization
The project leverages Astro's built-in Image component for optimal performance:

```astro
---
// In Hero.astro - Static image with automatic optimization
import { Image } from 'astro:assets';
---
<Image
  src="/logo.svg"
  alt="Penelope's Venue Logo"
  width={400}
  height={400}
  class="h-48 md:h-64 lg:h-80 xl:h-96 w-auto mx-auto"
/>
```

**Key Features:**
- Automatic image optimization and format conversion
- Responsive image generation with multiple breakpoints
- Lazy loading by default
- Proper alt text and accessibility
- Reduced bundle size through modern formats (WebP, AVIF)

### View Transitions API
Seamless page transitions are implemented using Astro's View Transitions:

```astro
---
// In Layout.astro - Global transition setup
import { ClientRouter } from 'astro:transitions';
---
<ClientRouter />
```

**Implementation Details:**
- `transition:name` attributes on key elements for persistent animations
- Smooth page transitions between routes
- Hero section maintains position during navigation
- Enhanced user experience with loading states

### Server-Side Rendering (SSR)
The application uses SSR for optimal performance and SEO:

```javascript
// In astro.config.mjs
export default defineConfig({
  output: 'server', // Enables SSR
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  // ... other config
});
```

**SSR Benefits:**
- Fast initial page loads
- Better SEO with server-rendered content
- Improved Core Web Vitals
- Dynamic content rendering on the server
- API routes for form submissions

### Pre-rendering Strategy
Astro's hybrid rendering approach combines static and dynamic content:

```astro
---
// API routes use SSR (server-side rendering)
export const prerender = false; // In /api/contact.ts

// Static pages use pre-rendering by default
---
```

**Hybrid Approach:**
- Marketing pages (home, services) pre-rendered for speed
- Dynamic content (blog posts, testimonials) generated at build time
- API endpoints rendered on-demand
- Optimal balance of performance and flexibility

## 📧 Contact System Architecture

### Dual Form Types
The contact system supports two distinct form types:

#### Booking Form (`formType: 'booking'`)
**Fields:** Name, Email, Phone, Event Type, Guest Count, Date Preference, Budget Range, Special Requirements
**Purpose:** Event inquiries requiring immediate response (24-hour SLA)
**Features:** Detailed event specifications, budget estimation, timeline planning

#### General Inquiry Form (`formType: 'general'`)
**Fields:** Name, Email, Phone, Subject, Message
**Purpose:** General questions, vendor partnerships, media inquiries
**Features:** Subject categorization, flexible messaging, 4-hour response SLA

### API Endpoint Structure
```typescript
// /api/contact.ts - Serverless API route
export const POST: APIRoute = async ({ request }) => {
  // Form validation and processing
  // Email template generation
  // Plunk API integration
  // Response handling
};
```

### Email Template System
Professional HTML email templates with:
- **Brand-consistent styling** matching the website design system
- **Responsive design** for all email clients
- **Structured data** for better deliverability
- **Action buttons** for direct customer engagement
- **Automated confirmation emails** to customers

**Template Types:**
- `createBookingEmailTemplate()` - Urgent booking inquiries with 24hr SLA
- `createGeneralEmailTemplate()` - General inquiries with 4hr SLA
- `createConfirmationEmailTemplate()` - Customer confirmation emails

### Email Service Integration
```typescript
// Plunk API integration for transactional emails
const plunkResponse = await fetch('https://api.useplunk.com/v1/send', {
  headers: {
    'Authorization': `Bearer ${plunkApiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: contactEmail,
    subject: emailSubject,
    body: htmlContent,
  }),
});
```

## 📝 Content Collections (MDX)

### Schema-Driven Content
Type-safe content management with Zod validation:

```typescript
// src/content/config.ts
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60),
    description: z.string().min(120).max(160),
    category: z.enum(['weddings', 'events', 'planning-tips']),
    // ... additional fields
  }),
});
```

### Collection Types
- **Blog**: SEO-optimized articles with categories and metadata
- **Services**: Package details with pricing, capacity, and amenities
- **Testimonials**: Client reviews with ratings and event details
- **Pages**: Landing pages with customizable sections

### Content Features
- **Frontmatter validation** ensures consistent data structure
- **SEO optimization** with meta descriptions and keywords
- **Image management** with alt text and captions
- **Rich content** with MDX support for JSX components
- **Type safety** throughout the application

## 🎨 Component Architecture

### Astro vs React Components
Strategic component distribution for optimal performance:

**Astro Components (`.astro`):**
- Static content, SEO-critical sections
- Layout components (Navigation, Footer, Hero)
- Server-rendered content
- Faster initial page loads

**React Components (`.tsx`):**
- Interactive elements requiring client-side JavaScript
- Complex state management (Gallery with lightbox)
- Forms with validation (ContactForm)
- Animations and transitions

### Design System Implementation
- **Tailwind CSS v4** with OKLCH color space for better color accuracy
- **shadcn/ui** components with New York style and full TypeScript support
- **Custom color palette** optimized for wedding venues using forest green and warm tan
- **Fluid typography** with clamp() functions for responsive text sizing
- **Custom fonts** with UDC Annata Round for display and Inter for body text
- **Glassmorphism effects** with backdrop-filter for modern UI elements
- **Smooth animations** with cubic-bezier timing functions
- **View transitions** with custom animations for page navigation
- **Accessibility** with proper ARIA labels, focus management, and keyboard navigation

#### Color System (OKLCH)
```css
--color-forest-green: oklch(0.30 0.08 170);     /* #2a4035 - Primary brand */
--color-tan: oklch(0.68 0.08 85);              /* #d6b67e - Secondary accent */
--color-brown: oklch(0.48 0.10 55);            /* #a17c50 - Supporting */
--color-soft-black: oklch(0.20 0.01 30);       /* #17191b - Text/backgrounds */
--color-blue-gray: oklch(0.40 0.06 220);       /* #284b5e - Supporting elements */
```

#### Typography Scale (Fluid)
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2vw, 3rem);
--text-5xl: clamp(3rem, 2rem + 3vw, 4rem);
--text-6xl: clamp(3.75rem, 2.5rem + 4vw, 5rem);
```

#### Animation System
```css
--transition-default: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

#### Font Families
```css
--font-display: 'UDC Annata Round', Georgia, 'Times New Roman', serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-serif: Georgia, 'Times New Roman', serif;
--font-mono: 'SF Mono', Consolas, 'Liberation Mono', monospace;
```

## 🚀 Build and Deployment

### Modern Build Pipeline
```json
// package.json - Optimized development workflow
{
  "scripts": {
    "dev": "astro dev",      // Fast development server
    "build": "astro build",  // Production build with optimizations
    "preview": "astro preview" // Local production preview
  }
}
```

### Vercel Deployment
- **Serverless functions** for API routes
- **Edge network** for global performance
- **Analytics integration** for performance monitoring
- **Automatic deployments** from GitHub integration

### Performance Optimizations
- **Image optimization** with automatic format conversion
- **CSS minimization** and critical path optimization
- **JavaScript bundling** with tree shaking
- **Font loading** optimization with preconnect headers
- **Core Web Vitals** optimization

## 🔧 Development Workflow

### Type Safety
- **TypeScript strict mode** enabled
- **Astro check** for type validation
- **Content collections** with schema validation
- **Component props** with type definitions

### Code Organization
- **Path aliases** (`@/*` maps to `./src/*`)
- **Feature-based structure** with clear separation
- **Utility functions** centralized in `lib/`
- **Component library** organized by functionality

This implementation demonstrates best practices for modern web development with Astro, combining performance, developer experience, and business requirements into a cohesive, maintainable codebase.