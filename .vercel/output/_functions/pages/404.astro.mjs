import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BU3SEtpR.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "Page Not Found - Penelope's Venue",
    description: "The page you're looking for doesn't exist. Let us help you find what you need at Penelope's Venue.",
    noIndex: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "noIndex": seo.noIndex }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center px-6"> <div class="max-w-2xl mx-auto text-center"> <h1 class="text-6xl md:text-7xl font-serif text-brand-forest mb-4">404</h1> <h2 class="text-2xl md:text-3xl font-serif text-brand-forest mb-6">
Page Not Found
</h2> <p class="text-lg text-brand-forest/70 mb-8">
We couldn't find the page you're looking for. Perhaps you'd like to explore our venue options or get in touch?
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
Return Home
</a> <a href="/services" class="inline-block border border-brand-forest/20 hover:border-brand-forest/40 text-brand-forest px-6 py-3 rounded-md font-medium transition-colors">
View Services
</a> <a href="/contact" class="inline-block border border-brand-forest/20 hover:border-brand-forest/40 text-brand-forest px-6 py-3 rounded-md font-medium transition-colors">
Contact Us
</a> </div> <div class="mt-12 pt-8 border-t border-brand-forest/10"> <h3 class="text-lg font-serif text-brand-forest mb-4">Popular Pages</h3> <ul class="space-y-2"> <li> <a href="/services/garden-wedding" class="text-brand-gold hover:text-brand-gold/80 transition-colors">
Garden Wedding Packages
</a> </li> <li> <a href="/blog" class="text-brand-gold hover:text-brand-gold/80 transition-colors">
Wedding Planning Blog
</a> </li> <li> <a href="/gallery" class="text-brand-gold hover:text-brand-gold/80 transition-colors">
Photo Gallery
</a> </li> <li> <a href="/testimonials" class="text-brand-gold hover:text-brand-gold/80 transition-colors">
Client Testimonials
</a> </li> </ul> </div> </div> </main> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/404.astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
