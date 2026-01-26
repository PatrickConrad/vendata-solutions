import { createFileRoute, Link } from '@tanstack/react-router'
import { StripeBanner } from '../components/reusable/RevolvingBanner'
import { getIntegrations } from '../data/integrations'
import { MatrixBackground } from '../components/reusable/matrixBackground'

export const Route = createFileRoute('/services/applications')({
  component: CustomizationComponent,
})

function CustomizationComponent() {
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta text-v-navy dark:text-slate-200 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <MatrixBackground>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-v-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block">
            Custom Engineering
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-50 dark:text-v-navy uppercase tracking-tighter italic mb-6 leading-none">
            Build the <span className="text-v-green">Impossible</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            When off-the-shelf software hits its limit, we build the bridge. 
            Bespoke logic designed for high-stakes operations.
          </p>
        </div>
      </MatrixBackground>

      {/* --- CAPABILITIES GRID --- */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "CRM / ERP", desc: "Custom management tools built to your exact operational flow." },
              { title: "Backend", desc: "Robust infrastructures and API bridges for data integrity." },
              { title: "Apps & Web", desc: "High-performance websites and mobile applications." },
              { title: "Dashboards", desc: "Real-time portals providing total visibility into your KPIs." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-black uppercase italic text-v-navy dark:text-v-green mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE PIPELINE --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-8">The <span className="text-v-green">Development</span> Pipeline</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Custom work requires absolute clarity. We do not "guess" on code. 
              If you aren't 100% certain of the technical requirements, we recommend starting with an 
              <Link to="/services/diagnostics" className="text-v-gold font-bold hover:underline"> Investigative Discovery</Link> or 
              <Link to="/services/diagnostics" className="text-v-gold font-bold hover:underline"> Process Audit</Link> first.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-v-navy dark:border-v-gold shadow-sm">
                <h4 className="font-black uppercase text-xs mb-2 italic">IP & Ownership Policy</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed uppercase font-bold tracking-tight">
                  Standard builds fall under Vendata IP Policy. 
                  However, we offer full IP Assignment per signed agreement. 
                  You may choose to pay a higher upfront premium to retain 100% ownership of the idea, the code, and the future.
                </p>
                <div className="pt-5">
                  <Link to='/services/licensing-policy' className="underline">
                    Learn more about our licensing policy here.
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-v-navy text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden border-b-8 border-v-green">
            <h3 className="text-v-gold uppercase font-black tracking-widest text-[10px] mb-8">Build Engagement</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase">Design & Scoping Fee</span>
                <span className="text-2xl font-black text-v-green font-mono">$500</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest px-2">
                <span>Strategic Investigation Fee</span>
                <span>+$150</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl mb-8 border border-white/10">
              <p className="text-[11px] text-slate-400 italic mb-4">
                // Fees are waived for Retainer Clients.
              </p>
              <p className="text-xs font-bold uppercase tracking-tighter leading-relaxed">
                Actual custom development is quoted as a flat project rate or hourly after the design phase is complete.
              </p>
            </div>

            <Link 
              to="/consultation" 
              search={{service: "custom"}}
              className="block w-full py-5 bg-v-green text-v-navy font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all text-center"
            >
              Request Custom Build
            </Link>

            <div className="mt-6 text-center">
              <Link to="/services/pricing-policy" className="text-[10px] text-v-gold font-bold hover:underline tracking-widest uppercase">
                View Pricing Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}