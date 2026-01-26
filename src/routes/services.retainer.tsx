import { createFileRoute, Link } from '@tanstack/react-router'
import { StripeBanner } from '../components/reusable/RevolvingBanner'
import { getIntegrations } from '../data/integrations'

export const Route = createFileRoute('/services/retainer')({
  component: RetainerComponent,
})

function RetainerComponent() {
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta text-v-navy dark:text-slate-200 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-v-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block">
            Priority Bandwidth & Strategy
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-6">
            The <span className="text-v-green">Sentry</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Strategic technical oversight for growing operations. 
            We reserve our technical bandwidth to act as your fractional CTO and system guardian.
          </p>
        </div>
      </section>

      {/* --- VALUE TRIAD --- */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            
            {/* 1. Fractional CTO */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-navy text-v-gold flex items-center justify-center mb-6 shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Fractional CTO</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Is this the right tech? Is this the right hire? How can we offer this new service? 
                We are there to answer the high-level questions that define your trajectory.
              </p>
            </div>

            {/* 2. Response Guarantee */}
            <div className="p-8 bg-v-navy text-white rounded-3xl shadow-xl border-b-8 border-v-gold flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-v-gold flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3 text-v-gold">Priority Access</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                48-hour response guarantee on all communications. While this does not mean an immediate resolution guarantee, it ensures your business is always at the top of our queue.
              </p>
            </div>

            {/* 3. System Monitoring */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-v-green/10 text-v-green flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase italic mb-3">Active Guardianship</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Continuous monitoring of your processes, optimizations, and customizations. We reduce error costs by identifying fractures before they become failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS & TERMS --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6">The Sentry <span className="text-v-gold">Advantage</span></h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              A retainer isn't just a fee; it's an insurance policy for your technical infrastructure. 
              Sentry partners receive exclusive access to our developing toolset.
            </p>

            <ul className="space-y-6 mb-8">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-v-green flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-tight">Waived Investigative & Design Fees</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-v-green flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-tight">Early access to Beta/Prebuilt Tools</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-v-green flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-tight">Priority implementation scheduling</span>
              </li>
            </ul>

            <Link to="/services/error-policy" className="text-v-gold font-bold text-xs uppercase tracking-widest hover:underline">
              Review Error Policy regarding monitoring →
            </Link>
          </div>

          <div className="bg-v-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border-t-4 border-v-gold">
            <div className="relative z-10 text-center">
              <span className="text-v-green font-black uppercase tracking-[0.3em] text-[10px]">Monthly Retainer</span>
              <div className="text-7xl font-black italic my-4">$600<span className="text-2xl not-italic opacity-50">/mo</span></div>
              
              <div className="text-left bg-white/5 p-6 rounded-2xl mb-8 border border-white/10">
                <p className="text-xs text-slate-400 font-mono mb-4 leading-relaxed">
                  // THE SENTRY reserves technical bandwidth for your business.
                </p>
                <p className="text-[11px] uppercase font-bold tracking-tight text-v-gold">
                  NOTE: Implementation, custom coding, and optimization remain billed at standard hourly rates.
                </p>
              </div>

              <Link 
                to="/consultation" 
                search={{service:"retainer"}} 
                className="block w-full py-5 bg-v-gold text-v-navy font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all"
              >
                Apply for The Sentry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}