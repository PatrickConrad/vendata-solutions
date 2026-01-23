import { Link } from "@tanstack/react-router"
import { 
  faStethoscope, 
  faShieldHalved, 
  faMicrochip,
  faMagnifyingGlassChart,
  faLocationDot,
  faPlaneDeparture,
  faClock,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta transition-colors duration-300">
      
      {/* HERO: LOGIC-FIRST PARTNERSHIP */}
      <section className="py-24 px-6 bg-v-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
            Logic-First <span className="text-v-green">Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
            We don't believe in "billable hours" for the sake of it. We provide high-impact technical interventions that pay for themselves.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold px-10 py-4 rounded-xl font-black uppercase tracking-tight shadow-xl">
              Free 30-Min Initial Consult
            </Link>
          </div>
        </div>
      </section>

      {/* STRATEGIC ENTRY POINTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategic Investigation */}
          <div className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
               <FontAwesomeIcon icon={faMagnifyingGlassChart} color="var(--v-gold)" size="lg" />
               <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight">Strategic Investigation</h2>
            </div>
            <p className="text-4xl font-black text-v-green mb-4">$100 <span className="text-sm text-slate-400 font-normal uppercase">per Request</span></p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
              For specific "How do I fix X?" or "Can we automate Y?" questions. This covers the technical research required to give you a definitive answer.
            </p>
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
               <ul className="space-y-3 text-sm font-bold dark:text-slate-200">
                 <li className="flex gap-3"><span className="text-v-gold">1.</span> Call 1 (15-minutes): Deep dive into the specific request.</li>
                 <li className="flex gap-3"><span className="text-v-gold">2.</span> Internal technical investigation & ROI analysis.</li>
                 <li className="flex gap-3"><span className="text-v-gold">3.</span> Call 2 (15-minutes): Findings, logic, and implementation strategy.</li>
               </ul>
            </div>
            <p className="mt-4 text-[10px] uppercase text-slate-400 tracking-widest font-black">* Waived for Retainer Clients</p>
          </div>

          {/* Process Audit */}
          <div className="p-10 bg-v-navy text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-6 text-v-green font-black italic opacity-10 text-4xl uppercase">Diagnostic</div>
            <div className="flex items-center gap-4 mb-4">
               <FontAwesomeIcon icon={faStethoscope} color="var(--v-green)" size="lg" />
               <h2 className="text-2xl font-bold uppercase tracking-tight">The Process Audit</h2>
            </div>
            <p className="text-4xl font-black text-v-green mb-4">$600 <span className="text-sm text-slate-400 font-normal uppercase tracking-widest">Flat Rate</span></p>
            <p className="text-slate-300 mb-8 flex-grow">
              A surgical onsite analysis of your current business workflows, SaaS spend, and operational bottlenecks. 
            </p>
            <div className="space-y-3 text-xs text-slate-300 bg-black/20 p-6 rounded-2xl border border-white/10">
               <p className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} size="xs" /> Includes 1 onsite visit (Washington-Baltimore area).</p>
               <p className="flex items-center gap-2"><FontAwesomeIcon icon={faClock} size="xs" /> $400 per additional onsite visit.</p>
               <p className="flex items-center gap-2"><FontAwesomeIcon icon={faPlaneDeparture} size="xs" /> Travel outside DMV subject to additional fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOURLY EXECUTION */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black dark:text-white uppercase italic tracking-wider">Active Development</h2>
            <p className="text-slate-500 mt-2 text-lg">Direct implementation work for standalone needs or following an audit.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Optimization */}
            <div className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-lg border-b-8 border-v-navy hover:-translate-y-2 transition-transform">
               <h3 className="text-3xl font-bold mb-2 dark:text-white uppercase tracking-tighter">Optimization</h3>
               <p className="text-5xl font-black text-v-green mb-6">$80<span className="text-lg font-medium text-slate-400">/hr</span></p>
               <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                 Fixing and streamlining what you already have. We optimize your current tools to avoid software fatigue.
               </p>
               <div className="p-4 bg-v-navy/5 dark:bg-white/5 border border-v-navy/10 dark:border-white/10 rounded-xl text-v-navy dark:text-v-gold text-sm font-black uppercase tracking-widest">
                 Access to VenData Prebuilt Library included
               </div>
            </div>

            {/* Custom Bridges */}
            <div className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-lg border-b-8 border-v-green hover:-translate-y-2 transition-transform">
               <h3 className="text-3xl font-bold mb-2 dark:text-white uppercase tracking-tighter">Custom Bridging</h3>
               <p className="text-5xl font-black text-v-green mb-6">$110<span className="text-lg font-medium text-slate-400">/hr</span></p>
               <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                 The "Missing Link." Custom code connecting disparate data sources where no pre-built tool exists.
               </p>
               <div className="p-4 bg-v-green/5 dark:bg-white/5 border border-v-green/10 dark:border-white/10 rounded-xl text-v-green text-sm font-black uppercase tracking-widest">
                 Full Source Code & Logic Ownership
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SENTRY: RETAINER & CONTINUITY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Retainer Card */}
          <div className="md:col-span-2 p-12 border-4 border-v-gold/30 rounded-[3rem] bg-v-gold/5 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon icon={faShieldHalved} color="var(--v-gold)" size="lg" />
              <h2 className="text-4xl font-black dark:text-white italic tracking-tighter">The Sentry Retainer</h2>
            </div>
            <p className="text-6xl font-black text-v-navy dark:text-v-gold mb-8">$500<span className="text-xl tracking-normal">/mo</span></p>
            <div className="grid sm:grid-cols-2 gap-8 text-slate-700 dark:text-slate-300">
              <ul className="space-y-4 font-bold">
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm"><FontAwesomeIcon icon={faCircleCheck} size="xs"/> 48hr Response Guarantee</li>
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm"><FontAwesomeIcon icon={faCircleCheck} size="xs"/> New/Beta Prebuilt Tools</li>
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm"><FontAwesomeIcon icon={faCircleCheck} size="xs"/> Waived Strategy & Design Fees</li>
              </ul>
              <p className="text-sm italic leading-relaxed">
                The Sentry reserves our technical bandwidth for your business. Implementation, custom coding, and optimization remain billed at standard hourly rates.
              </p>
            </div>
          </div>

          {/* Error Insurance */}
          <div className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] border border-v-navy/10 flex flex-col justify-center">
            <h4 className="font-bold text-lg mb-4 dark:text-white uppercase tracking-[0.2em] text-xs">Error Policy</h4>
            <p className="text-v-navy dark:text-v-gold font-black text-3xl mb-4">$100 <span className="text-sm text-slate-500 font-normal">Deposit</span></p>
            <p className="text-sm text-slate-500 leading-relaxed italic">
              Investigation fee for breaks. If our logic failed, we fix it at $0 and refund the $100. If outside changes (API updates, human error) caused the break, standard rates apply.
            </p>
          </div>
        </div>
      </section>

      {/* FULL CUSTOM SYSTEMS: ARCHITECTURE */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faMicrochip} color="var(--v-green)" size="lg" className="mb-6" />
            <h2 className="text-5xl md:text-6xl font-black mb-6 italic tracking-tighter">Full Custom Systems</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ground-up application development for complex digital ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Phase 1 */}
            <div className="bg-slate-800 p-10 rounded-[2.5rem] border-l-8 border-v-gold flex flex-col">
              <h3 className="text-v-gold font-black uppercase tracking-[0.2em] text-xs mb-2">Phase 1</h3>
              <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">System Design</h4>
              <p className="text-5xl font-black mb-6 text-v-green font-mono">$500</p>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                A full architectural blueprint including database schema, API logic, and user flows. We define the logic before a single line of code is written.
              </p>
              <p className="text-v-gold text-sm font-black italic border-t border-slate-700 pt-4 uppercase tracking-widest">
                * Waived for Retainer Clients
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-slate-800 p-10 rounded-[2.5rem] border-l-8 border-v-green flex flex-col">
              <h3 className="text-v-green font-black uppercase tracking-[0.2em] text-xs mb-2">Phase 2</h3>
              <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Implementation</h4>
              <p className="text-2xl font-black mb-6 text-slate-400 italic tracking-tighter">Custom Quote</p>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                Development fees are subject to the complexity defined in Phase 1. You receive a fixed-logic proposal based on the blueprint.
              </p>
              <Link to="/consultation" className="text-v-gold hover:text-white transition-colors font-black uppercase text-sm tracking-widest border-b-2 border-v-gold pb-1 inline-block">
                Request Project Consult
              </Link>
            </div>
          </div>
          
          <div className="mt-20 text-center border-t border-slate-800 pt-12">
            <p className="text-slate-500 text-sm max-w-2xl mx-auto italic leading-relaxed">
              New Project Discussions: Free 30-min Consult. <br />
              Repeat inquiries or returning businesses without a retainer: $100 Strategic Policy applies.
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL & LOGIC FOOTER */}
      <section className="py-20 px-6 bg-slate-950 text-slate-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">Ownership & IP</h5>
            <p className="text-xs leading-relaxed">
              Clients own 100% of custom logic and bridges built for their environment. VenData Prebuilt Tools are licensed services; IP remains with VenData Solutions. Clients maintain tool access as long as they cover 3rd party hosting fees.
            </p>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">Maintenance</h5>
            <p className="text-xs leading-relaxed">
              Internal logic failures in VenData proprietary tools are fixed at $0. External outages caused by 3rd party API shifts, hosting failures, or client-side human error are billed at standard hourly rates.
            </p>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">Service Levels</h5>
            <p className="text-xs leading-relaxed">
              "Response" constitutes technical triage and a project timeline. Non-emergency requests are guaranteed 48-hour triage for Retainer holders. Emergency system outages always take immediate priority.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}