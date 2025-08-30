import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_CGerKt1C.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C-LHEuIl.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  let posts;
  try {
    const blogPosts = await getCollection("blog");
    posts = blogPosts.filter((post) => post.data.category === category);
    if (posts.length === 0) {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error loading blog category:", error);
    return Astro2.redirect("/404");
  }
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.data.publishDate?.valueOf() || 0;
    const dateB = b.data.publishDate?.valueOf() || 0;
    return dateB - dateA;
  });
  const categoryNames = {
    "weddings": "Weddings",
    "events": "Events",
    "planning-tips": "Planning Tips",
    "venue-features": "Venue Features",
    "testimonials": "Success Stories",
    "seasonal": "Seasonal"
  };
  const categoryName = categoryNames[category] || category;
  const seo = {
    title: `${categoryName} | Penelope's Venue Blog`,
    description: `Browse our collection of ${categoryName.toLowerCase()} articles, tips, and inspiration for your perfect event at Penelope's Venue.`,
    keywords: `${category}, venue blog, event planning, wedding tips, Penelope's Venue`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen"> <header class="bg-gradient-to-b from-brand-cream to-white py-16 px-6"> <div class="max-w-6xl mx-auto"> <div class="flex items-center gap-2 text-sm text-brand-forest/60 mb-4"> <a href="/" class="hover:text-brand-forest transition-colors">Home</a> <span>/</span> <a href="/blog" class="hover:text-brand-forest transition-colors">Blog</a> <span>/</span> <span class="text-brand-forest">${categoryName}</span> </div> <h1 class="text-4xl md:text-5xl font-serif text-brand-forest mb-4"> ${categoryName} </h1> <p class="text-lg text-brand-forest/70"> ${sortedPosts.length} article${sortedPosts.length !== 1 ? "s" : ""} </p> </div> </header> <section class="max-w-6xl mx-auto px-6 py-12"> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${sortedPosts.map((post) => {
    const formattedDate = post.data.publishDate?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return renderTemplate`<article class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image.src, "src")}${addAttribute(post.data.image.alt, "alt")} class="w-full h-48 object-cover">`} <div class="p-6"> <h2 class="text-xl font-serif text-brand-forest mb-2 line-clamp-2"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="hover:text-brand-gold transition-colors"> ${post.data.title} </a> </h2> <p class="text-brand-forest/70 mb-4 line-clamp-3"> ${post.data.description} </p> <div class="flex justify-between items-center text-sm text-brand-forest/60"> ${formattedDate && renderTemplate`<time${addAttribute(post.data.publishDate?.toISOString(), "datetime")}> ${formattedDate} </time>`} <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-brand-gold hover:text-brand-gold/80 font-medium transition-colors">
Read More →
</a> </div> </div> </article>`;
  })} </div> </section> </main> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/blog/category/[category].astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
