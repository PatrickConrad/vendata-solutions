import{j as e}from"../main.js";const i=({phase:t,children:r,height:a="40vh"})=>e.jsxs("section",{style:{minHeight:"fit-content"},className:`max-h-[1020px]:px-3 py-15 group relative flex items-center justify-center overflow-hidden bg-(--v-navy) dark:bg-[#020617]
        ${t==="exit"?"animate-section-exit":""}
      `,children:[e.jsx("div",{className:`absolute inset-0 z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500
          ${t==="flicker"?"animate-grid-glitch":""}
        `,style:{backgroundImage:`
            linear-gradient(rgba(74, 119, 60, 0.5) 1.5px, transparent 1.5px), 
            linear-gradient(90deg, rgba(74, 119, 60, 0.5) 1.5px, transparent 1.5px)
          `,backgroundSize:"50px 50px",maskImage:"radial-gradient(circle at center, black 40%, transparent 95%)"}}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-v-green/20 rounded-full blur-[100px] group-hover:w-[800px] group-hover:h-[800px] group-hover:bg-v-green/40 transition-all duration-1000 pointer-events-none"}),r]});export{i as M};
