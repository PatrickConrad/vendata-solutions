import { a as reactExports, n as jsxRuntimeExports, s as createServerFn } from "./worker-entry-Cvwd2iGy.js";
import { e as createSsrRpc } from "./router-CSrdRt6r.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
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
function Book() {
  const [step, setStep] = reactExports.useState(1);
  const [token, setToken] = reactExports.useState("");
  const [clickedNext, setClickedNext] = reactExports.useState(false);
  const [info, setInfo] = reactExports.useState({
    email: "",
    name: ""
  });
  const calendlyIframe = reactExports.useMemo(() => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "iframe",
    {
      src: `https://calendly.com/patrickoconrad/new-meeting?embed_domain=vendata.solutions&embed_type=Inline&name=${info.name}&email=${info.email}`,
      className: "w-full h-[700px] rounded-lg shadow-inner"
    }
  ), [info.name, info.email]);
  const next = () => {
    setClickedNext(true);
    if (step === 1 && (info.email === "" || info.name === "")) {
      return;
    }
    setStep((s) => s + 1);
    setClickedNext(false);
  };
  const back = () => setStep((s) => s - 1);
  reactExports.useEffect(() => {
    const handleMessage = (e) => {
      console.log({ e });
      console.log({ data: e.data });
      console.log({ event: e.data?.event });
      if (e.data?.event === "calendly.event_scheduled") {
        setStep(3);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  reactExports.useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter" && step === 1) {
        next();
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [step, info]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-30 flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center", children: "Book a Strategy Call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed", children: "Let’s get you scheduled in just a few quick steps." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-8", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-2 w-16 rounded-full transition ${step >= n ? "bg-v-green" : "bg-gray-300 dark:bg-slate-700"}`
      },
      n
    )) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bookingForm w-[90%] md:w-lg bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
            "Full Name ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "John Doe",
              value: info.name,
              className: `bookingForm  ${clickedNext && info.name === "" ? "error" : ""}`,
              onChange: (e) => setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "bookingForm text-slate-700 dark:text-slate-300 font-medium", children: [
            "Email Address ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              placeholder: "john@company.com",
              value: info.email,
              className: `bookingForm ${clickedNext && info.email === "" ? "error" : ""}`,
              onChange: (e) => setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: next,
            className: "btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase",
            children: "Continue"
          }
        ),
        step === 1 && (info.email === "" || info.name === "") && clickedNext ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full flex justify-center", style: { color: "red" }, children: "Both name & email are required" }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Turnstile, { setToken })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "text-slate-500 cursor-pointer hover:text-(--v-gold) md:pl-10", children: "← Back" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 text-center", children: "Select a time that works best for you." }),
      calendlyIframe
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "You’re all set!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check your inbox for the confirmation email." })
    ] })
  ] });
}
createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("86dcb2d9ff949870ad447116fc58cbe65908abb71b286bf73647bbe003004267"));
createServerFn({
  method: "POST"
}).inputValidator((email) => {
  return email;
}).handler(createSsrRpc("1bf3031431d51463038e5d1b6560e5f1b1627b95ccc6da061853bebbf738e8e0"));
createServerFn({
  method: "POST"
}).inputValidator((input) => input).handler(createSsrRpc("cfa2100eea0bb98e0fdcda22c2e02d30a78aa2b1b44b256568a5f72d87396b78"));
function RouteComponent() {
  const [email, setEmail] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const [sendAgain, setSendAgain] = reactExports.useState();
  const [token, setToken] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const [message, setMessage] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (sendAgain === null) return;
    const timer = setInterval(() => {
      setSendAgain((prev) => {
        if (prev == null || prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, [sendAgain]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Book, {});
}
export {
  RouteComponent as component
};
