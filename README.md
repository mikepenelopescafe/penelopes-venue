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
│   ├── ui/             # shadcn/ui components
│   ├── Hero.astro      # Main hero section
│   ├── Navigation.astro # Site navigation
│   └── Footer.astro    # Site footer
├── content/            # MDX content files
│   ├── blog/          # Blog posts
│   ├── services/      # Service pages
│   └── testimonials/  # Client testimonials
├── layouts/           # Page layouts
├── lib/               # Utility functions
├── pages/             # Route pages
└── styles/            # Global styles and Tailwind config
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