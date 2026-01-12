import { faBridge, faBullseye, faCircleNodes, faHammer, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ApiBridgingServiceBody } from "../components/services/ApiBridging";
import { ServiceIcon } from "../components/services/ServiceIcon";
import { PrecisionAutomationServiceBody } from "../components/services/PrecisionAutomation";
import { ActionableDataServiceBody } from "../components/services/ActionableData";
import { CustomServiceBody } from "../components/services/CustomService";
import { ProcessAssessmentServiceBody } from "../components/services/ProcessAssessment";
import { IntegrationsServiceBody } from "../components/services/IntegrationsService";

export const services = {
    apiBriding: {
        title: "API Bridging",
        shortDesc: <>We connect your tools with <span className="text-v-green font-semibold">seamless integrations</span> that eliminate data silos.</>,
        modal: <ApiBridgingServiceBody />,
        icon: <ServiceIcon icon={faBridge} />
    },
    precisionAutomation: {
        title: "Precision Automation",
        shortDesc: <>Replace manual entry with <span className="text-v-green font-semibold">intelligent workflows</span> that never sleep.</>,
        modal: <PrecisionAutomationServiceBody />,
        icon: <ServiceIcon icon={faBullseye} color="var(--v-green)"/>
    },
    actionableData: {
        title: "Actionable Data",
        shortDesc: <>We turn complex datasets into <span className="text-v-green font-semibold">simple insights</span> that drive revenue.</>,
        modal: <ActionableDataServiceBody />,
        icon: (
            <svg className="w-8 h-8 text-v-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
        )
    },
    customResource: {
        title: "Custom ERP/CRM",
        shortDesc: <>We build <span className="text-v-green font-semibold">custom ERP and CRM systems</span> that unify your operations and eliminate data silos.</>,
        modal: <CustomServiceBody />,
        icon: <ServiceIcon icon={faHammer} />
    },
    processAssesment: {
        title: "Process Assessment",
        shortDesc: <>Identify <span className="text-v-green font-semibold">bottlenecks</span> and improve efficiency. </>,
        modal: <ProcessAssessmentServiceBody />,
        icon: <ServiceIcon icon={faPenToSquare} color='var(--v-green)'/>
    },
    integrationEnhancement: {
        title: "Integration Enhancement",
        shortDesc: <>Connect SaaS tools and <span className="text-v-green font-semibold">enhance existing systems.</span></>,
        modal: <IntegrationsServiceBody />,
        icon: <ServiceIcon icon={faCircleNodes}  color='var(--v-gold)'/>
    }
}