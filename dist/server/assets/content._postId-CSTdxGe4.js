import { n as jsxRuntimeExports } from "./worker-entry-CxbBKW3I.js";
import { R as Route } from "./router-DLSk2VYk.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
function RouteComponent() {
  const data = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !data || !data.title || !data.body ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-3xl mx-auto py-20 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-v-navy mb-4 capitalize", children: data.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-20 bg-v-gold mb-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-700 leading-relaxed first-letter:text-3xl", children: data.body })
  ] }) });
}
export {
  RouteComponent as component
};
