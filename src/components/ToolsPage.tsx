import React, { useEffect, useState, useRef } from "react";
import { ToolsHero } from "./tools.hero";
import { StripeBanner } from "./reusable/RevolvingBanner";
import { getIntegrations } from "../data/integrations";
import { Link } from "@tanstack/react-router";
import { DesktopToolMap, MobileToolMap } from "./tool.selector";
import { PhaseType } from "./reusable/matrixBackground";





// ... (Tool type and tools array stay the same)

export default function ToolsPage() {
  const [phase, setPhase] = useState<PhaseType>('stable');

  return (
    <main className="bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-plus-jakarta">
      <ToolsHero phase={phase} setPhase={setPhase}/>        {/* ================= CUSTOM Banner ================= */}
      {
        phase !== 'exit' &&
        <StripeBanner title="Successful Integrations:" items={getIntegrations()} speed={200}/>

      }

      <section id="tool-list"className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-v-gold uppercase tracking-widest font-bold text-sm mb-2">The Frameworks</h2>
            <h3 className="text-3xl md:text-5xl font-black text-v-navy dark:text-white uppercase">
              Field-Tested <span className="text-v-green">Logic</span>
            </h3>
          </div>

          <DesktopToolMap />
          <MobileToolMap />

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center bg-v-navy text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-v-green/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase leading-none">
            End the <span className="text-v-green">Vendetta</span> Against Your Operations
          </h2>
          <Link
            to="/services/diagnostics"
            className="btn-gold px-12 py-6 rounded-2xl font-black text-2xl tracking-tighter uppercase inline-block shadow-xl hover:scale-105 transition-transform"
          >
            Work with Vendata
          </Link>
        </div>
      </section>
    </main>
  );
}