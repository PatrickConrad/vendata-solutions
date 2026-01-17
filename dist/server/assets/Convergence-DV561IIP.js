import { a as reactExports, n as jsxRuntimeExports } from "./worker-entry-DY51TXeM.js";
const Convergence = () => {
  const observerRef = reactExports.useRef(null);
  const [converged, setConverged] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setConverged(entry.isIntersecting);
    }, { threshold: 1 });
    observer.observe(observerRef.current);
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (!observerRef.current) return;
      const scrolled = window.pageYOffset;
      const sectionTop = observerRef.current.offsetTop;
      const sectionHeight = observerRef.current.offsetHeight;
      if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
        const move = (scrolled - sectionTop) * 0.05;
        observerRef.current.querySelectorAll(".circle").forEach((el, i) => {
          el.style.marginTop = `${move * (i + 1)}px`;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-1/2 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: observerRef, className: `logo-container ${converged ? "converged" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "circle c-navy dark:bg-slate-300" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "circle c-gold-tr" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "circle c-gold-bl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "circle c-green" })
  ] }) });
};
export {
  Convergence as C
};
