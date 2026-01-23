import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router"
import { ServiceIcon } from "../components/reusable/ServiceIcon"
import { 
  faStethoscope, 
  faGear, 
  faBridge, 
  faClock, 
  faLocationDot, 
  faCircleCheck 
} from "@fortawesome/free-solid-svg-icons"

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
<div className="pt-20 bg-white dark:bg-slate-900 font-plus-jakarta">
      
      {/* HERO: THE PARTNERSHIP MODEL */}
      <section className="py-20 px-6 bg-v-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 italic">
            A Four-Step <span className="text-v-green">Vendetta</span> Against Waste.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            We don't believe in "billable hours" for the sake of it. We believe in high-impact interventions that pay for themselves.
          </p>
        </div>
      </section>

      {/* STEP 1: THE AUDIT (The Diagnostic) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-v-gold text-v-navy w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">1</span>
              <h2 className="text-3xl font-bold dark:text-white uppercase tracking-tight">The Process Audit</h2>
            </div>
            <p className="text-4xl font-black text-v-green mb-6">$400 <span className="text-sm text-slate-400 font-normal uppercase tracking-widest tracking-normal">Flat Rate</span></p>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 mb-8 text-lg">
              <p>The audit is pure discovery. We aren't here to sell you a new subscription; we're here to learn your business, your workflows, and your P&L.</p>
              <ul className="space-y-2">
                {[
                  "Deep dive into existing tools & SaaS spend",
                  "Identification of hidden operational bottlenecks",
                  "Analysis of time-waste vs. revenue generation",
                  "A custom roadmap of actionable 'No-Code' and 'Low-Code' wins"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ServiceIcon icon={faCircleCheck} color="var(--v-green)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-[2rem] border-2 border-dashed border-v-gold/30">
            <h4 className="font-bold text-v-navy dark:text-v-gold mb-4 uppercase text-sm tracking-widest">The Fine Print</h4>
            <div className="space-y-4 text-sm text-slate-500">
               <p className="flex items-center gap-2"><ServiceIcon icon={faLocationDot} /> Includes 1 onsite visit (Local-First mindset).</p>
               <p className="flex items-center gap-2"><ServiceIcon icon={faClock} /> Travel & Board extra $400 for non-local sites.</p>
               <p className="italic">You are paying for attention and skill. If we find nothing, we won't invent a problem. You keep the ideas regardless of whether you hire us for Step 2.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 & 3: EXECUTION */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Optimization */}
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border-t-8 border-v-navy">
               <span className="text-v-gold font-black">STEP 2</span>
               <h3 className="text-2xl font-bold mt-2 mb-4 dark:text-white">Process Optimization</h3>
               <p className="text-3xl font-black text-v-green mb-6">$80/hr</p>
               <p className="text-slate-600 dark:text-slate-400 mb-6">No desire to reinvent the wheel. We optimize your current tools first to avoid cascading software fatigue.</p>
               <div className="p-4 bg-v-navy text-white rounded-xl text-sm font-bold">
                 Access to Vendata prebuilt tooling: $0
               </div>
            </div>

            {/* Custom Bridges */}
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl border-t-8 border-v-green">
               <span className="text-v-gold font-black">STEP 3</span>
               <h3 className="text-2xl font-bold mt-2 mb-4 dark:text-white">Custom Bridging</h3>
               <p className="text-3xl font-black text-v-green mb-6">$110/hr</p>
               <p className="text-slate-600 dark:text-slate-400 mb-6">Small, high-impact "What Works" bridges. For larger custom projects, we sit down and talk logic and ROI first.</p>
               <div className="p-4 bg-v-green/10 text-v-green rounded-xl text-sm font-bold">
                 Full keys & codes handed over to your admins.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 4: MONITORING & ADVISORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-v-gold font-black uppercase tracking-widest">Step 4</span>
          <h2 className="text-4xl font-bold dark:text-white">The Sentry: Continuity</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <h4 className="font-bold text-lg mb-2 dark:text-white">The Safety Net</h4>
              <p className="text-v-green font-bold mb-4">Included in Retainer</p>
              <p className="text-sm text-slate-500 italic">Outages due to our internal code are fixed at $0. Always.</p>
           </div>
           
           <div className="p-8 border border-v-gold/20 rounded-2xl bg-v-gold/5">
              <h4 className="font-bold text-lg mb-2 dark:text-white">Strategic Advisory</h4>
              <p className="text-v-navy dark:text-v-gold font-bold mb-4">$100 / Call</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">15-minute research-backed expert advice. No more guessing; just logic.</p>
           </div>

           <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <h4 className="font-bold text-lg mb-2 dark:text-white">Site Requests</h4>
              <p className="text-v-green font-bold mb-4">$350 / Request</p>
              <p className="text-sm text-slate-500 italic">New deployments or one-time architectural setups.</p>
           </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="py-24 px-6 bg-v-navy text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Ready to define the ROI?</h2>
        <Link to="/consultation" className="btn-gold px-12 py-4 rounded-xl text-xl font-black uppercase tracking-tighter">
          Book Step 1 Audit
        </Link>
        <p className="mt-6 text-slate-400 text-sm italic underline decoration-v-green decoration-2 underline-offset-4">
          Outages due to changes out of our control are subject to standard hourly rates.
        </p>
      </section>

    </div>
  )
}
