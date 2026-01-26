import { createFileRoute, Link } from '@tanstack/react-router'
import { StripeBanner } from '../components/reusable/RevolvingBanner'
import { getIntegrations } from '../data/integrations'
import { MatrixBackground } from '../components/reusable/matrixBackground'

export const Route = createFileRoute('/services/customization')({
  component: CustomizationComponent,
})

function CustomizationComponent() {
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta text-v-navy dark:text-slate-200 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <MatrixBackground>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-v-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block">
            Custom Logic & Engineering
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-50 dark:text-v-navy uppercase tracking-tighter italic mb-6 leading-none">
            Architect <span className="text-v-green">Bridges</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Open up new traffic patterns within your business. We build the high-speed 
            infrastructure that connects your disparate systems into one cohesive engine.
          </p>
        </div>
      </MatrixBackground>

      {/* --- STRATEGY TRIAD --- */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            
            {/* 1. Infrastructure Building */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-navy text-v-gold flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Bridge Construction</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We don't just write code; we improve your existing infrastructure. By building bridges between SaaS silos, we eliminate manual data transfers and open up new operational traffic patterns.
              </p>
            </div>

            {/* 2. Hybrid Efficiency */}
            <div className="p-8 bg-v-navy text-white rounded-3xl shadow-xl border-t-8 border-b-8 border-v-green flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-v-green flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 text-v-green">Optimization First</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We leverage flexible pre-built tooling and stack optimization before writing a single line of custom code. This hybrid approach significantly reduces billable development hours while maintaining high-end reliability.
              </p>
            </div>

            {/* 3. The Blueprint */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-gold/10 text-v-gold flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Comprehensive Scoping</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                No surprises. You receive a full comprehensive plan, technical roadmap, and ROI breakdown before the first hour is billed. You only proceed once you've reviewed and accepted the vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING & TERMS --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6">Development <span className="text-v-green">& Logic</span></h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We specialize in <strong>TypeScript</strong> and <strong>Python</strong> based tools. From custom API middle-ware to complex automation engines, we build with the most robust languages in modern engineering.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-v-gold">
                <div className="font-black text-v-gold text-xs uppercase pt-1 shrink-0">Licensing:</div>
                <ul className="text-[11px] uppercase font-bold tracking-tight text-slate-500 dark:text-slate-300">
                  <li>- You have lifetime access and licensing to your code. </li>
                  <li>- Keys, passwords, and repos are yours. </li>
                  <li>- See our <Link className='underline' to="/services/licensing-policy">licensing policy</Link> for details.</li>
                </ul>
              
              </div>
              <div className="flex items-start gap-4 p-5 bg-v-navy text-white rounded-xl border-l-4 border-v-green">
                <div className="font-black text-v-green text-xs uppercase pt-1 shrink-0">Logic Guarantee:</div>
                <div className="text-[11px] uppercase font-bold tracking-tight">
                  If our logic breaks, we don't charge to fix it. We stand by the architecture we build. 
                  See our <Link to="/services/error-policy" className="text-v-gold hover:underline">Error Policy</Link> to learn more.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-v-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <span className="text-v-gold font-black uppercase tracking-[0.3em] text-[10px]">Custom Development</span>
              <div className="text-7xl font-black italic my-4">$130<span className="text-2xl not-italic opacity-50">/hr</span></div>
              <p className="text-slate-400 text-sm mb-8 font-mono tracking-tight leading-relaxed">
                // Calculated by actual design, engineering, and logic-build hours.
              </p>

              <Link 
                to="/consultation" 
                search={{service:"custom"}} 
                className="block w-full py-5 bg-v-gold text-v-navy font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg active:scale-95"
              >
                Start Build
              </Link>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
                <Link to="/services/pricing-policy" className="block text-[10px] text-v-gold font-bold hover:underline tracking-widest uppercase">
                  View Pricing Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pb-24 pt-12 px-6 text-center">
         <p className="max-w-2xl mx-auto text-xs text-slate-500 italic">
          Logic is the ultimate leverage. By connecting your infrastructure, we don't just save time—we create a scalability engine that works while you sleep.
        </p>
      </section>
      <StripeBanner title="Successful Integrations:" items={getIntegrations()} />

    </div>
  )
}