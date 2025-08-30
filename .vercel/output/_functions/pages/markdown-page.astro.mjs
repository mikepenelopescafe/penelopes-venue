import { b as createAstro, c as createComponent, f as renderHead, g as renderSlot, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://penelopesvenue.com");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { content } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${content.title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/layouts/main.astro", void 0);

const html = () => "<div class=\"grid place-items-center h-screen content-center\">\n <div class=\"py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md\">\n  Tailwind classes also work in Markdown!\n </div>\n <a href=\"/\" class=\"p-4 underline hover:text-purple-500 transition-colors ease-in-out duration-200\">\n  Go home\n </a>\n</div>";

				const frontmatter = {"title":"Markdown + Tailwind","layout":"../layouts/main.astro"};
				const file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/markdown-page.md";
				const url = "/markdown-page";
				function rawContent() {
					return "   \n                            \n                             \n   \n\n<div class=\"grid place-items-center h-screen content-center\">\n <div class=\"py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md\">\n  Tailwind classes also work in Markdown!\n </div>\n <a\n  href=\"/\"\n  class=\"p-4 underline hover:text-purple-500 transition-colors ease-in-out duration-200\"\n >\n  Go home\n </a>\n</div>\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Main, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
