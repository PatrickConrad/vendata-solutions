import { s as createServerFn, a as reactExports, n as jsxRuntimeExports } from "./worker-entry-Cp1SBzdi.js";
import { e as createSsrRpc } from "./router-_ciCvpq_.js";
import "node:events";
import "node:stream";
import "node:async_hooks";
import "node:stream/web";
createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("9ea599125807398ba191be13f1b9a434a3e5b3c1d068ccfa3fa6f7b35d072438"));
createServerFn({
  method: "POST"
}).inputValidator((email) => {
  return email;
}).handler(createSsrRpc("aafd0cdacef481a67035b1d6146796e1b93f2ae503d925868a8f718cfa71e9ba"));
createServerFn({
  method: "POST"
}).inputValidator((input) => input).handler(createSsrRpc("8624f41f9704bb63fd04683d56d305078698bebf767554f65b2bc2e2bd0ad490"));
const sitekey = "0x4AAAAAACMRHYyVsYg5_rNf";
function Turnstile({ setToken }) {
  console.log({ sitekey });
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAACMRHYyVsYg5_rNf",
        callback: (token) => setToken(token)
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, [setToken]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "turnstile-container" });
}
function Book() {
  const [step, setStep] = reactExports.useState(1);
  const [token, setToken] = reactExports.useState("");
  const email = reactExports.useRef("");
  const name = reactExports.useRef("");
  const next = () => setStep((s) => s + 1);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 p-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center", children: "Book a Strategy Call" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed", children: "Let’s get you scheduled in just a few quick steps." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-8", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-2 w-16 rounded-full transition ${step >= n ? "bg-green-500" : "bg-gray-300 dark:bg-slate-700"}`
      },
      n
    )) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
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
            className: "input",
            onChange: (e) => name.current = e.target.value
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
          "Email Address ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            required: true,
            placeholder: "john@company.com",
            className: "input",
            onChange: (e) => email.current = e.target.value
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Turnstile, { setToken }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: next,
          className: "btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase",
          children: "Continue"
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 text-center", children: "Select a time that works best for you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: `https://calendly.com/patrickoconrad/new-meeting?embed_domain=vendata.solutions&embed_type=Inline&name=${name.current}&email=${email.current}`,
          className: "w-full h-[700px] rounded-lg shadow-inner"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "text-slate-500 hover:text-slate-800", children: "← Back" }) })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "You’re all set!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check your inbox for the confirmation email." })
    ] })
  ] }) });
}
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
