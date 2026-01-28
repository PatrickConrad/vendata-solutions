import { n as jsxRuntimeExports } from "./worker-entry-DIyaribX.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const CardFront = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "front", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    src: "./vendata-venn-logo-full-text.svg",
    className: "logoImg",
    alt: "Vendata Logo"
  }
) });
const CardBack = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "back", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "topCta", children: "Stop working for your business." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bottomCta", children: "Start making IT work for you." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "name", children: "Patrick Conrad" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "innerInfo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "title", children: "Founder | Principal Consultant" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "innerInfo", children: "Patrick@vendata.solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "(410) 212-9196" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vendata.solutions",
        className: "qr",
        alt: "QR Code"
      }
    )
  ] })
] });
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "businessCard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFront, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardBack, {})
  ] });
}
export {
  RouteComponent as component
};
