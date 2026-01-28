import { n as jsxRuntimeExports } from "./worker-entry-DIyaribX.js";
const StripeBanner = ({ title, items, speed }) => {
  const setSpeed = speed ?? items.length * 6;
  const tripleItems = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-slate-300 dark:bg-[#020617] border-y border-(--v-green) py-2 ticker-container", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-9 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-navy font-mono text-md uppercase tracking-[0.5em] font-bold", children: title }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden relative flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-track", style: { "--speed": `${setSpeed}s` }, children: tripleItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-13 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-lg md:text-lg font-black text-v-navy uppercase tracking-tighter transition-all duration-500 group-hover:text-v-green group-hover:scale-105 cursor-default", children: item }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-24 w-1.5 h-1.5 rotate-45  bg-v-navy transition-colors" })
    ] }, idx)) }) })
  ] });
};
export {
  StripeBanner as S
};
