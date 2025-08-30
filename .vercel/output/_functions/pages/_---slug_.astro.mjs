import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CGerKt1C.mjs';
import { $ as $$Layout } from '../chunks/Layout_C-LHEuIl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug || slug.length === 0) {
    return Astro2.redirect("/");
  }
  let entry;
  try {
    const pages = await getCollection("pages");
    const targetSlug = Array.isArray(slug) ? slug.join("/") : slug;
    entry = pages.find((p) => p.slug === targetSlug);
    if (!entry) {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error loading page:", error);
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const seo = {
    title: entry.data.title,
    description: entry.data.description,
    keywords: entry.data.keywords?.join(", "),
    canonical: entry.data.canonical || Astro2.url.href,
    ogImage: entry.data.ogImage,
    noIndex: entry.data.noIndex || false
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords, "canonical": seo.canonical }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen"> ${entry.data.hero && renderTemplate`<section class="relative bg-gradient-to-b from-brand-cream to-white py-20 px-6"> <div class="max-w-6xl mx-auto text-center"> <h1 class="text-5xl md:text-6xl font-serif text-brand-forest mb-6"> ${entry.data.hero.headline} </h1> ${entry.data.hero.subheadline && renderTemplate`<p class="text-xl md:text-2xl text-brand-forest/80 mb-8"> ${entry.data.hero.subheadline} </p>`} <a${addAttribute(entry.data.hero.ctaLink, "href")} class="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"> ${entry.data.hero.ctaText} </a> </div> </section>`} <article class="prose prose-lg max-w-4xl mx-auto px-6 py-16"> ${renderComponent($$result2, "Content", Content, {})} </article> ${entry.data.sections && renderTemplate`<div class="space-y-16 pb-16"> ${entry.data.sections.map((section) => renderTemplate`<section class="max-w-6xl mx-auto px-6"> <h2 class="text-3xl font-serif text-brand-forest mb-6">${section.title}</h2> <div class="prose prose-lg max-w-none"> <p>${section.content}</p> </div> </section>`)} </div>`} </div> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/[...slug].astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
