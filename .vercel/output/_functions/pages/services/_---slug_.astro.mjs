import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_CGerKt1C.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C-LHEuIl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  let service;
  try {
    const services = await getCollection("services");
    const targetSlug = Array.isArray(slug) ? slug.join("/") : slug;
    service = services.find((s) => s.slug === targetSlug);
    if (!service) {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error loading service:", error);
    return Astro2.redirect("/404");
  }
  const { Content } = await service.render();
  const formatPrice = (price) => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: price.currency
    }).format(price.starting);
    const unitText = {
      "per-event": "per event",
      "per-hour": "per hour",
      "per-guest": "per guest"
    }[price.unit];
    return `Starting at ${formatted} ${unitText}`;
  };
  const seo = {
    title: service.data.title,
    description: service.data.description,
    keywords: service.data.keywords?.join(", "),
    canonical: service.data.canonical || Astro2.url.href,
    ogImage: service.data.ogImage
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords, "canonical": seo.canonical }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-h-screen"> <header class="bg-gradient-to-b from-brand-cream to-white py-16 px-6"> <div class="max-w-6xl mx-auto"> <div class="flex items-center gap-2 text-sm text-brand-forest/60 mb-4"> <a href="/" class="hover:text-brand-forest transition-colors">Home</a> <span>/</span> <a href="/services" class="hover:text-brand-forest transition-colors">Services</a> <span>/</span> <span class="text-brand-forest">${service.data.packageName}</span> </div> <h1 class="text-4xl md:text-5xl font-serif text-brand-forest mb-6"> ${service.data.packageName} </h1> <div class="flex flex-wrap gap-6 items-center"> <div class="text-2xl font-medium text-brand-gold"> ${formatPrice(service.data.price)} </div> <div class="text-lg text-brand-forest/70"> ${service.data.capacity.min}-${service.data.capacity.max} guests
</div> <span class="px-4 py-2 bg-brand-sage/10 text-brand-forest rounded-full capitalize"> ${service.data.availability.replace("-", " ")} </span> </div> </div> </header> <div class="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"> <div class="prose prose-lg prose-brand max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> ${service.data.gallery && service.data.gallery.length > 0 && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-serif text-brand-forest mb-6">Gallery</h2> <div class="grid grid-cols-2 gap-4"> ${service.data.gallery.map((image) => renderTemplate`<div class="relative"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full rounded-lg shadow-md"> ${image.caption && renderTemplate`<p class="text-sm text-brand-forest/60 mt-2 text-center"> ${image.caption} </p>`} </div>`)} </div> </div>`} </div> <aside class="lg:sticky lg:top-8 h-fit"> <div class="bg-white rounded-lg shadow-lg p-6 space-y-6"> <h3 class="text-xl font-serif text-brand-forest">Package Includes</h3> <ul class="space-y-3"> ${service.data.amenities.map((amenity) => renderTemplate`<li class="flex items-start gap-2"> <svg class="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path> </svg> <span class="text-brand-forest/80">${amenity}</span> </li>`)} </ul> <div class="border-t pt-6"> <div class="space-y-4"> <div> <p class="text-sm text-brand-forest/60 mb-1">Capacity</p> <p class="font-medium text-brand-forest"> ${service.data.capacity.min} - ${service.data.capacity.max} guests
</p> </div> <div> <p class="text-sm text-brand-forest/60 mb-1">Availability</p> <p class="font-medium text-brand-forest capitalize"> ${service.data.availability.replace("-", " ")} </p> </div> <div> <p class="text-sm text-brand-forest/60 mb-1">Starting Price</p> <p class="text-xl font-medium text-brand-gold"> ${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: service.data.price.currency
  }).format(service.data.price.starting)} </p> </div> </div> </div> <div class="space-y-3"> ${service.data.bookingLink ? renderTemplate`<a${addAttribute(service.data.bookingLink, "href")} class="block w-full bg-brand-gold hover:bg-brand-gold/90 text-white text-center px-6 py-3 rounded-md font-medium transition-colors">
Book This Package
</a>` : renderTemplate`<a href="/contact" class="block w-full bg-brand-gold hover:bg-brand-gold/90 text-white text-center px-6 py-3 rounded-md font-medium transition-colors">
Request Information
</a>`} <a href="/contact" class="block w-full border border-brand-forest/20 hover:border-brand-forest/40 text-brand-forest text-center px-6 py-3 rounded-md font-medium transition-colors">
Schedule a Tour
</a> </div> </div> </aside> </div> </article> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/services/[...slug].astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/services/[...slug].astro";
const $$url = "/services/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
