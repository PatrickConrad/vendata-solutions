import { Link } from "@tanstack/react-router"
import { Service } from "./Service"

const ApiBridgeTagLine =  <>We connect your tools with <span className="text-v-green font-semibold">seamless integrations</span> that eliminate data silos.</>
const PrecisionAutomationTagLine = <>Replace manual entry with <span className="text-v-green font-semibold">intelligent workflows</span> that never sleep.</>
const actoinableDataTagLine = <>We turn complex datasets into <span className="text-v-green font-semibold">simple insights</span> that drive revenue.</>
const customResourcesTagLine = <>Built-to-order infrastructure that <span className="text-v-green font-semibold">fits like a glove</span>.</>

const ApiBridgeModal = <div className="min-h-20">Built-to-order infrastructure that <span className="text-v-green font-semibold">fits like a glove</span>.</div>
const PrecisionAutomationModal = <div className="min-h-80">l-to-order infrastructure that <span className="text-v-green font-semibold">fits like a glove</span>.</div>
const actoinableDataModal= <div className="min-h-20">k-to-order infrastructure that <span className="text-v-green font-semibold">fits like a glove</span>.</div>
const customResourcesModal = <div className="min-h-20">b-to-order infrastructure that <span className="text-v-green font-semibold">fits like a glove</span>.</div>


const services = [
    {
        title: "API Bridging",
        shortDesc: <>We connect your tools with <span className="text-v-green font-semibold">seamless integrations</span> that eliminate data silos.</>,
        longDesc: (
            <>
                <p>
                    We create custom bridges between your software systems, enabling them to communicate seamlessly.
                </p>
                <p>
                    Automate data flows, sync platforms, and eliminate manual hand-offs between tools that weren’t designed to work together.
                </p>
                <p>
                    Perfect for organizations looking to unify their tech stack and increase operational efficiency.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Connected nodes / API */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M8 6v12m8-12v12"/>
            </svg>
        )
    },
    {
        title: "Precision Automation",
        shortDesc: <>Replace manual entry with <span className="text-v-green font-semibold">intelligent workflows</span> that never sleep.</>,
        longDesc: (
            <>
                <p>
                Automate repetitive tasks and streamline workflows so your team can focus on what matters most.
                </p>
                <p>
                Our solutions remove human error, reduce bottlenecks, and increase overall efficiency.
                </p>
                <p>
                Perfect for businesses looking to save time and scale operations without adding headcount.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Actionable Data",
        shortDesc: <>We turn complex datasets into <span className="text-v-green font-semibold">simple insights</span> that drive revenue.</>,
        longDesc: (
            <>
                <p>
                We take your raw data and transform it into easy-to-understand dashboards and reports.
                </p>
                <p>
                By highlighting trends, anomalies, and opportunities, your team can make informed, data-driven decisions.
                </p>
                <p>
                Ideal for organizations that want clarity, control, and insight into their operations.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
        )
    },
    {
        title: "Custom ERP/CRM",
        shortDesc: <>We connect your tools with <span className="text-v-green font-semibold">seamless integrations</span> that eliminate data silos.</>,
        longDesc: (
            <>
                <p>
                Built-to-order infrastructure that fits your operations like a glove.
                </p>
                <p>
                Automate workflows, track customer relationships, and manage internal processes seamlessly.
                </p>
                <p>
                Perfect for businesses who need software that matches their exact needs.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
        )
    },
    {
        title: "Process Assessment",
        shortDesc: <>Identify <span className="text-v-green font-semibold">bottlenecks</span> and improve efficiency. </>,
        longDesc: (
            <>
                <p>
                Built-to-order infrastructure that fits your operations like a glove.
                </p>
                <p>
                Automate workflows, track customer relationships, and manage internal processes seamlessly.
                </p>
                <p>
                Perfect for businesses who need software that matches their exact needs.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Gear / workflow analysis */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v4M4.22 4.22l2.83 2.83M1 12h4M4.22 19.78l2.83-2.83M12 19v4M19.78 19.78l-2.83-2.83M20 12h-4M19.78 4.22l-2.83 2.83M12 7a5 5 0 100 10 5 5 0 000-10z"/>
            </svg>
        )
    },
    {
        title: "SaaS Integration & Tooling",
        shortDesc: <>Connect SaaS tools and <span className="text-v-green font-semibold">enhance existing systems.</span></>,
        longDesc: (
            <>
                <p>
                We review your existing workflows to identify inefficiencies and bottlenecks.
                </p>
                <p>
                Our detailed analysis uncovers opportunities to streamline operations, improve collaboration, and reduce wasted effort.
                </p>
                <p>
                Ideal for businesses preparing for scaling or digital transformation.
                </p>
            </>
        ),
        icon: (
            <svg className="w-8 h-8 text-v-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Connected nodes / integration */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-4-4h8m-6 4h4m-6-8h8M6 6h12M6 18h12"/>
            </svg>
        )
    }
]





export const Services = (props: Record<string, unknown>) => {
  
    return(
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        services.map((service)=>(
                            <Service key={service.title} modal={service.longDesc} title={service.title} tagLine={service.shortDesc} icon={service.icon} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
