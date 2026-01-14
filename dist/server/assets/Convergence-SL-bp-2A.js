import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';

const Convergence = () => {
  const observerRef = useRef(null);
  const [converged, setConverged] = useState(false);
  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setConverged(entry.isIntersecting);
    }, { threshold: 1 });
    observer.observe(observerRef.current);
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 flex justify-center", children: /* @__PURE__ */ jsxs("div", { ref: observerRef, className: `logo-container ${converged ? "converged" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "circle c-navy dark:bg-slate-300" }),
    /* @__PURE__ */ jsx("div", { className: "circle c-gold-tr" }),
    /* @__PURE__ */ jsx("div", { className: "circle c-gold-bl" }),
    /* @__PURE__ */ jsx("div", { className: "circle c-green" })
  ] }) });
};

export { Convergence as C };
