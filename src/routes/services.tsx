import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router"
import { ServiceIcon } from "../components/reusable/ServiceIcon"
import { 
  faStethoscope, 
  faGear, 
  faBridge, 
  faClock, 
  faLocationDot, 
  faCircleCheck,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons"
import ServicesPage from '../components/services/ServicesPage'

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})



export default function RouteComponent() {
  return (
    // <div className="pt-20 bg-white dark:bg-slate-900 font-plus-jakarta transition-colors duration-300">
      
    //   {/* HERO: THE PARTNERSHIP MODEL */}
    //   <section className="py-24 px-6 bg-v-navy text-white text-center">
    //     <div className="max-w-4xl mx-auto">
    //       <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
    //         A Four-Step <span className="text-v-green">Vendetta</span> Against Waste.
    //       </h1>
    //       <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
    //         We don't believe in "billable hours" for the sake of it. We believe in high-impact interventions that pay for themselves.
    //       </p>
    //     </div>
    //   </section>

    //   {/* STEP 1: THE AUDIT (The Diagnostic) */}
    //   <section className="py-24 px-6 max-w-7xl mx-auto">
    //     <div className="grid md:grid-cols-2 gap-16 items-start">
    //       <div>
    //         <div className="flex items-center gap-4 mb-6">
    //           <span className="bg-v-gold text-v-navy w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl rotate-3">1</span>
    //           <h2 className="text-4xl font-bold dark:text-white uppercase tracking-tight">The Process Audit</h2>
    //         </div>
    //         <p className="text-5xl font-black text-v-green mb-6">$600 <span className="text-sm text-slate-400 font-normal uppercase tracking-widest">Flat Rate</span></p>
            
    //         <div className="space-y-6 text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
    //           <p>The audit is pure discovery. We aren't here to sell you a new subscription; we're here to learn your business, your workflows, and your P&L.</p>
    //           <ul className="grid gap-3">
    //             {[
    //               "Deep dive into existing tools & SaaS spend",
    //               "Identification of hidden operational bottlenecks",
    //               "Analysis of time-waste vs. revenue generation",
    //               "A custom roadmap of actionable 'No-Code' and 'Low-Code' wins"
    //             ].map((item, i) => (
    //               <li key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
    //                 <ServiceIcon icon={faCircleCheck} color="var(--v-green)" />
    //                 <span className="font-medium">{item}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
          
    //       {/* Logistics Box */}
    //       <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-[2.5rem] border-2 border-dashed border-v-gold/30 sticky top-32">
    //         <h4 className="font-bold text-v-navy dark:text-v-gold mb-6 uppercase text-sm tracking-[0.2em]">Logistics & Travel</h4>
    //         <div className="space-y-6">
    //            <div className="flex gap-4">
    //               <div className="text-v-gold"><ServiceIcon icon={faLocationDot}/></div>
    //               <p className="text-slate-600 dark:text-slate-300"><strong className="text-v-navy dark:text-white block">Local-First Audit</strong> Includes one onsite visit within the Washington-Baltimore area.</p>
    //            </div>
    //            <div className="flex gap-4">
    //               <div className="text-v-gold"><ServiceIcon icon={faPlaneDeparture} /></div>
    //               <p className="text-slate-600 dark:text-slate-300"><strong className="text-v-navy dark:text-white block">Travel & Board</strong> Sites outside the DMV are subject to additional fees and expenses.</p>
    //            </div>
    //            <div className="flex gap-4">
    //               <div className="text-v-gold"><ServiceIcon icon={faClock} /></div>
    //               <p className="text-slate-600 dark:text-slate-300"><strong className="text-v-navy dark:text-white block">Extended Discovery</strong> $400 per additional onsite visit if required.</p>
    //            </div>
    //            <hr className="border-slate-200 dark:border-slate-700" />
    //            <p className="italic text-sm text-slate-500">You are paying for attention and skill. If we find nothing, we won't invent a problem. You keep the roadmap regardless of whether you hire us for Step 2.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* STEP 2 & 3: EXECUTION */}
    //   <section className="py-24 px-6 bg-slate-100 dark:bg-slate-950">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="grid md:grid-cols-2 gap-8">
    //         {/* Optimization */}
    //         <div className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border-b-8 border-v-navy hover:-translate-y-2 transition-transform">
    //            <span className="bg-v-navy text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Step 2</span>
    //            <h3 className="text-3xl font-bold mt-6 mb-4 dark:text-white">Process Optimization</h3>
    //            <p className="text-4xl font-black text-v-green mb-6">$80<span className="text-lg font-medium text-slate-400">/hr</span></p>
    //            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">We optimize your current tools first. No desire to reinvent the wheel or trigger software fatigue.</p>
    //            <div className="p-5 bg-v-navy/5 dark:bg-white/5 border border-v-navy/10 dark:border-white/10 rounded-2xl text-v-navy dark:text-slate-300 text-sm font-bold">
    //              Access to VenData prebuilt internal tooling: <span className="text-v-green ml-2">FREE</span>
    //            </div>
    //         </div>

    //         {/* Custom Bridges */}
    //         <div className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border-b-8 border-v-green hover:-translate-y-2 transition-transform">
    //            <span className="bg-v-green text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Step 3</span>
    //            <h3 className="text-3xl font-bold mt-6 mb-4 dark:text-white">Custom Bridging</h3>
    //            <p className="text-4xl font-black text-v-green mb-6">$110<span className="text-lg font-medium text-slate-400">/hr</span></p>
    //            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Small, high-impact bridges to connect disparate data. We talk ROI and business logic before a single line of code is written.</p>
    //            <div className="p-5 bg-v-green/5 dark:bg-white/5 border border-v-green/10 dark:border-white/10 rounded-2xl text-v-green dark:text-v-green text-sm font-bold">
    //              Full keys and source code handed over to your admins.
    //            </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* STEP 4: MONITORING & ADVISORY */}
    //   <section className="py-24 px-6 max-w-7xl mx-auto">
    //     <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    //       <div className="max-w-xl">
    //         <span className="text-v-gold font-black uppercase tracking-[0.3em] text-sm">Step 4</span>
    //         <h2 className="text-5xl font-bold dark:text-white mt-2">The Sentry</h2>
    //         <p className="text-slate-500 mt-4 text-lg">Ongoing continuity and research-backed strategy to ensure your new systems don't just work, but evolve.</p>
    //       </div>
    //     </div>
        
    //     <div className="grid md:grid-cols-3 gap-8">
    //        <div className="p-10 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
    //           <h4 className="font-bold text-xl mb-2 dark:text-white">The Safety Net</h4>
    //           <p className="text-v-green font-bold mb-6">Included in Retainer</p>
    //           <p className="text-slate-500 italic leading-relaxed">Outages due to our internal code are fixed at no cost. Always.</p>
    //        </div>
           
    //        <div className="p-10 border-2 border-v-gold/30 rounded-[2rem] bg-v-gold/5 relative overflow-hidden">
    //           <div className="absolute top-0 right-0 bg-v-gold text-v-navy font-black text-[10px] px-3 py-1 uppercase tracking-tighter">Recommended</div>
    //           <h4 className="font-bold text-xl mb-2 dark:text-white">Strategic Advisory</h4>
    //           <p className="text-v-navy dark:text-v-gold font-bold mb-6">$100 / Call</p>
    //           <p className="text-slate-600 dark:text-slate-300 leading-relaxed">15-minute high-density calls for tech decisions. No guessing; just logic and ROI.</p>
    //        </div>

    //        <div className="p-10 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
    //           <h4 className="font-bold text-xl mb-2 dark:text-white">Site Requests</h4>
    //           <p className="text-v-green font-bold mb-6">$350 / Request</p>
    //           <p className="text-slate-500 italic leading-relaxed">New hardware deployments or one-time architectural expansions.</p>
    //        </div>
    //     </div>
    //   </section>

    //   {/* FINAL CALL */}
    //   <section className="py-32 px-6 bg-v-navy text-center text-white relative overflow-hidden">
    //     {/* Visual Decoration */}
    //     <div className="absolute inset-0 opacity-10 pointer-events-none">
    //       <div className="absolute top-0 left-0 w-64 h-64 bg-v-green rounded-full blur-[120px]"></div>
    //       <div className="absolute bottom-0 right-0 w-64 h-64 bg-v-gold rounded-full blur-[120px]"></div>
    //     </div>

    //     <div className="relative z-10">
    //       <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Ready to Define the ROI?</h2>
    //       <Link to="/consultation" className="btn-gold px-14 py-5 rounded-2xl text-2xl font-black uppercase tracking-tighter inline-block shadow-2xl">
    //         Book Step 1 Audit
    //       </Link>
    //       <div className="mt-10 max-w-xl mx-auto space-y-2">
    //         <p className="text-slate-400 text-sm italic">
    //           Audit fee covers local onsite discovery.
    //         </p>
    //         <p className="text-slate-500 text-xs">
    //           Outages due to changes out of our control (3rd party API shifts, etc) are subject to standard hourly rates.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    // </div>
    <ServicesPage />
  )
}