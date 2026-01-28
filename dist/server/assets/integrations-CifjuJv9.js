const integrations = {
  vendors: [
    "Adidas",
    "Alphabroder",
    "Asics",
    "Champion",
    "Hummel",
    "Innova",
    "New Balance",
    "Rawlings",
    "S&S",
    "Sanmar"
  ],
  ecommerce: [
    "Amazon",
    "Shopify",
    "eBay",
    "WooCommerce",
    "Skuvault",
    "Flxpoint"
  ],
  management: [
    "GCP",
    "Zapier",
    "Make.com",
    "Sheets",
    "Monday.com",
    "Drive",
    "Salesforce"
  ],
  accounting: [
    "Stripe",
    "PayPal",
    "QuickBooks"
  ],
  analysis: [
    "Power BI",
    "Tableau",
    "Databricks",
    "Snowflake"
  ],
  shippingApps: [
    "UPS",
    "Fedex",
    "USPS",
    "ShipStation"
  ]
};
const getIntegrations = (lists) => {
  {
    return Object.values(integrations).flat().sort(() => Math.random() - 0.5);
  }
};
export {
  getIntegrations as g
};
