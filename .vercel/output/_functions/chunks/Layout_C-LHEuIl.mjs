import { b as createAstro, c as createComponent, m as maybeRenderHead, e as renderScript, d as addAttribute, a as renderTemplate, r as renderComponent, g as renderSlot, f as renderHead, F as Fragment } from './astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro$1 = createAstro("https://penelopesvenue.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pricing & Packages", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact#general" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 glass border-b border-primary/20 transition-all duration-300"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20"> <!-- Logo --> <a href="/" class="flex items-center space-x-3 group"> <img src="/logo.svg" alt="Penelope's Venue" class="h-12 w-auto transition-transform duration-300 group-hover:scale-105"> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`text-sm font-medium font-display transition-all duration-300 relative ${currentPath === item.href ? "text-primary" : "text-foreground/90 hover:text-primary"}`, "class")}> ${item.label} ${currentPath === item.href && renderTemplate`<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>`} </a>`)} <a href="/contact#book" class="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium font-display transition-all duration-300 hover-scale">
Book Now
</a> </div> <!-- Mobile menu button --> <button id="mobile-menu-button" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Navigation Panel --> <div id="mobile-menu" class="md:hidden hidden fixed inset-x-0 top-20 glass-mobile"> <div class="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-4 py-3 rounded-md text-base font-medium font-display transition-all duration-300 ${currentPath === item.href ? "bg-primary/20 text-primary" : "text-foreground hover:bg-primary/10 hover:text-primary"}`, "class")}> ${item.label} </a>`)} <a href="/contact#book" class="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-md text-base font-medium font-display transition-all duration-300 mt-4">
Book Now
</a> </div> </div> </nav> </header> ${renderScript($$result, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    venue: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Meet Lisseth", href: "/#owner" }
    ],
    services: [
      { label: "Pricing & Packages", href: "/pricing" },
      { label: "Full Venue Buyout", href: "/pricing#venue" },
      { label: "Catering Service", href: "/pricing#catering" },
      { label: "Bar Service", href: "/pricing#bar" }
    ],
    resources: [
      { label: "Event Planning", href: "/pricing#planning" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/contact#faq" }
    ],
    contact: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book Your Event", href: "/contact#book" },
      { label: "General Inquiry", href: "/contact#general" },
      { label: "Location & Hours", href: "/#location" }
    ]
  };
  const contactInfo = {
    address: "8050 Federal Blvd, Westminster, CO 80031",
    phone: "(720) 639-2406",
    hours: "9AM - 11PM"};
  return renderTemplate`${maybeRenderHead()}<footer class="bg-background/90 backdrop-blur-sm border-t border-primary/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> <!-- Brand & Contact Info --> <div class="lg:col-span-1"> <div class="mb-4 flex items-center space-x-2"> <img src="/logo.svg" alt="Penelope's" class="h-8 w-auto"> </div> <p class="text-sm text-muted-foreground mb-4">
Crafting beautiful experiences in our boutique venue.
</p> <div class="space-y-2 text-sm text-muted-foreground"> <div class="flex items-start space-x-2"> <svg class="h-4 w-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${contactInfo.address}</span> </div> <div class="flex items-center space-x-2"> <svg class="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a${addAttribute(`tel:${contactInfo.phone}`, "href")} class="hover:text-primary transition-colors"> ${contactInfo.phone} </a> </div> <div class="flex items-center space-x-2"> <svg class="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${contactInfo.hours}</span> </div> </div> </div> <!-- Links --> <div class="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8"> <div> <h3 class="text-sm font-semibold text-primary mb-4">Venue</h3> <ul class="space-y-2"> ${footerLinks.venue.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Services</h3> <ul class="space-y-2"> ${footerLinks.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Resources</h3> <ul class="space-y-2"> ${footerLinks.resources.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Contact</h3> <ul class="space-y-2"> ${footerLinks.contact.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> </div> </div> <!-- Bottom bar --> <div class="mt-8 pt-8 border-t border-primary/10"> <div class="text-center"> <p class="text-sm text-muted-foreground">
© ${currentYear} Penelope's Venue. All rights reserved.
</p> <p class="text-xs text-muted-foreground/80 mt-2">
Westminster's Premier Event Destination Since 2004
</p> </div> </div> </div> </footer>`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://penelopesvenue.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Discover Penelope's Venue - Your premier destination for elegant weddings and unforgettable events. Book your dream venue today.",
    keywords = "wedding venue, event venue, outdoor wedding, garden venue",
    canonical,
    ogImage = "/images/og-default.jpg",
    noIndex = false,
    article
  } = Astro2.props;
  const siteUrl = Astro2.site || "https://penelopesvenue.com";
  const canonicalUrl = canonical || new URL(Astro2.url.pathname, siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="keywords"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', ">", '<!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph --><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', `><meta property="og:site_name" content="Penelope's Venue"><meta property="og:image"`, '><meta property="og:locale" content="en_US">', '<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Schema.org structured data --><script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "name": "Penelope's Venue",
        "description": description,
        "url": siteUrl,
        "telephone": "+1-555-0123",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Your City",
          "addressRegion": "State",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "image": new URL(ogImage, siteUrl).href,
        "priceRange": "$$$$",
        "amenityFeature": [
          {"@type": "LocationFeatureSpecification", "name": "Outdoor Garden"},
          {"@type": "LocationFeatureSpecification", "name": "Historic Building"},
          {"@type": "LocationFeatureSpecification", "name": "Event Planning Services"},
          {"@type": "LocationFeatureSpecification", "name": "Catering Available"},
          {"@type": "LocationFeatureSpecification", "name": "Parking"}
        ]
      })}
    <\/script><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon.png"><!-- Preconnect to external domains --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://fonts.googleapis.com"><title>`, "</title>", '</head> <body class="min-h-screen bg-background text-foreground flex flex-col"> ', ' <main class="flex-1"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(Astro2.generator, "content"), noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalUrl, "href"), addAttribute(article ? "article" : "website", "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(new URL(ogImage, siteUrl).href, "content"), article && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${article.publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(article.publishedTime.toISOString(), "content")}>`}${article.modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(article.modifiedTime.toISOString(), "content")}>`}${article.author && renderTemplate`<meta property="article:author"${addAttribute(article.author, "content")}>`}${article.tags?.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}` })}`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, siteUrl).href, "content"), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mike/Documents/Projects/penelopes-venue/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
