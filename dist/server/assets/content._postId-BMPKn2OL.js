import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

function PostNotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] px-6 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-6xl font-bold text-slate-200 mb-4", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-v-navy mb-2", children: "Post Not Found" }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-600 max-w-md mb-8", children: "We couldn't find the article you're looking for. It may have been moved, deleted, or hasn't been published yet." }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/content",
        className: "px-6 py-3 bg-v-navy text-white rounded-md hover:bg-slate-800 transition-colors",
        children: "Back to Blog"
      }
    )
  ] });
}

const SplitNotFoundComponent = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Post Not Found | VenData Solutions" }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex" }),
    /* @__PURE__ */ jsx(PostNotFound, {})
  ] });
};

export { SplitNotFoundComponent as notFoundComponent };
