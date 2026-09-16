export type PlanId = "basic" | "intermediate" | "advanced" | "pro";

export type FeatureGroup = {
  title: string;
  items: string[];
};

export type PricingPlan = {
  id: PlanId;
  name: string;
  price: string;
  amount: number;
  essence: string;
  journey: string;
  promise: string;
  summary: string;
  cta: string;
  badge?: string;
  popular?: boolean;
  inheritsFrom?: string;
  callout?: string;
  bestFor?: string;
  increment?: number;
  groups: FeatureGroup[];
  added: string[];
  valueTitle: string;
  valueItems: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₹18,999",
    amount: 18999,
    essence: "Presence",
    journey: "Start",
    promise: "Get your business online professionally.",
    summary: "Core online presence",
    cta: "Start with Basic",
    bestFor: "Best for businesses that need a professional online presence.",
    added: ["Core website", "Catalogue up to 30", "WhatsApp", "Maps"],
    valueTitle: "Online presence",
    valueItems: ["Website", "Catalogue", "WhatsApp", "Location"],
    groups: [
      {
        title: "Core website",
        items: [
          "Responsive website",
          "Premium UI/UX",
          "Home page",
          "About page",
          "Contact page",
        ],
      },
      {
        title: "Catalogue",
        items: ["Up to 30 products", "Product categories", "Product detail pages"],
      },
      {
        title: "Customer connection",
        items: [
          "WhatsApp enquiry",
          "Direct call button",
          "Google Maps",
          "Store information",
          "Social media links",
        ],
      },
      {
        title: "Foundation",
        items: ["Mobile-first design", "Basic SEO", "Basic analytics"],
      },
    ],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    price: "₹26,999",
    amount: 26999,
    essence: "Discovery",
    journey: "Grow",
    promise: "Help customers discover what you offer.",
    summary: "Everything in Basic + product discovery",
    cta: "Choose Intermediate",
    inheritsFrom: "Basic",
    increment: 8000,
    callout:
      "Everything in Basic + a better way for customers to discover your products.",
    added: ["Search", "Filters", "Deals", "Reviews", "Advanced catalogue", "Analytics"],
    valueTitle: "Product discovery",
    valueItems: ["Everything in Basic", "Search", "Filters", "Deals", "Reviews"],
    groups: [
      {
        title: "Catalogue upgrade",
        items: [
          "Up to 100 products",
          "Advanced categories",
          "Product search",
          "Product filters",
          "Brand filtering",
          "Price filtering",
        ],
      },
      {
        title: "Discovery",
        items: ["Featured products", "Best sellers", "New arrivals", "Offers & deals"],
      },
      {
        title: "Trust",
        items: [
          "Customer reviews",
          "Enhanced product pages",
          "Instagram integration",
        ],
      },
      {
        title: "Insights",
        items: ["Standard SEO", "Detailed analytics", "Basic admin panel"],
      },
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "₹35,999",
    amount: 35999,
    essence: "Intelligence",
    journey: "Optimize",
    promise: "Turn your website into a smarter business tool.",
    summary: "Everything in Intermediate + advanced business tools",
    cta: "Choose Advanced",
    inheritsFrom: "Intermediate",
    popular: true,
    badge: "Most Popular",
    increment: 9000,
    callout:
      "Everything in Intermediate + tools that make your digital storefront smarter.",
    added: [
      "Product comparison",
      "Product finder",
      "Stack builder",
      "Admin dashboard",
      "Lead tracking",
      "Advanced analytics",
    ],
    valueTitle: "Smart storefront",
    valueItems: [
      "Everything in Intermediate",
      "Comparison",
      "Finder",
      "Bundles",
      "Analytics",
      "Admin",
    ],
    groups: [
      {
        title: "Catalogue",
        items: ["Up to 250 products", "Advanced product management"],
      },
      {
        title: "Smart discovery",
        items: [
          "Product comparison",
          "Product / supplement finder",
          "Smart product recommendations",
          "Stack / bundle builder",
        ],
      },
      {
        title: "Business tools",
        items: [
          "Advanced admin dashboard",
          "Inventory availability",
          "Lead capture",
          "WhatsApp enquiry tracking",
        ],
      },
      {
        title: "Content",
        items: ["Blog / educational content", "Custom content sections"],
      },
      {
        title: "Analytics",
        items: [
          "Advanced analytics dashboard",
          "Product interest tracking",
          "Enquiry insights",
        ],
      },
      {
        title: "Growth",
        items: ["Advanced SEO", "Priority support"],
      },
    ],
  },
  {
    id: "pro",
    name: "Advanced Pro",
    price: "₹49,999",
    amount: 49999,
    essence: "Commerce",
    journey: "Scale",
    promise: "Sell online with a complete digital store.",
    summary: "Everything in Advanced + complete ecommerce",
    cta: "Build My Online Store",
    inheritsFrom: "Advanced",
    badge: "Complete Online Store",
    increment: 14000,
    callout:
      "Everything in Advanced + the infrastructure to accept and manage online orders.",
    added: [
      "Cart",
      "Checkout",
      "Payments",
      "Orders",
      "Delivery",
      "Coupons",
      "Customer accounts",
    ],
    valueTitle: "Online commerce",
    valueItems: ["Everything in Advanced", "Cart", "Payments", "Orders", "Delivery"],
    groups: [
      {
        title: "Ecommerce",
        items: [
          "Customer accounts",
          "Shopping cart",
          "Wishlist",
          "Checkout",
          "Online ordering",
        ],
      },
      {
        title: "Payments",
        items: [
          "Razorpay integration",
          "UPI",
          "Cards",
          "Supported payment methods",
          "Cash on Delivery",
        ],
      },
      {
        title: "Orders",
        items: [
          "Order management",
          "Order status",
          "Customer order history",
          "Order notifications",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Delivery zones",
          "Shipping charges",
          "Local delivery configuration",
          "Store pickup option",
        ],
      },
      {
        title: "Management",
        items: [
          "Ecommerce inventory",
          "Coupons",
          "Ecommerce analytics",
          "Customer management",
        ],
      },
    ],
  },
];

export const comparisonGroups: {
  title: string;
  rows: { feature: string; plans: Record<PlanId, boolean | string> }[];
}[] = [
  {
    title: "Website",
    rows: [
      { feature: "Responsive design", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Premium UI/UX", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Core pages", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Mobile optimization", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Performance optimization", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
    ],
  },
  {
    title: "Product catalogue",
    rows: [
      { feature: "Product limit", plans: { basic: "30", intermediate: "100", advanced: "250", pro: "250+" } },
      { feature: "Categories", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Product pages", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Search", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Filters", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Brand filter", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Price filter", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Featured products", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Offers", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Reviews", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
    ],
  },
  {
    title: "Customer experience",
    rows: [
      { feature: "WhatsApp", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Call", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Google Maps", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Instagram", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Product comparison", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Product finder", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Stack builder", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
    ],
  },
  {
    title: "Management",
    rows: [
      { feature: "Admin dashboard", plans: { basic: false, intermediate: "Basic", advanced: "Advanced", pro: "Advanced" } },
      { feature: "Product management", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Inventory status", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Lead management", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Analytics", plans: { basic: "Basic", intermediate: "Detailed", advanced: "Advanced", pro: "Ecommerce" } },
      { feature: "Enquiry tracking", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
    ],
  },
  {
    title: "Content & SEO",
    rows: [
      { feature: "Basic SEO", plans: { basic: true, intermediate: true, advanced: true, pro: true } },
      { feature: "Standard SEO", plans: { basic: false, intermediate: true, advanced: true, pro: true } },
      { feature: "Advanced SEO", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Blog", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
      { feature: "Custom content sections", plans: { basic: false, intermediate: false, advanced: true, pro: true } },
    ],
  },
  {
    title: "Ecommerce",
    rows: [
      { feature: "Customer accounts", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Wishlist", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Cart", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Checkout", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Online payment", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "COD", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Coupons", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Order management", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Order history", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Delivery zones", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
      { feature: "Shipping configuration", plans: { basic: false, intermediate: false, advanced: false, pro: true } },
    ],
  },
];

export const planFit = [
  {
    id: "basic" as PlanId,
    question: "I just need a professional website.",
  },
  {
    id: "intermediate" as PlanId,
    question: "I want customers to browse my products.",
  },
  {
    id: "advanced" as PlanId,
    question: "I want a smarter digital storefront.",
  },
  {
    id: "pro" as PlanId,
    question: "I want customers to order online.",
  },
];

export const recurringCosts = [
  {
    name: "Domain & hosting",
    note: "Annual renewal depending on provider.",
  },
  {
    name: "Payment gateway",
    note: "Transaction fees charged by the payment provider.",
  },
  {
    name: "Shipping",
    note: "Courier / logistics charges based on actual orders.",
  },
  {
    name: "Messaging",
    note: "WhatsApp/SMS services may have separate charges depending on provider and usage.",
  },
  {
    name: "Maintenance",
    note: "Optional ongoing support plans.",
  },
];

export const addOns = [
  { name: "Product Uploads", price: "₹30–₹50 / product" },
  { name: "Product Photography", price: "₹100–₹250 / product" },
  { name: "Extra Page", price: "₹1,000–₹2,000" },
  { name: "Advanced SEO", price: "₹5,000+" },
  { name: "Logo / Brand Refresh", price: "₹2,000–₹5,000" },
  { name: "Monthly Maintenance", price: "₹1,500–₹3,000" },
  { name: "Custom Features", price: "Custom quote" },
];

export const carePlans = [
  {
    name: "Website Care",
    price: "₹2,999/year",
    includes: ["Hosting", "SSL", "Backups", "Security", "Minor fixes"],
  },
  {
    name: "Business Care",
    price: "₹7,999/year",
    includes: [
      "Everything above",
      "Product updates",
      "Content updates",
      "Analytics",
      "Minor improvements",
    ],
  },
  {
    name: "Growth Care",
    price: "₹14,999/year",
    includes: [
      "Everything above",
      "SEO maintenance",
      "Performance optimization",
      "New sections",
      "Priority support",
    ],
  },
];
