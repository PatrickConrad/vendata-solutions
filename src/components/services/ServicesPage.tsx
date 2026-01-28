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
import { StripeBanner } from "../reusable/RevolvingBanner"
import { getIntegrations } from "../../data/integrations"
import { useIsMobile } from "../../hooks/useIsMobile"
import { ScrollLink } from "../reusable/ScrollLink"

export default function Services() {
  const isMobile = useIsMobile(1020);
  return (
    <div className="bg-white dark:bg-slate-900 font-plus-jakarta transition-colors duration-300">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 bg-v-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight italic">
            Logic-First <span className="text-v-green">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6">
            High-impact technical services that save time, reduce errors, and maximize ROI.
          </p>
          <p className="text-sm text-slate-400 italic mb-6">
            <Link 
              to="/services/pricing-policy" 
              className="text-v-gold hover:text-white underline font-bold"
            >
              Learn more about our transparent pricing policy
            </Link>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/services/diagnostics"
              className="btn-gold px-10 py-4 rounded-xl font-black uppercase tracking-tight shadow-xl"
            >
              Work with Vendata
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PRIMARY ENTRY: AUDIT ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">

          {/* PROCESS AUDIT – HERO CARD */}
          <ScrollLink
            to={`/services/diagnostics${isMobile?"#audit-detail":''}`}
            className="lg:col-span-2 p-12 bg-v-navy text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
          >
            <div className="absolute top-6 right-8 text-v-green font-black italic opacity-10 text-5xl uppercase">
              Diagnostic
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon icon={faStethoscope} color="var(--v-green)" size="lg" />
              <h2 className="text-3xl font-black uppercase tracking-tight">
                The Process Audit
              </h2>
            </div>

            <p className="text-5xl font-black text-v-green mb-6">
              $800{" "}
              <span className="text-sm text-slate-400 font-normal uppercase tracking-widest">
                Total
              </span>
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 flex-grow">
              A surgical, on-site analysis of workflows, SaaS spend, and operational
              bottlenecks. This is where most long-term savings and system clarity begin.
            </p>

            <div className="space-y-3 text-xs text-slate-300 bg-black/20 p-6 rounded-2xl border border-white/10">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} size="xs" />
                Includes 1 onsite visit (Washington–Baltimore area)
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} size="xs" />
                $600 per additional onsite visit
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPlaneDeparture} size="xs" />
                Travel outside DMV quoted transparently
              </p>
            </div>

            <p className="mt-8 text-v-green font-black uppercase tracking-widest text-xs">
              Learn how audits amplify operational savings →
            </p>
          </ScrollLink>

          {/* STRATEGIC INVESTIGATION */}
          <ScrollLink
            to={`/services/diagnostics${isMobile?"#investigation-detail":''}`}
            className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 flex flex-col hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} color="var(--v-gold)" size="lg" />
              <h3 className="text-2xl font-bold dark:text-white uppercase tracking-tight">
                Strategic Investigation
              </h3>
            </div>

            <p className="text-4xl font-black text-v-green mb-4">
              $150{" "}
              <span className="text-sm text-slate-400 font-normal uppercase">
                per Request
              </span>
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
              Targeted technical research for specific “Can this be fixed?” or
              “Is this worth automating?” questions — before development spend.
            </p>

            <p className="text-xs uppercase tracking-widest font-black text-slate-400">
              Learn more →
            </p>
          </ScrollLink>
        </div>
      </section>

      {/* ================= ACTIVE DEVELOPMENT ================= */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black dark:text-white uppercase italic tracking-wider">
              Active Development
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              Direct implementation following an audit or for clearly scoped needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* OPTIMIZATION */}
            <Link
              to="/services/optimization"
              className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-lg border-b-8 border-v-navy hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-3xl font-bold mb-2 dark:text-white uppercase tracking-tighter">
                Optimization
              </h3>

              <p className="text-5xl font-black text-v-green mb-6">
                $100<span className="text-lg font-medium text-slate-400">/hr</span>
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Fixing and streamlining what you already have to reduce software fatigue
                and extend system life.
              </p>

              <div className="p-4 bg-v-navy/5 dark:bg-white/5 border border-v-navy/10 dark:border-white/10 rounded-xl text-v-navy dark:text-v-gold text-sm font-black uppercase tracking-widest">
                Access to Vendata Prebuilt Library included
              </div>
            </Link>

            {/* CUSTOM BRIDGING */}
            <Link
              to="/services/customization"
              className="group bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-lg border-b-8 border-v-green hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-3xl font-bold mb-2 dark:text-white uppercase tracking-tighter">
                Customization
              </h3>

              <p className="text-5xl font-black text-v-green mb-6">
                $130<span className="text-lg font-medium text-slate-400">/hr</span>
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Custom logic connecting systems where no prebuilt tool exists.
              </p>

              <div className="p-4 bg-v-green/5 dark:bg-white/5 border border-v-green/10 dark:border-white/10 rounded-xl text-v-green text-sm font-black uppercase tracking-widest">
                Full Source Code & Logic Ownership
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= SENTRY RETAINER ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/services/retainer" className="md:col-span-2 p-12 border-4 border-v-gold/30 rounded-[3rem] bg-v-gold/5 relative overflow-hidden hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <FontAwesomeIcon icon={faShieldHalved} color="var(--v-gold)" size="lg" />
              <h2 className="text-4xl font-black italic tracking-tighter">
                The Sentry Retainer
              </h2>
            </div>

            <p className="text-6xl font-black text-v-navy dark:text-v-gold mb-8">
              $600<span className="text-xl tracking-normal">/mo</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-8 text-slate-700 dark:text-slate-300">
              <ul className="space-y-4 font-bold">
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} size="xs" /> 48hr Response Guarantee
                </li>
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} size="xs" /> New/Beta Prebuilt Tools
                </li>
                <li className="flex gap-2 items-center text-v-green font-black uppercase text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} size="xs" /> Waived Strategy & Design Fees
                </li>
              </ul>

              <p className="text-sm italic leading-relaxed">
                The Sentry reserves our technical bandwidth for your business.
                Implementation, custom coding, and optimization remain billed
                at standard hourly rates.
              </p>
            </div>
          </Link>

          {/* ERROR POLICY */}
          <Link to="/services/error-policy" className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] border border-v-navy/10 flex flex-col justify-center hover:-translate-y-2 transition-transform">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-[0.2em] text-xs">
              Error Policy
            </h4>

            <p className="text-v-navy dark:text-v-gold font-black text-3xl mb-4">
              $100 <span className="text-sm text-slate-500 font-normal">Deposit</span>
            </p>

            <p className="text-sm text-slate-500 leading-relaxed italic">
              Investigation fee for breaks. If our logic failed, we fix it at $0 and
              refund the $100. If outside changes caused the break, standard rates apply.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= FULL CUSTOM SYSTEMS ================= */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faMicrochip} color="var(--v-green)" size="lg" className="mb-6" />
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6">
              Full Custom Systems
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ground-up application development for complex digital ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            <Link to="/services/applications" className="bg-slate-800 p-10 rounded-[2.5rem] border-l-8 border-v-gold flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-v-gold font-black uppercase tracking-[0.2em] text-xs mb-2">
                Phase 1
              </h3>
              <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">
                System Design
              </h4>
              <p className="text-5xl font-black mb-6 text-v-green font-mono">$500</p>
              <p className="text-slate-400 mb-8 flex-grow">
                A full architectural blueprint including database schema,
                API logic, and user flows.
              </p>
              <p className="text-v-gold text-sm font-black italic border-t border-slate-700 pt-4 uppercase tracking-widest">
                * Waived for Retainer Clients
              </p>
            </Link>

            <Link to="/services/applications" className="bg-slate-800 p-10 rounded-[2.5rem] border-l-8 border-v-green flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-v-green font-black uppercase tracking-[0.2em] text-xs mb-2">
                Phase 2
              </h3>
              <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">
                Implementation
              </h4>
              <p className="text-2xl font-black mb-6 text-slate-400 italic tracking-tighter">
                Custom Quote
              </p>
              <p className="text-slate-400 mb-8 flex-grow">
                Development fees follow the complexity defined in Phase 1.
                Fixed-logic proposal provided.
              </p>
              <Link
                to="/consultation"
                search={{service: "custom"}}
                className="text-v-gold hover:text-white transition-colors font-black uppercase text-sm tracking-widest border-b-2 border-v-gold pb-1 inline-block"
              >
                Request Project Consult
              </Link>
            </Link>
          </div>

          <div className="mt-20 text-center border-t border-slate-800 pt-12">
            <p className="text-slate-500 text-sm max-w-2xl mx-auto italic">
              System design does not include $150 investigation fee
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEGAL / OWNERSHIP ================= */}
      <section className="py-20 px-6 bg-slate-950 text-slate-500 border-t border-white/5">
        <div  className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 ">
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">
              Ownership & IP
            </h5>
            <p className="text-xs leading-relaxed">
              Clients own 100% of custom logic and bridges built for their environment.
              Vendata Prebuilt Tools remain licensed services.
            </p>
          </div>

          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">
              Maintenance
            </h5>
            <p className="text-xs leading-relaxed">
              Internal logic failures are fixed at $0. External outages or third-party
              changes are billed at standard rates.
            </p>
          </div>

          <div>
            <h5 className="font-black uppercase text-xs tracking-widest text-v-gold mb-4">
              Service Levels
            </h5>
            <p className="text-xs leading-relaxed">
              Retainer clients receive 48-hour triage. Emergency outages take priority.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
