import { ConnectedOperationsServiceBody, InsightfulIntelligenceServiceBody, ProcessClarityServiceBody, PurposeBuiltSolutionsServiceBody, SmartAutomationServiceBody, SystemHarmonyServiceBody } from "../components/services";
import { EyeIcon, NexusIcon, MusicalNotesIcon, PlayButtonIcon, TargetIcon, ProcessAuditIcon, GraphIcon } from "../svg/icons";

export const services = {
  processAssessment: {
    title: "Business Process Clarity",
    shortDesc: <>Identify <span className="text-v-green font-semibold">friction points and bottlenecks</span> in order to better optimize efficiency.</>,
    modal: <ProcessClarityServiceBody />,
    icon: <EyeIcon color="var(--v-green)" />
  },
  actionableData: {
    title: "Insightful Intelligence",
    shortDesc: <>Turn complex datasets into <span className="text-v-green font-semibold">actionable insights</span> that reveal hidden opportunities and threats before anyone else sees them.</>,
    modal: <InsightfulIntelligenceServiceBody />,
    icon: <GraphIcon />
  },
  integrationEnhancement: {
    title: "Seamless System Harmony",
    shortDesc: <>Make your existing tools work together without friction, <span className="text-v-green font-semibold">streamline operations</span> and cut through software chaos.</>,
    modal: <SystemHarmonyServiceBody />,
    icon: <MusicalNotesIcon color="var(--v-gold)" />
  },
  apiBridging: {
    title: "Connected Operations",
    shortDesc: <>Bridge <span className="text-v-green font-semibold">disconnected systems</span> and reduce redundency so your business moves fast, coordinated, and precise.</>,
    modal: <ConnectedOperationsServiceBody />,
    icon: <NexusIcon color="var(--v-green)" />
  },
  automation: {
    title: "Smart Automation",
    shortDesc: <>Automate repetitive workflows and <span className="text-v-green font-semibold">reclaim your team’s time</span>; work smarter, not harder.</>,
    modal: <SmartAutomationServiceBody />,
    icon: <PlayButtonIcon />
  },
  solutions: {
    title: "Purpose-Built Solutions",
    shortDesc: <>Build only the tools you truly need - lean, high-impact solutions that <span className="text-v-green font-semibold">solve real business problems.</span></>,
    modal: <PurposeBuiltSolutionsServiceBody />,
    icon: <TargetIcon  color="var(--v-gold)"/>
  }
}