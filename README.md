# Penelope's Venue

A premium wedding and event venue website built with modern web technologies. This elegant, responsive site showcases Penelope's Venue's garden wedding packages, event services, and client testimonials.

## 🌟 Features

- **Premium Wedding Venue** - Garden ceremony spaces and covered reception areas
- **Full-Service Event Planning** - Complete coordination and setup services
- **Flexible Packages** - Customizable options for various budgets and visions
- **Modern Design** - Elegant UI with custom forest green and tan color palette
- **Responsive Layout** - Optimized for all devices and screen sizes
- **SEO Optimized** - Built-in sitemap generation and meta tag management
- **Content Management** - MDX-powered blog and service pages
- **Interactive Components** - React components with smooth animations

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.13+ (Static Site Generator)
- **Frontend**: [React](https://reactjs.org) v19 (Interactive Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4 (Modern CSS Framework)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (Component Library)
- **Icons**: [Lucide React](https://lucide.dev) (Icon Library)
- **Content**: [MDX](https://mdxjs.com) (Markdown with JSX)
- **TypeScript**: Full type safety with strict mode
- **Build Tool**: [Vite](https://vitejs.dev) (Fast development and builds)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd penelopes-venue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (button, card, input, etc.)
│   ├── Hero.astro      # Main hero section with logo and CTA
│   ├── Navigation.astro # Responsive navigation header
│   ├── Footer.astro    # Site footer with links and contact info
│   ├── ContactForm.tsx # Interactive contact form (React)
│   ├── ContactHero.astro # Contact page hero section
│   ├── ContactSection.astro # Contact form sections
│   ├── Gallery.tsx     # Interactive photo gallery with lightbox
│   └── ServiceCard.astro # Service feature cards
├── content/            # MDX content files with type-safe schemas
│   ├── blog/          # Wedding planning blog posts
│   ├── services/      # Service packages and details
│   ├── testimonials/  # Client testimonials and reviews
│   ├── pages/         # Custom landing pages
│   └── config.ts      # Content collection schemas (Zod validation)
├── layouts/           # Page layouts
│   ├── Layout.astro   # Main layout with navigation/footer
│   └── main.astro     # Minimal layout for special pages
├── lib/               # Utility functions and business logic
│   ├── utils.ts       # cn() utility and helper functions
│   └── email-templates.ts # Professional email template generators
├── pages/             # Route pages and API endpoints
│   ├── index.astro    # Homepage with hero and services
│   ├── contact.astro  # Contact page with booking/general forms
│   ├── gallery/       # Photo gallery page
│   │   └── index.astro
│   ├── pricing.astro  # Pricing information page
│   ├── [...slug].astro # Dynamic content pages (blog, services)
│   ├── blog/          # Blog listing and detail pages
│   ├── services/      # Service listing and detail pages
│   └── api/           # Serverless API routes
│       └── contact.ts # Contact form processing endpoint
└── styles/            # Global styles and design system
    └── global.css     # Tailwind config and custom theme
```

## 🎨 Design System

### Color Palette
- **Primary**: Forest Green (#2a4035) - Main brand color
- **Accent**: Warm Tan (#d6b67e) - Secondary accent
- **Neutral**: Soft Black (#17191b) - Text and backgrounds
- **Supporting**: Blue Gray (#284b5e) - Supporting elements

### Typography
- **Display**: Custom fonts for headings
- **Body**: Clean, readable typography
- **Accent**: Script fonts for decorative elements

## 📝 Content Management

### Adding Services
Create new service pages in `src/content/services/`:
```markdown
---
title: "Your Service Name"
description: "Service description for SEO"
packageName: "Package Display Name"
price:
  starting: 5000
  currency: "USD"
---

# Service Content
Your service description and details...
```

### Adding Blog Posts
Create blog posts in `src/content/blog/`:
```markdown
---
title: "Your Blog Post"
description: "Post description"
pubDate: 2024-01-15
category: "planning-tips"
---

# Blog Post Content
Your blog post content here...
```

## 🚀 Deployment

This project is configured for static site generation and can be deployed to:

- **Netlify** - Drag & drop the `dist/` folder
- **Vercel** - Connect your GitHub repo for automatic deployments
- **GitHub Pages** - Configure GitHub Actions for CI/CD
- **Any static hosting** - Upload the built files

### Environment Variables

Update `astro.config.mjs` with your production domain:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Replace with your domain
  // ... other config
});
```

## 🏗️ Astro Design Principles

This project implements modern Astro design patterns for optimal performance and developer experience:

### Image Optimization
- **Astro Image Component**: Automatic optimization, responsive images, and modern formats (WebP, AVIF)
- **Lazy Loading**: Images load as needed to improve initial page load times
- **Proper Sizing**: Width/height attributes prevent layout shift

### View Transitions
- **ClientRouter**: Seamless page transitions using Astro's View Transitions API
- **Persistent Elements**: Hero sections maintain position during navigation
- **Loading States**: Smooth user experience during route changes

### Server-Side Rendering (SSR)
- **Hybrid Rendering**: Static pages pre-rendered, dynamic content server-rendered
- **API Routes**: Serverless functions for form processing and dynamic data
- **SEO Benefits**: Server-rendered content improves search engine indexing

### Pre-rendering Strategy
- **Static Generation**: Marketing pages (home, services) pre-built for speed
- **Dynamic Content**: Blog posts and testimonials generated at build time
- **On-Demand Rendering**: API endpoints render when requested

## 📧 Contact System

### Dual Form Architecture
The contact system supports two specialized form types:

#### Event Booking Form
- **Purpose**: Wedding and event inquiries requiring immediate attention
- **Fields**: Name, Email, Phone, Event Type, Guest Count, Date, Budget, Requirements
- **SLA**: 24-hour response time for booking inquiries
- **Features**: Detailed event specifications and timeline planning

#### General Inquiry Form
- **Purpose**: General questions, vendor partnerships, media inquiries
- **Fields**: Name, Email, Phone, Subject, Message
- **SLA**: 4-hour response time during business hours
- **Features**: Categorized subjects and flexible messaging

### API Integration
- **Serverless Endpoint**: `/api/contact` processes form submissions
- **Email Templates**: Professional HTML templates matching brand design
- **Plunk Integration**: Transactional email service for reliable delivery
- **Auto-confirmation**: Customers receive immediate confirmation emails

### Form Features
- **Client-side Validation**: Real-time form validation with error messages
- **TypeScript Safety**: Full type safety for form data and API responses
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation

## 📝 Content Management (MDX)

### Type-Safe Collections
Content is managed through Astro's Content Collections with Zod validation:

- **Blog Posts**: SEO-optimized articles with categories and metadata
- **Services**: Package details with pricing, capacity, and amenities
- **Testimonials**: Client reviews with ratings and event details
- **Pages**: Custom landing pages with flexible content sections

### Schema Validation
```typescript
// Example service schema
const serviceSchema = z.object({
  title: z.string().max(60),
  description: z.string().min(120).max(160),
  price: z.object({
    starting: z.number(),
    currency: z.string().default('USD')
  }),
  capacity: z.object({
    min: z.number(),
    max: z.number()
  })
});
```

## 🎯 Key Features

### Performance Optimizations
- **Image Optimization**: Automatic format conversion and responsive loading
- **CSS Optimization**: Tailwind CSS v4 with efficient purging
- **JavaScript Minimization**: Tree shaking and code splitting
- **Font Loading**: Optimized web font loading with preconnect headers

### SEO & Accessibility
- **Meta Tags**: Comprehensive SEO meta tags and Open Graph data
- **Structured Data**: Schema.org markup for venue information
- **Sitemap Generation**: Automatic sitemap creation for search engines
- **Accessibility**: WCAG compliant with proper ARIA labels

### Development Experience
- **TypeScript**: Full type safety with strict mode enabled
- **Hot Reload**: Fast development with instant preview
- **Component Library**: Consistent UI with shadcn/ui components
- **Path Aliases**: Clean imports with `@/` prefix

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Penelope's Venue.

## 📞 Contact

For questions about this codebase or the venue services, please contact the development team.