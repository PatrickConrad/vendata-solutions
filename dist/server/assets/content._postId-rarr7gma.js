import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { R as Route } from './router-CbJ83bIf.js';
import '@tanstack/react-router';
import 'react';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import '../server.js';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'h3-v2';
import 'tiny-invariant';
import 'seroval';
import '@tanstack/react-router/ssr/server';

function RouteComponent() {
  const data = Route.useLoaderData();
  return /* @__PURE__ */ jsx(Fragment, { children: !data || !data.title || !data.body ? /* @__PURE__ */ jsx("p", { children: "Loading..." }) : /* @__PURE__ */ jsxs("article", { className: "max-w-3xl mx-auto py-20 px-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-v-navy mb-4 capitalize", children: data.title }),
    /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-v-gold mb-8" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 leading-relaxed first-letter:text-3xl", children: data.body })
  ] }) });
}

export { RouteComponent as component };
