import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_CGerKt1C.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C-LHEuIl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const formattedDate = post.data.publishDate?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const readingTime = post.data.readingTime || Math.ceil(post.body.split(" ").length / 200);
  const seo = {
    title: post.data.title,
    description: post.data.description,
    keywords: post.data.keywords?.join(", "),
    canonical: post.data.canonical || Astro2.url.href,
    ogImage: post.data.ogImage || post.data.image?.src,
    article: {
      publishedTime: post.data.publishDate,
      modifiedTime: post.data.updateDate,
      author: post.data.author,
      tags: post.data.tags
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords, "canonical": seo.canonical }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-h-screen"> <header class="bg-gradient-to-b from-brand-cream to-white py-16 px-6"> <div class="max-w-4xl mx-auto"> <div class="flex items-center gap-2 text-sm text-brand-forest/60 mb-4"> <a href="/blog" class="hover:text-brand-forest transition-colors">Blog</a> <span>/</span> <a${addAttribute(`/blog/category/${post.data.category}`, "href")} class="hover:text-brand-forest transition-colors capitalize"> ${post.data.category.replace("-", " ")} </a> </div> <h1 class="text-4xl md:text-5xl font-serif text-brand-forest mb-6"> ${post.data.title} </h1> <div class="flex flex-wrap items-center gap-4 text-sm text-brand-forest/70"> <span>By ${post.data.author}</span> ${formattedDate && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span>•</span> <time${addAttribute(post.data.publishDate?.toISOString(), "datetime")}> ${formattedDate} </time> ` })}`} <span>•</span> <span>${readingTime} min read</span> </div> ${post.data.tags && renderTemplate`<div class="flex flex-wrap gap-2 mt-6"> ${post.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-brand-sage/10 text-brand-forest text-sm rounded-full"> ${tag} </span>`)} </div>`} </div> </header> ${post.data.image && renderTemplate`<div class="max-w-4xl mx-auto px-6 py-8"> <img${addAttribute(post.data.image.src, "src")}${addAttribute(post.data.image.alt, "alt")} class="w-full rounded-lg shadow-lg"> ${post.data.image.caption && renderTemplate`<p class="text-sm text-brand-forest/60 mt-2 text-center italic"> ${post.data.image.caption} </p>`} </div>`} <div class="prose prose-lg prose-brand max-w-4xl mx-auto px-6 py-8"> ${renderComponent($$result2, "Content", Content, {})} </div> <footer class="max-w-4xl mx-auto px-6 py-12 border-t"> <div class="flex justify-between items-center"> <a href="/blog" class="text-brand-forest hover:text-brand-gold transition-colors">
← Back to Blog
</a> <a href="/contact" class="inline-block bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
Book Your Event
</a> </div> </footer> </article> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
