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


export const Services = (props: Record<string, unknown>) => {
  
    return(
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <Service modalText={ApiBridgeModal} title="API Bridging" tagLine={ApiBridgeTagLine}/>
                    <Service modalText={PrecisionAutomationModal} title="Precision Automation" tagLine={PrecisionAutomationTagLine}/>
                    <Service modalText={actoinableDataModal} title="Actionable Data" tagLine={actoinableDataTagLine}/>
                    <Service modalText={customResourcesModal} title="Custom Resources" tagLine={customResourcesTagLine}/>
                </div>
            </div>
        </section>
    )
}
