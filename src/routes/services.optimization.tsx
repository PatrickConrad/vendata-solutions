import { createFileRoute, Link } from '@tanstack/react-router'
import { StripeBanner } from '../components/reusable/RevolvingBanner'
import { getIntegrations } from '../data/integrations'

export const Route = createFileRoute('/services/optimization')({
  component: OptimizationsComponent,
})

function OptimizationsComponent() {
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta text-v-navy dark:text-slate-200 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-v-green uppercase tracking-[0.4em] font-bold text-xs mb-4 block">
            System Optimization & Implementation
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
            Execute <span className="text-v-gold">Standard</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Most technical friction isn't a software bug—it's a process bug. We maximize your current stack, deploy pre-built logic, and document the "how-to" forever.
          </p>
        </div>
      </section>

      {/* --- FEATURE TRIAD --- */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            
            {/* 1. Process Standardization */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-navy text-v-green flex items-center justify-center mb-6 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Process Standard</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We turn " tribal knowledge" into SOPs. Establishing clear documentation and workflows so your team never has to ask "How do I do this?" twice.
              </p>
            </div>

            {/* 2. Tool Maximization */}
            <div className="p-8 bg-v-navy text-white rounded-3xl shadow-xl border-b-8 border-v-gold flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-v-gold flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 text-v-gold">Tool Maximization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Stop paying for features you don't use. We tune your current CRM, ERP, or project tools to their absolute limit before suggesting new spend.
              </p>
            </div>

            {/* 3. Plug & Play Prebuilds */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-green/10 text-v-green flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Modular Pre-builds</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Access our library of field-tested automation scripts and logic blocks. Licensed to you forever at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING & TERMS --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6">Implementation <span className="text-v-gold">& Rollout</span></h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We don't just hand over a PDF. We stay in the trenches for the rollout, ensuring your team adopts the new process and the technical logic holds up under real-world pressure.
            </p>
            
            <div className="space-y-4">
               <Link to="/services/licensing-policy" className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-v-green">
                  <div className="font-black text-v-green">LICENSE:</div>
                  <p className="text-xs uppercase font-bold tracking-tight">Pre-built tools are licensed to you for life. Enhance them. Modify them. No reselling. Click <span className='underline'>here</span> to learn more.</p>
               </Link>
               <div className="flex items-start gap-4 p-4 bg-v-navy text-white rounded-xl border-l-4 border-v-gold">
                  <div className="font-black text-v-gold">RETAINER:</div>
                  <p className="text-xs uppercase font-bold tracking-tight">Active process monitoring and free pre-built tool maintenance for all retainer partners.</p>
               </div>
            </div>
          </div>

          <div className="bg-v-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="relative z-10 text-center">
                <span className="text-v-green font-black uppercase tracking-[0.3em] text-[10px]">Hourly Execution</span>
                <div className="text-7xl font-black italic my-4">$100<span className="text-2xl not-italic opacity-50">/hr</span></div>
                <p className="text-slate-400 text-sm mb-8 font-mono">// Measured by actual implementation and documentation hours.</p>
                
                <Link to="/consultation" search={{service:"optimization"}} className="block w-full py-5 bg-v-green text-v-navy font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all">
                  Request Implementation
                </Link>

                <div className="mt-8 pt-8 border-t border-white/10">
                   <Link to="/services/pricing-policy" className="text-[10px] text-v-gold font-bold hover:underline tracking-widest uppercase">
                      View Pricing Policy →
                   </Link>
                </div>
             </div>
          </div>
         
        </div>
         <p className="mt-12 text-xs text-slate-500 italic w-full mx-auto flex justify-center">
            Prebuilt tools are deployed as-is or modified to fit your workflow. They are the "force multipliers" that save dozens of custom development hours.
          </p>
      </section>
      <StripeBanner title="Successful Integrations:" items={getIntegrations()}/>
      
    
    </div>
  )
}