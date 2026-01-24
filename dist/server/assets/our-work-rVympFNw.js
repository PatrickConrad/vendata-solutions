import { n as jsxRuntimeExports } from "./worker-entry-DvH6h4Cb.js";
import { f as faCartFlatbed, a as faUtensils, b as faDumbbell, F as FontAwesomeIcon, L as Link } from "./router-BmICJWCx.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
function CaseStudiesPage() {
  const cases = [
    {
      title: "Massive Scale E-Commerce",
      subtitle: "Custom Edit Language & API Bridging",
      challenge: "A mid-size dropship company was trapped by their 'best-in-class' SaaS inventory tool. While it handled syncing well, internal product development was a bottleneck. Updating a 10-variant product took over 3 minutes. At 10,000 SKUs, the labor waste was exponential.",
      logic: "We exhausted the native optimization first. When that peaked, we leveraged the tool's API to build a custom 'Edit Language.' Instead of manual clicks, staff could issue logic commands—like 'change-image' where 'color=blue'—to handle 10 or 10,000 variants simultaneously.",
      roi: "Update times dropped from 30 minutes for 100 products, down to 10 seconds. Error rates were nearly eliminated, and the company scaled its catalog without adding a single headcount.",
      icon: faCartFlatbed,
      color: "text-v-gold"
    },
    {
      title: "Historic Annapolis Hospitality",
      subtitle: "POS API Integration & Live Inventory",
      challenge: "A local landmark restaurant struggled with inconsistent nightlife crowds. The bar was too busy for one person but not profitable enough for two. Bartenders lost massive time running to the kitchen for order status or the cellar for stock checks.",
      logic: "We plugged directly into the existing POS API and deployed custom kitchen tablets. This created a live data bridge: bartenders could track food status and liquor levels in real-time without leaving the bar top. We also added a one-tap notification system for 'surge' support requests.",
      roi: "Thousands in liquor savings through precise tracking. Customer satisfaction surged as bartenders stayed focused on service, and labor costs were optimized through data-backed staffing.",
      icon: faUtensils,
      color: "text-v-green"
    },
    {
      title: "Regional Fitness Non-Profit",
      subtitle: "Systems Centralization & Custom App Dev",
      challenge: "A large Maryland organization was drowning in disjointed member data across multiple expensive platforms. Manual entry errors were rampant, and a major enterprise upgrade was financially impractical.",
      logic: "Using VenData bridging tools and APIs, we centralized member data into a single 'Source of Truth.' We then built a custom internal App to give the team live control. We specifically targeted the 'Camp Check-in' workflow which was a notorious manual bottleneck.",
      roi: "Camp drop-off and pick-up times were reduced by 74%. Customer service response times plummeted as staff no longer had to hunt for information across three different software suites.",
      icon: faDumbbell,
      color: "text-v-navy"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-900 transition-colors duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 bg-slate-50 dark:bg-slate-950 bg-v-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-black italic tracking-tighter  text-white mb-6 uppercase", children: [
        "Proven ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-gold", children: "Logic." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-slate-200 dark:text-slate-400 font-medium", children: "Learn how we bridge technical gaps to create operational freedom." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 max-w-6xl mx-auto space-y-32", children: cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -inset-4 rounded-[4rem] bg-slate-50 dark:bg-slate-800/30 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 aspect-square md:aspect-video bg-v-navy dark:bg-slate-800 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: c.icon, className: "text-9xl text-white/10 absolute" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center mx-auto mb-6 ${c.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: c.icon, size: "2x" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-3xl font-black uppercase tracking-wider italic", children: c.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green font-black uppercase text-xs tracking-widest", children: c.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black dark:text-white leading-none mt-2", children: "The Intervention" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-slate-200 dark:border-slate-700 pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase text-slate-400 mb-1", children: "The Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed", children: c.challenge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-v-gold pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase text-v-gold mb-1 tracking-widest", children: "The Logic" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed", children: c.logic })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-v-green pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase text-v-green mb-1 tracking-widest", children: "The ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-white font-bold leading-relaxed", children: c.roi })
            ] })
          ] })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-6 bg-v-navy text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black text-white italic mb-8", children: "Ready to be the next success story?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/consultation", className: "btn-gold px-10 py-4 rounded-xl font-black uppercase", children: "Book Initial Consult" }) })
    ] })
  ] });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudiesPage, {});
}
export {
  RouteComponent as component
};
