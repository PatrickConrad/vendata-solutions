import { n as jsxRuntimeExports } from "./worker-entry-DltuNVmZ.js";
import { R as Route, L as Link } from "./router-BeQHsHea.js";
import { D as Divider } from "./Divider-DmgLIqT1.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
function BlogIndex() {
  const posts = Route.useLoaderData();
  if (!Array.isArray(posts)) return null;
  const featured = posts.find((p) => p.featured);
  const nonFeatured = posts.filter((p) => p.featured == null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-white dark:bg-slate-900 px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-extrabold text-(--v-navy) dark:text-(--v-gold) mb-4", children: "VenData Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: "h-1 w-20 bg-v-gold mb-5 " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto", children: "Strategy, technology, and automation insights to help your business work smarter." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-12  max-h-[60vh] ", children: [
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/content/$postId", params: {
        postId: featured.slug
      }, className: "group block bg-v-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-4 text-v-gold font-bold uppercase tracking-wide", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold text-white mb-4 group-hover:text-v-gold transition", children: featured.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-200 text-lg mb-6 leading-relaxed", children: featured.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-slate-300 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: featured.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-v-gold", children: "Read Article →" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 max-h-[60vh] overflow-y-scroll", children: nonFeatured.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/content/$postId`, params: {
        postId: post.slug
      }, className: "group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-v-navy transition shadow-sm hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-v-navy dark:text-white group-hover:text-v-gold transition mb-2", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 text-sm mb-3", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: post.date })
      ] }, post.slug)) })
    ] })
  ] }) });
}
export {
  BlogIndex as component
};
