import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useState, useMemo } from 'react';
import { c as createSsrRpc } from './router-C5efAZQM.js';
import { c as createServerFn } from '../server.js';
import '@tanstack/react-router';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'h3-v2';
import 'tiny-invariant';
import 'seroval';
import '@tanstack/react-router/ssr/server';

createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createSsrRpc("8147475b68f8d7ce2daf0bc2cd3e8f06a8554b6e7ca57a9c105e8663e39f2959"));
createServerFn({
  method: "POST"
}).inputValidator((email) => {
  return email;
}).handler(createSsrRpc("73197069f402ffc7bdc1f24cb5d29b5ec21bc2a7ffe2df0ff104e22689f8a713"));
createServerFn({
  method: "POST"
}).inputValidator((input) => input).handler(createSsrRpc("ce9bda8ad2507591b51649d15304cdd16e1c8af776d47b325fb76a928b769c66"));

const sitekey = "0x4AAAAAACMRHYyVsYg5_rNf";
function Turnstile({ setToken }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.turnstile.render("#turnstile-container", {
        sitekey,
        callback: (token) => setToken(token)
      });
    };
    return () => {
      document.body.removeChild(script);
    };
  }, [setToken]);
  if (typeof window === "undefined" || false) return null;
  return /* @__PURE__ */ jsx("div", { id: "turnstile-container" });
}

function Book() {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState("");
  const [clickedNext, setClickedNext] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    name: ""
  });
  const calendlyIframe = useMemo(() => /* @__PURE__ */ jsx(
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 w-full", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center", children: "Book a Strategy Call" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed", children: "Let’s get you scheduled in just a few quick steps." }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mb-8", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `h-2 w-16 rounded-full transition ${step >= n ? "bg-v-green" : "bg-gray-300 dark:bg-slate-700"}`
      },
      n
    )) }),
    step === 1 && /* @__PURE__ */ jsxs("div", { className: "bookingForm w-[90%] md:w-lg bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
          "Full Name ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "bookingForm text-slate-700 dark:text-slate-300 font-medium", children: [
          "Email Address ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(Turnstile, { setToken }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "btn-gold px-12 py-5 rounded-2xl font-black text-l md:text-xl tracking-wide uppercase",
          children: "Continue"
        }
      ),
      step === 1 && (info.email === "" || info.name === "") && clickedNext ? /* @__PURE__ */ jsx("p", { className: "w-full flex justify-center", style: { color: "red" }, children: "Both name & email are required" }) : null
    ] }),
    step === 2 && /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsx("button", { onClick: back, className: "text-slate-500 hover:text-slate-800", children: "← Back" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-center", children: "Select a time that works best for you." }),
      calendlyIframe
    ] }),
    step === 3 && /* @__PURE__ */ jsxs("div", { className: "text-center p-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "You’re all set!" }),
      /* @__PURE__ */ jsx("p", { children: "Check your inbox for the confirmation email." })
    ] })
  ] });
}

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sendAgain, setSendAgain] = useState();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(Book, {});
}

export { RouteComponent as component };
