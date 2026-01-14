import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function RouteComponent() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-6 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg w-full", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold text-v-navy dark:text-white mb-6 text-center", children: "Schedule Your Free Consultation" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 dark:text-slate-300 mb-10 text-center leading-relaxed", children: "Fill in the details below and choose a time that works for you. We’ll confirm your consultation via email." }),
    !submitted ? /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
        "Your Name ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "text", required: true, placeholder: "John Doe", value: name, onChange: (e) => setName(e.target.value), className: "\r\n                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600\r\n                placeholder-gray-400 dark:placeholder-slate-500\r\n                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none\r\n                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100\r\n              " }),
      /* @__PURE__ */ jsx("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: "Company (Optional)" }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Acme Inc.", value: company, onChange: (e) => setCompany(e.target.value), className: "\r\n                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600\r\n                placeholder-gray-400 dark:placeholder-slate-500\r\n                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none\r\n                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100\r\n              " }),
      /* @__PURE__ */ jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
        "Select Date ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "date", required: true, value: date, onChange: (e) => setDate(e.target.value), className: "\r\n                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600\r\n                placeholder-gray-400 dark:placeholder-slate-500\r\n                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none\r\n                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100\r\n              " }),
      /* @__PURE__ */ jsxs("label", { className: "text-slate-700 dark:text-slate-300 font-medium", children: [
        "Select Time ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "time", required: true, value: time, onChange: (e) => setTime(e.target.value), className: "\r\n                px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600\r\n                placeholder-gray-400 dark:placeholder-slate-500\r\n                focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none\r\n                bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100\r\n              " }),
      /* @__PURE__ */ jsx("button", { className: "w-full py-3 rounded-lg font-bold text-lg text-white bg-green-600 hover:bg-green-700 transition-colors", children: "Confirm Booking" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-sm mb-2", children: "Or schedule directly via Google Calendar:" }),
        /* @__PURE__ */ jsx("iframe", { src: "https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York", style: {
          border: 0
        }, className: "w-full h-72 rounded-lg shadow-inner", frameBorder: "0", scrolling: "no" })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white mb-4", children: "Booking Confirmed!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-green-500 mb-2", children: [
        "Thanks, ",
        name,
        "! Your consultation has been scheduled."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700 dark:text-slate-300", children: "You will receive a confirmation email shortly." })
    ] })
  ] }) });
}

export { RouteComponent as component };
