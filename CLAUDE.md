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