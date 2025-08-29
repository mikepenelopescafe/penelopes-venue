// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://penelopesvenue.com', // Update with your actual domain
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    }),
  ],

  output: 'static',
  
  build: {
    format: 'directory',
    assets: '_assets',
  },

  image: {
    domains: ['penelopesvenue.com'],
    remotePatterns: [{ protocol: 'https' }],
  },

  redirects: {
    '/events': '/services',
    '/gallery': '/portfolio',
  },
});