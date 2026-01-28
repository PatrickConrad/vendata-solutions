import { n as jsxRuntimeExports, a as reactExports } from "./worker-entry-B2H1LgJC.js";
import { u as useNavigate, F as FontAwesomeIcon, f as faXmark, S as StripeBanner, g as getIntegrations, L as Link } from "./router-BT8DgrWn.js";
import { M as MatrixBackground } from "./matrixBackground-X4ti6tby.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const ToolsHero = ({ setPhase, phase, children }) => {
  const navigate = useNavigate();
  const handleNav = () => {
    setPhase("flicker");
    setTimeout(() => {
      setPhase("exit");
      setTimeout(() => {
        navigate({ to: "/showcase" });
      }, 400);
    }, 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MatrixBackground, { phase, height: "75vh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green font-mono tracking-[0.4em] uppercase text-xs mb-4 block", children: phase === "stable" ? "> System_Stable" : "> GRID_TRANSFER_ACTIVE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 italic", children: [
      "Free Your ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green drop-shadow-[0_0_2px_rgba(74,119,60,0.8)] dark:drop-shadow-[0_0_20px_rgba(74,119,60,0.8)]", children: "Business" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light", children: "Pre-built integrations and automation frameworks to connect your siloed APIs into one high-performance engine." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleNav,
        className: "cursor-pointer relative px-12 py-5 bg-transparent border-2 border-v-green text-v-green font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:bg-v-green hover:text-[#020617] hover:shadow-[0_0_50px_rgba(74,119,60,0.6)] active:scale-95",
        children: "View Showcase"
      }
    )
  ] }) });
};
const tools = [
  {
    name: "E-commerce API Automation",
    description: "Integrate and automate Shopify, eBay, Amazon, Shipstation, and WooCommerce APIs for faster updates, inventory management, and operational control.",
    tech: ["Python", "Node.js", "GraphQL", "Redis", "Postgres", "TypeScript"]
  },
  {
    name: "Document & Media Extraction",
    description: "Automate CSV, PDF, and image extraction to quickly process data, generate reports, and streamline content workflows.",
    tech: ["Python", "Node.js", "TypeScript"]
  },
  {
    name: "Enterprise File & Data Transfer",
    description: "Connect FTP, EDI, and PromoStandards systems to automate file transfers, sync business data, and reduce manual overhead.",
    tech: ["Python", "Node.js", "TypeScript"]
  },
  {
    name: "Cloud Collaboration Connectors",
    description: "Seamlessly integrate Google Drive and Monday.com to centralize project management, file access, and workflow automation.",
    tech: ["Python", "Node.js", "TypeScript"]
  },
  {
    name: "Browser Control & Company Dashboards",
    description: "Custom Chrome/Edge extensions that provide full browser control and serve as company dashboards with data insights, powered by Postgres, Python, Node.js, and React.",
    tech: ["Node.js", "React", "Python", "Postgres"]
  },
  {
    name: "Industry Grade Data Scraping",
    description: "The edge you need to stay ahead of the competition. Our enterprise level data extraction techniques and tools breakdown barriers, provide insights, and give back full control of your time.",
    tech: ["Python", "Playwright", "TypeScript", "Node.js"]
  },
  {
    name: "Smart AI Workflow Integration",
    description: "Use AI to speed up non-critical workflows, suggest optimizations, and reduce repetitive decision-making so your team can focus on strategic work.",
    tech: ["Python", "Node.js", "AI/ML", "React", "TypeScript"]
  }
];
const ToolPanel = ({ selectedTool }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full lg:w-3/5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden flex-col justify-center min-h-[500px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5 text-8xl font-black uppercase italic pointer-events-none text-v-green", children: "DATA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-1 rounded-full bg-v-green/10 text-v-green text-xs font-bold uppercase tracking-widest mb-6", children: "Ready for Deployment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-black text-v-navy dark:text-white mb-6 leading-tight uppercase", children: selectedTool.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl", children: selectedTool.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-v-gold font-bold uppercase tracking-widest text-xs mb-4", children: "Tech Stack Integration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedTool.tech.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "bg-v-navy dark:bg-v-green/10 text-v-gold dark:text-v-green px-4 py-1.5 rounded-lg text-xs font-bold border border-v-navy dark:border-v-green/20 shadow-sm",
            children: tech
          },
          tech
        )) })
      ] })
    ] })
  ] });
};
const DesktopToolMap = () => {
  const [selectedTool, setSelectedTool] = reactExports.useState(tools[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden min-[1024px]:flex flex-col lg:flex-row gap-8 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-full lg:w-2/5 space-y-3", children: tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-col md:flex-row gap-2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedTool(tool),
            className: `w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${selectedTool.name === tool.name ? "bg-v-navy border-v-green shadow-[0_0_20px_rgba(74,119,60,0.2)]" : "bg-slate-50 dark:bg-slate-900/50 border-transparent hover:border-slate-200 dark:hover:border-slate-800"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-bold text-lg leading-tight transition-colors ${selectedTool.name === tool.name ? "text-white" : "text-v-navy dark:text-slate-400"}`, children: tool.name })
          }
        )
      },
      tool.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolPanel, { selectedTool })
  ] });
};
const MobileToolMap = () => {
  const [selectedTool, setSelectedTool] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-[1024px]:hidden flex-col w-full lg:w-2/5 space-y-3", children: tools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col min-[1024px]:flex-row gap-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedTool((prev) => prev && prev.name === tool.name ? null : tool),
            className: `text-left p-6 rounded-2xl transition-all duration-300 border-2 cursor-pointer ${selectedTool && selectedTool.name === tool.name ? "bg-v-navy border-v-green shadow-[0_0_20px_rgba(74,119,60,0.2)]" : "bg-slate-50 dark:bg-slate-900/50 border-transparent hover:border-slate-200 dark:hover:border-slate-800"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-bold text-lg leading-tight transition-colors ${selectedTool && selectedTool.name === tool.name ? "text-white" : "text-v-navy dark:text-slate-400"}`, children: tool.name })
          }
        ),
        selectedTool && selectedTool.name === tool.name && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ` w-full z-[60] bg-slate-900 border-t-2 border-v-green p-6 transition-transform duration-300 transform ${selectedTool.name ? "translate-y-0" : "translate-y-full"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedTool(null), className: "absolute top-2 right-4 text-v-green font-mono", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faXmark, size: "sm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToolPanel, { selectedTool })
        ] })
      ]
    },
    tool.name
  )) });
};
function ToolsPage() {
  const [phase, setPhase] = reactExports.useState("stable");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-plus-jakarta", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsHero, { phase, setPhase }),
    "        ",
    phase !== "exit" && /* @__PURE__ */ jsxRuntimeExports.jsx(StripeBanner, { title: "Successful Integrations:", items: getIntegrations(), speed: 200 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tool-list", className: "relative py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-v-gold uppercase tracking-widest font-bold text-sm mb-2", children: "The Frameworks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl md:text-5xl font-black text-v-navy dark:text-white uppercase", children: [
          "Field-Tested ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green", children: "Logic" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopToolMap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MobileToolMap, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-32 px-6 text-center bg-v-navy text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-v-green/10 rounded-full blur-[100px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase leading-none", children: [
          "End the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green", children: "Vendetta" }),
          " Against Your Operations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services/diagnostics",
            className: "btn-gold px-12 py-6 rounded-2xl font-black text-2xl tracking-tighter uppercase inline-block shadow-xl hover:scale-105 transition-transform",
            children: "Work with Vendata"
          }
        )
      ] })
    ] })
  ] });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsPage, {});
}
export {
  RouteComponent as component
};
