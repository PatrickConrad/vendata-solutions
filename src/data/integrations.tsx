export const integrations = {
    vendors: [
        'Adidas',
        "Alphabroder",
        'Asics',
        'Champion',
        'Hummel',
        "Innova",
        "New Balance",
        "Rawlings",
        "S&S",
        "Sanmar"
    ],
    ecommerce: [
        'Amazon',
        "Shopify",
        "eBay",
        'WooCommerce',
        'Skuvault',
        'Flxpoint',
    ],
    management: [
        "GCP",
        "Zapier",
        "Make.com",
        "Sheets",
        "Monday.com",
        "Drive",
        "Salesforce",
    ],
    accounting: [
        "Stripe",
        "Paypal",
        "Quickbooks",
        
    ],
    analysis: [
        "PowerBI",
        "Tableau",
        "Databricks",
        "Snowflake",
    ],
    shippingApps:  [
        "UPS",
        "Fedex",
        "USPS",
        "Shipstation"
    ]
}


export const getIntegrations = (lists?: (keyof typeof integrations)[]) => {
  // 1. If no specific lists are requested, return ALL flattened into one array
  if (!lists || lists.length === 0) {
    return Object.values(integrations).flat().sort(() => Math.random() - 0.5);
  }

  // 2. Map through the requested keys and flatten the resulting arrays
  return lists.flatMap((key) => integrations[key] || []).sort(() => Math.random() - 0.5);
};