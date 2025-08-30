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
    { label: "Services", href: "/services" },
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
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Virtual Tour", href: "/tour" },
      { label: "Availability", href: "/availability" }
    ],
    services: [
      { label: "Weddings", href: "/services/weddings" },
      { label: "Corporate Events", href: "/services/corporate" },
      { label: "Private Parties", href: "/services/private" },
      { label: "Packages", href: "/services" }
    ],
    resources: [
      { label: "Planning Guide", href: "/blog/category/planning-tips" },
      { label: "FAQs", href: "/faqs" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" }
    ],
    contact: [
      { label: "Contact Us", href: "/contact" },
      { label: "Schedule Tour", href: "/contact#tour" },
      { label: "Get Quote", href: "/contact#quote" },
      { label: "Location", href: "/location" }
    ]
  };
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Pinterest", href: "#", icon: "pinterest" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-background/90 backdrop-blur-sm border-t border-primary/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> <!-- Brand --> <div class="lg:col-span-1"> <div class="mb-4 flex items-center space-x-2"> <img src="/logo.svg" alt="Penelope's" class="h-8 w-auto"> </div> <p class="text-sm text-muted-foreground mb-4">
Creating unforgettable moments in our enchanting garden venue.
</p> <div class="flex space-x-4"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="text-muted-foreground hover:text-primary transition-all duration-300"${addAttribute(social.name, "aria-label")}> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> ${social.icon === "facebook" && renderTemplate`<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>`} ${social.icon === "instagram" && renderTemplate`<path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>`} ${social.icon === "pinterest" && renderTemplate`<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>`} </svg> </a>`)} </div> </div> <!-- Links --> <div class="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8"> <div> <h3 class="text-sm font-semibold text-primary mb-4">Venue</h3> <ul class="space-y-2"> ${footerLinks.venue.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Services</h3> <ul class="space-y-2"> ${footerLinks.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Resources</h3> <ul class="space-y-2"> ${footerLinks.resources.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 class="text-sm font-semibold text-primary mb-4">Contact</h3> <ul class="space-y-2"> ${footerLinks.contact.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"> ${link.label} </a> </li>`)} </ul> </div> </div> </div> <!-- Bottom bar --> <div class="mt-8 pt-8 border-t border-primary/10"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-sm text-muted-foreground">
© ${currentYear} Penelope's Venue. All rights reserved.
</p> <div class="flex space-x-6 mt-4 md:mt-0"> <a href="/privacy" class="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
Privacy Policy
</a> <a href="/terms" class="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
Terms of Service
</a> </div> </div> </div> </div> </footer>`;
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
