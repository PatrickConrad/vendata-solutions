import { faDatabase, faGears, faMap, faPencilSquare, faPlay, faStream, faTools } from "@fortawesome/free-solid-svg-icons";
import { 
  ConnectedOperationsServiceBody, 
  InsightfulIntelligenceServiceBody, 
  ProcessClarityServiceBody, 
  PurposeBuiltSolutionsServiceBody, 
  SmartAutomationServiceBody, 
  SystemHarmonyServiceBody 
} from "../components/services";

import { EyeIcon, NexusIcon, MusicalNotesIcon, PlayButtonIcon, TargetIcon, GraphIcon } from "../svg/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const services = {
  businessAnalysis: {
    title: "Business Analysis & Audits",
    shortDesc: <>Identify <span className="text-v-green font-semibold">bottlenecks, inefficiencies, and friction points</span> before they slow your team down.</>,
    modal: <ProcessClarityServiceBody />,
    icon: <FontAwesomeIcon icon={faPencilSquare} size="2xl" color="var(--v-green)" />,
    link: '/services/diagnostics'
  },

  advisoryStrategy: {
    title: "Advisory & Strategy",
    shortDesc: <>Act as your technical advisor — <span className="text-v-green font-semibold">validate SaaS, assess requirements, and optimize team workflow</span>.</>,
    modal: <InsightfulIntelligenceServiceBody />,
    icon: <FontAwesomeIcon icon={faMap} size="2xl" color="slate-50"/>,
    link: '/services/diagnostics'
  },

  saasOptimization: {
    title: "SaaS & Process Optimization",
    shortDesc: <>Fully leverage the <span className="text-v-green font-semibold">technology you already use</span> and improve operational efficiency.</>,
    modal: <SystemHarmonyServiceBody />,
    icon: <FontAwesomeIcon icon={faGears} size="2xl" color="var(--v-gold)" />,
    link: '/services/optimization'
  },

  prebuiltBridging: {
    title: "Prebuilt Tools & Bridging",
    shortDesc: <>Flexible prebuilt solutions to <span className="text-v-green font-semibold">fill gaps and reduce manual work</span>.</>,
    modal: <ConnectedOperationsServiceBody />,
    icon:<FontAwesomeIcon icon={faTools} size="2xl" color="var(--v-green)" />,
    link: '/toolbox'
  },

  automationIntegration: {
    title: "Custom Automation & Integration",
    shortDesc: <>Automate workflows and <span className="text-v-green font-semibold">connect disparate systems</span> to scale operations and save time.</>,
    modal: <SmartAutomationServiceBody />,
    icon: <FontAwesomeIcon icon={faPlay} size="2xl" color="slate-50"/>,
    link: '/services/customization'
  },

  fullAppDevelopment: {
    title: "Full Application & Web Development",
    shortDesc: <>Build <span className="text-v-green font-semibold">custom apps and platforms</span> to unlock growth and operational excellence.</>,
    modal: <PurposeBuiltSolutionsServiceBody />,
    icon: <FontAwesomeIcon icon={faDatabase} size="2xl" color="var(--v-gold)"/>,
    link: '/services/applications'
  }
}
