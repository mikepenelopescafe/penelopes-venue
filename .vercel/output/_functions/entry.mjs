import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CrWyLoS_.mjs';
import { manifest } from './manifest_CfcNBStV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/gallery.astro.mjs');
const _page7 = () => import('./pages/markdown-page.astro.mjs');
const _page8 = () => import('./pages/pricing.astro.mjs');
const _page9 = () => import('./pages/services/_---slug_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const _page11 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/category/[category].astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/gallery/index.astro", _page6],
    ["src/pages/markdown-page.md", _page7],
    ["src/pages/pricing.astro", _page8],
    ["src/pages/services/[...slug].astro", _page9],
    ["src/pages/index.astro", _page10],
    ["src/pages/[...slug].astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "71fa2c00-555d-4365-aec0-a6e922c7b433",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
