import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, e as renderScript, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BU3SEtpR.mjs';
import { B as Badge } from '../chunks/badge_CutUV_Ed.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6 bg-background" data-astro-cid-ihllb3az> <div class="max-w-7xl mx-auto" data-astro-cid-ihllb3az> <!-- Section Header --> <div class="text-center mb-16" data-astro-cid-ihllb3az> ${renderComponent($$result, "Badge", Badge, { "className": "mb-4 bg-primary/10 text-primary border-primary/20", "data-astro-cid-ihllb3az": true }, { "default": ($$result2) => renderTemplate`Photo Gallery` })} <h2 class="text-4xl font-display text-foreground mb-4" data-astro-cid-ihllb3az>
Explore Our Beautiful Venue
</h2> <p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-astro-cid-ihllb3az>
From our charming Spanish-inspired exterior to our elegantly appointed reception spaces,
        discover what makes Penelope's Venue the perfect setting for your special celebration.
</p> </div> <!-- Filter Buttons --> <div class="flex flex-wrap justify-center gap-4 mb-12" id="gallery-filters" data-astro-cid-ihllb3az> <button class="filter-btn active btn-primary px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300" data-filter="all" data-astro-cid-ihllb3az>
All Photos
</button> <button class="filter-btn btn-outline px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300" data-filter="Exterior" data-astro-cid-ihllb3az>
Exterior
</button> <button class="filter-btn btn-outline px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300" data-filter="Reception Area" data-astro-cid-ihllb3az>
Reception Area
</button> </div> <!-- Gallery Grid --> <div class="gallery-grid" id="gallery-grid" data-astro-cid-ihllb3az> ${images.map((image, index) => renderTemplate`<div${addAttribute(`gallery-item group relative overflow-hidden rounded-xl bg-card hover-lift transition-all duration-500 cursor-pointer ${image.category === "Exterior" ? "exterior" : "reception-area"}`, "class")}${addAttribute(image.category, "data-category")}${addAttribute(index, "data-index")} data-astro-cid-ihllb3az> <!-- Optimized Image with Astro --> <div class="aspect-[4/3] overflow-hidden" data-astro-cid-ihllb3az> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}${addAttribute(index < 6 ? "eager" : "lazy", "loading")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-ihllb3az> </div> <!-- Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-ihllb3az> <div class="absolute bottom-0 left-0 right-0 p-6 text-white" data-astro-cid-ihllb3az> <div class="flex items-center justify-between mb-2" data-astro-cid-ihllb3az> <h3 class="text-lg font-semibold" data-astro-cid-ihllb3az>${image.title}</h3> ${renderComponent($$result, "Badge", Badge, { "className": "bg-primary/20 text-primary border-primary/30 text-xs", "data-astro-cid-ihllb3az": true }, { "default": ($$result2) => renderTemplate`${image.category}` })} </div> <p class="text-sm text-white/90 leading-relaxed" data-astro-cid-ihllb3az> ${image.description} </p> </div> </div> <!-- Click Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" data-astro-cid-ihllb3az></div> </div>`)} </div> <!-- Call to Action --> <div class="text-center mt-16" data-astro-cid-ihllb3az> <div class="bg-card/50 rounded-2xl p-8 border border-primary/10 max-w-2xl mx-auto" data-astro-cid-ihllb3az> <h3 class="text-2xl font-display text-foreground mb-4" data-astro-cid-ihllb3az>
Ready to Create Your Perfect Event?
</h3> <p class="text-muted-foreground mb-6" data-astro-cid-ihllb3az>
Experience the magic of Penelope's Venue firsthand. Contact us today to discuss your special occasion.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ihllb3az> <a href="/contact" class="btn-primary" data-astro-cid-ihllb3az>
Plan Your Event
</a> <a href="/services" class="btn-outline" data-astro-cid-ihllb3az>
View Services
</a> </div> </div> </div> </div> </section> <!-- Lightbox Modal --> <div id="lightbox-modal" class="fixed inset-0 z-50 hidden bg-black/95 backdrop-blur-sm" data-astro-cid-ihllb3az> <div class="relative w-full h-full flex items-center justify-center p-4" data-astro-cid-ihllb3az> <!-- Close Button --> <button id="lightbox-close" class="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110" aria-label="Close gallery" data-astro-cid-ihllb3az> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ihllb3az> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ihllb3az></path> </svg> </button> <!-- Navigation Buttons --> <button id="lightbox-prev" class="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110" aria-label="Previous image" data-astro-cid-ihllb3az> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ihllb3az> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ihllb3az></path> </svg> </button> <button id="lightbox-next" class="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110" aria-label="Next image" data-astro-cid-ihllb3az> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ihllb3az> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ihllb3az></path> </svg> </button> <!-- Main Image Container --> <div class="relative max-w-5xl max-h-full" data-astro-cid-ihllb3az> <img id="lightbox-image" src="" alt="" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" data-astro-cid-ihllb3az> <!-- Image Info --> <div id="lightbox-info" class="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm rounded-b-lg p-6 text-white" data-astro-cid-ihllb3az> <div class="flex items-center justify-between mb-2" data-astro-cid-ihllb3az> <h3 id="lightbox-title" class="text-xl font-semibold" data-astro-cid-ihllb3az></h3> ${renderComponent($$result, "Badge", Badge, { "id": "lightbox-category", "className": "bg-primary/20 text-primary border-primary/30", "data-astro-cid-ihllb3az": true })} </div> <p id="lightbox-description" class="text-white/90" data-astro-cid-ihllb3az></p> </div> </div> </div> </div>  ${renderScript($$result, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Gallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "Gallery - Penelope's Cafe & Venue | Event Space Photos",
    description: "Explore our beautiful Spanish-inspired venue through stunning photography. View exterior shots, reception areas, and event spaces perfect for weddings and celebrations in Westminster, CO.",
    keywords: "Penelope's Venue gallery, event venue photos, wedding venue pictures, Westminster venue images, boutique venue photography, Spanish-inspired event space"
  };
  const galleryImages = [
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 001 - 01 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Charming facade with Spanish architectural details",
      category: "Exterior",
      title: "Venue Exterior",
      description: "Beautiful Spanish-inspired architecture welcoming guests"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 002 - 05 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Elegant entrance area",
      category: "Exterior",
      title: "Main Entrance",
      description: "Inviting entrance with warm lighting and architectural charm"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 003 - 06 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Side entrance and landscaping",
      category: "Exterior",
      title: "Side Entrance",
      description: "Additional entrance with beautifully maintained landscaping"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 004 - 08 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Corner view of the building",
      category: "Exterior",
      title: "Building Corner",
      description: "Architectural details showcasing the venue's character"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 005 - 14 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Front facade with landscaping",
      category: "Exterior",
      title: "Front Facade",
      description: "Impressive front view with curated landscaping"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 006 - 16 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Side view with architectural features",
      category: "Exterior",
      title: "Side Elevation",
      description: "Detailed architectural features and landscaping"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 007 - 17 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Extended side view",
      category: "Exterior",
      title: "Extended Side View",
      description: "Complete side elevation showcasing the venue's scale"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 008 - 18 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Rear exterior view",
      category: "Exterior",
      title: "Rear Exterior",
      description: "Additional exterior space and architectural details"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 009 - 21 Exterior.jpg",
      alt: "Penelope's Venue Exterior - Comprehensive building view",
      category: "Exterior",
      title: "Full Building View",
      description: "Complete exterior view of Penelope's Venue"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 010 - 30 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Elegant seating and decor",
      category: "Reception Area",
      title: "Main Reception Space",
      description: "Beautifully appointed reception area perfect for gatherings"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 011 - 31 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Intimate seating arrangement",
      category: "Reception Area",
      title: "Intimate Seating Area",
      description: "Cozy seating perfect for smaller celebrations"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 012 - 36 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Versatile event space",
      category: "Reception Area",
      title: "Versatile Event Space",
      description: "Flexible space adaptable for various event types"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 013 - 37 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Elegant dining setup",
      category: "Reception Area",
      title: "Dining Configuration",
      description: "Beautifully arranged dining space for memorable meals"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 014 - 39 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Reception area details",
      category: "Reception Area",
      title: "Reception Details",
      description: "Careful attention to decorative details and ambiance"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 015 - 43 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Warm and inviting space",
      category: "Reception Area",
      title: "Inviting Atmosphere",
      description: "Warm lighting and comfortable furnishings"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 016 - 46 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Spacious layout",
      category: "Reception Area",
      title: "Spacious Reception Area",
      description: "Generous space perfect for 50-100 guests"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 017 - 47 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Elegant furnishings",
      category: "Reception Area",
      title: "Elegant Furnishings",
      description: "Carefully selected furniture and decor elements"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 018 - 50 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Reception area ambiance",
      category: "Reception Area",
      title: "Reception Ambiance",
      description: "Perfect atmosphere for special celebrations"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 019 - 52 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Detailed interior view",
      category: "Reception Area",
      title: "Interior Details",
      description: "Architectural and decorative details throughout"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 020 - 54 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Complete space overview",
      category: "Reception Area",
      title: "Complete Space Overview",
      description: "Comprehensive view of the reception area"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 021 - 56 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Additional seating area",
      category: "Reception Area",
      title: "Additional Seating",
      description: "Extra seating options for larger gatherings"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 022 - 58 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Versatile configuration",
      category: "Reception Area",
      title: "Flexible Configuration",
      description: "Space that adapts to different event needs"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 023 - 60 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Elegant presentation",
      category: "Reception Area",
      title: "Elegant Presentation",
      description: "Beautifully presented space for memorable events"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 024 - 61 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Warm atmosphere",
      category: "Reception Area",
      title: "Warm Atmosphere",
      description: "Inviting and comfortable environment"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 025 - 62 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Detailed furnishings",
      category: "Reception Area",
      title: "Furnishing Details",
      description: "Quality furnishings and attention to detail"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 026 - 63 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Complete interior",
      category: "Reception Area",
      title: "Complete Interior",
      description: "Full view of the beautifully appointed space"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 027 - 65 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Reception area overview",
      category: "Reception Area",
      title: "Reception Overview",
      description: "Comprehensive view of the event space"
    },
    {
      src: "/gallery/8050 N Federal Blvd - Web Quality - 028 - 66 Reception Area.jpg",
      alt: "Penelope's Venue Reception Area - Final interior view",
      category: "Reception Area",
      title: "Interior Showcase",
      description: "Final showcase of the reception area's elegance"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20"> <!-- Background with gradient --> <div class="absolute inset-0 bg-gradient-dark"></div> <div class="absolute inset-0 bg-pattern-dots opacity-10"></div> <!-- Content --> <div class="relative z-10 text-center max-w-4xl mx-auto px-6"> <h1 class="text-5xl md:text-6xl font-display text-white mb-6 leading-tight">
Our Gallery
</h1> <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
Discover the warmth and elegance of Penelope's Venue through our curated collection of stunning photography
</p> </div> </section>  ${renderComponent($$result2, "Gallery", $$Gallery, { "images": galleryImages, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Gallery.astro", "client:component-export": "default" })} ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/gallery/index.astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
