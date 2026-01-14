import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { D as Divider } from './Divider-ANadgHN3.js';
import { C as Convergence } from './Convergence-SL-bp-2A.js';
import 'react';

function RouteComponent() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200", children: [
    /* @__PURE__ */ jsxs("section", { className: "py-28 bg-gradient-to-br from-[var(--v-navy)] to-slate-900 text-white text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-v-gold/10 rounded-full blur-[140px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-v-gold text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight", children: "About VenData Solutions" }),
        /* @__PURE__ */ jsx(Divider, { className: "w-24 h-1 bg-v-green mx-auto mb-10" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl leading-relaxed text-slate-200 max-w-2xl mx-auto", children: "We create intelligent software that automates, clarifies, and scales your business. Our mission is to make your business work for you — not the other way around." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-15 py-24 bg-slate-50 dark:bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-extrabold text-(--v-navy) dark:text-white mb-6", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6", children: "To empower businesses with smart tools that remove friction, improve efficiency, and provide clear insights into their operations." }),
        /* @__PURE__ */ jsx("h2", { className: "text-(--v-gold)  text-4xl font-extrabold  dark:text-(--v-gold) mb-6", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 dark:text-slate-300 leading-relaxed", children: "To be the most trusted partner for businesses looking to modernize their workflow and unlock data-driven growth." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-end p-10", children: /* @__PURE__ */ jsx(Convergence, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white dark:bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-extrabold text-(--v-navy) dark:text-white mb-12", children: "Our Core Values" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-(--v-navy) dark:bg-(--v-navy) text-white rounded-2xl p-8 shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Innovation" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "We constantly explore smarter ways to solve problems and build systems that scale." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-v-gold text-(--v-navy) rounded-2xl p-8 shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Transparency" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "Clear insights and honest communication are at the core of every project." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-v-green text-white rounded-2xl p-8 shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Impact" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "We deliver results that genuinely improve our clients’ workflow and bottom line." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-slate-50 dark:bg-slate-800 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-extrabold mb-6", children: "Ready to make your business work for you?" }),
      /* @__PURE__ */ jsx(Divider, { className: "w-24 h-1 bg-v-green mt-5 mb-15" }),
      /* @__PURE__ */ jsx(Link, { to: "/consultation", className: "btn-gold px-10 py-4 rounded-xl font-bold text-lg mt-4", children: "Consult Our Engineers" })
    ] })
  ] }) });
}

export { RouteComponent as component };
