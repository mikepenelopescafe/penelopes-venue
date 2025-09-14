// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://penelopesboutiquevenue.com', // Update with your actual domain

  // Experimental features for enhanced developer experience
  experimental: {
    contentIntellisense: true, // Enables better autocomplete in content files
  },

  // Prefetch configuration for better navigation performance
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {},
    },
  },

  integrations: [
    react(),
    mdx({
      // Optimize MDX processing for better performance
      optimize: true,
    }),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'daily',
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

  output: 'server',

  adapter: vercel({
    webAnalytics: { enabled: false },
    // Enable compression for better performance
    compress: true,
  }),

  // Optimized image service configuration
  image: {
    // Sharp service with performance optimizations
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Remove pixel limits for better quality control
        limitInputPixels: false,
        // Balance quality and file size
        quality: 80,
        // Enable progressive JPEGs
        progressive: true,
      },
    },
    domains: ['penelopesboutiquevenue.com'],
    remotePatterns: [{ protocol: 'https' }],
    // Default responsive image layout for better performance
    layout: 'constrained',
  },

  // Enable HTML compression
  compressHTML: true,

  // Additional performance optimizations
  build: {
    // Inline stylesheets for better performance
    inlineStylesheets: 'always',
  },

  // Optimize output format for better performance
  output: 'server',

  redirects: {
    // '/events': '/services', // Removed - now we have a proper events index page
  },
});