import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-Cwlb-ZXt.js";
const sitekey = "0x4AAAAAACMRHYyVsYg5_rNf";
function Turnstile({ setToken }) {
  const containerRef = reactExports.useRef(null);
  const widgetIdRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!document.querySelector('script[src*="turnstile/v0/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    const renderWidget = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey,
          callback: (token) => setToken(token),
          theme: "auto",
          // THIS FIXES THE WIDTH:
          size: "flexible"
        });
      }
    };
    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [setToken]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: containerRef,
      id: "turnstile-container",
      className: "w-flex justify-center min-h-[65px]"
    }
  );
}
export {
  Turnstile as T
};
