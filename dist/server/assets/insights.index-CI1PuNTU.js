import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-Cwesk94q.js";
import { D as Divider } from "./Divider-DxvX7jQa.js";
import { L as Link, R as Route } from "./router-BhUzs2VS.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const LatestPost = ({ post }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/insights/$postId",
      params: { postId: post.slug },
      className: "group block bg-v-navy rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition  hover:border hover:border-(--v-gold)",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-4 text-v-gold font-bold uppercase tracking-wide", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-v-gold transition", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-200 text-md md:text-lg mb-6 leading-relaxed", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-slate-300 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-v-gold", children: "Read Article →" })
        ] })
      ] })
    }
  ) });
};
const Post = ({ post }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: `/insights/$postId`,
      params: { postId: post.slug },
      className: "group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:px-15 lg:px-20 transition shadow-sm hover:shadow-lg dark:hover:border dark:hover:border-(--v-gold)",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-v-navy dark:text-white group-hover:text-v-gold transition mb-2", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 text-sm mb-3", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: post.date })
      ]
    },
    post.slug
  );
};
function BlogIndex() {
  const posts = Route.useLoaderData();
  if (!Array.isArray(posts)) return null;
  const sortedPosts = reactExports.useMemo(() => posts.sort((post1, post2) => {
    return new Date(post2.date).getTime() - new Date(post1.date).getTime();
  }), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full bg-white dark:bg-slate-900 px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:max-w-[50%] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-extrabold text-(--v-navy) dark:text-(--v-gold) mb-4", children: "Vendata Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: "h-1 w-20 bg-v-gold mb-5 " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto", children: "Strategy, technology, and automation insights to help your business work smarter." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col gap-12", children: sortedPosts.map((post, ind) => {
      if (ind === 0) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LatestPost, { post }, post.slug);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Post, { post }, post.slug);
    }) })
  ] }) });
}
export {
  BlogIndex as component
};
