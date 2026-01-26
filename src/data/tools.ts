export type Tool = {
  name: string;
  description: string;
  tech: string[];
};

export const tools: Tool[] = [
  {
    name: "E-commerce API Automation",
    description:
      "Integrate and automate Shopify, eBay, Amazon, Shipstation, and WooCommerce APIs for faster updates, inventory management, and operational control.",
    tech: ["Python", "Node.js", "GraphQL", "Redis", "Postgres", "TypeScript"],
  },
  {
    name: "Document & Media Extraction",
    description:
      "Automate CSV, PDF, and image extraction to quickly process data, generate reports, and streamline content workflows.",
    tech: ["Python", "Node.js", "TypeScript"],
  },
  {
    name: "Enterprise File & Data Transfer",
    description:
      "Connect FTP, EDI, and PromoStandards systems to automate file transfers, sync business data, and reduce manual overhead.",
    tech: ["Python", "Node.js", "TypeScript"],
  },
  {
    name: "Cloud Collaboration Connectors",
    description:
      "Seamlessly integrate Google Drive and Monday.com to centralize project management, file access, and workflow automation.",
    tech: ["Python", "Node.js", "TypeScript"],
  },
  {
    name: "Browser Control & Company Dashboards",
    description:
      "Custom Chrome/Edge extensions that provide full browser control and serve as company dashboards with data insights, powered by Postgres, Python, Node.js, and React.",
    tech: ["Node.js", "React", "Python", "Postgres"],
  },
  {
    name: "Industry Grade Data Scraping",
    description:
      "The edge you need to stay ahead of the competition. Our enterprise level data extraction techniques and tools breakdown barriers, provide insights, and give back full control of your time.",
    tech: ["Python", "Playwright", "TypeScript", 'Node.js'],
  },
  {
    name: "Smart AI Workflow Integration",
    description:
      "Use AI to speed up non-critical workflows, suggest optimizations, and reduce repetitive decision-making so your team can focus on strategic work.",
    tech: ["Python", "Node.js", "AI/ML", "React", "TypeScript"],
  },
];