import { v as createServerFn, a as reactExports, n as jsxRuntimeExports } from "./worker-entry-Cwlb-ZXt.js";
import { T as Turnstile } from "./Turnstile-BA8Vwp6n.js";
import { d as createSsrRpc, F as FontAwesomeIcon, e as faBuilding, g as faEnvelope, h as faGlobe, i as faListCheck, j as faPaperPlane } from "./router-CdQ98coo.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const addEmailUser = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("aed5074db655da91215f09f7f9fe1852eb513595fd1ada9d8406111e91ab3210"));
function ContactForm() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    services: "General Inquiry",
    message: "",
    businessName: "",
    website: "",
    subscribe: false
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [token, setToken] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting logic-first request:", formData);
    if (formData.name === "" || formData.email === "" || formData.services === "" || formData.message === "" || formData.businessName === "" || token === "") {
      setIsSubmitting(false);
      return setError(true);
    }
    const response = await addEmailUser({ data: { formData, turnstileToken: token } });
    console.log({ response });
    if (response.status !== 200) {
      setIsSubmitting(false);
      return setError(true);
    }
    setDone(true);
  };
  const inputStyles = "w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:border-v-green focus:outline-none transition-all placeholder:text-slate-400 font-medium";
  const labelStyles = "block text-xs font-black uppercase tracking-widest text-v-navy dark:text-v-gold mb-2 ml-1";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl font-black italic tracking-tighter dark:text-white uppercase", children: [
        "Start the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-v-green", children: "Bridge." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-4 font-medium text-lg", children: "Email message are free. Please include as much information as possible." })
    ] }),
    done ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your message has been sent. We'll get back to you soon." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faBuilding, className: "mr-2" }),
              " Your Name"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                type: "text",
                placeholder: "Your Name Here",
                className: inputStyles,
                onChange: (e) => setFormData({ ...formData, name: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faBuilding, className: "mr-2" }),
              " Business Name"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                type: "text",
                placeholder: "VenData Solutions",
                className: inputStyles,
                onChange: (e) => setFormData({ ...formData, businessName: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faEnvelope, className: "mr-2" }),
              " Work Email"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                type: "email",
                placeholder: "admin@company.com",
                className: inputStyles,
                onChange: (e) => setFormData({ ...formData, email: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faGlobe, className: "mr-2" }),
              " Website (Optional)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                placeholder: "https://company.com",
                className: inputStyles,
                onChange: (e) => setFormData({ ...formData, website: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faGlobe, className: "mr-2" }),
              " Subscribe to recieve email offers and promotions?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                id: "subscribe-tick",
                checked: formData.subscribe,
                onChange: () => setFormData({ ...formData, subscribe: !formData.subscribe }),
                className: "w-5 h-5 cursor-pointer accent-blue-600"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: labelStyles, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faListCheck, className: "mr-2" }),
              " Primary Need"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: inputStyles,
                onChange: (e) => setFormData({ ...formData, services: e.target.value }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Surgical Optimization" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Custom Bridge / API Integration" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Full System Design ($500 Phase 1)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Operational Process Audit ($600)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sentry Retainer Discussion" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General Inquiry" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:row-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelStyles, children: "Question / Project Brief / Logic Challenge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                rows: 5,
                placeholder: "Tell us about the bottleneck...",
                className: `${inputStyles} resize-none`,
                onChange: (e) => setFormData({ ...formData, message: e.target.value })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col items-center justify-center py-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400 text-xs italic", children: "Security Validation required for submission." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Turnstile, { setToken })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            disabled: isSubmitting,
            className: "w-full bg-v-navy dark:bg-v-gold text-white dark:text-v-navy font-black text-xl uppercase italic py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:grayscale",
            children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "Analyzing Logic..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Initiate Request ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faPaperPlane })
            ] })
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm", children: token === "" ? "Captcha must be verified" : "Please include required information" }) })
    ] })
  ] }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) });
}
export {
  RouteComponent as component
};
