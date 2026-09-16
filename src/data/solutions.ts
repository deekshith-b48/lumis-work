export type Solution = {
  id: string;
  title: string;
  audience: string;
  promise: string[];
  solution: string;
};

export const solutions: Solution[] = [
  {
    id: "local",
    title: "Local business",
    audience: "Shops, clinics, studios and neighbourhood brands.",
    promise: ["Get discovered.", "Build trust.", "Generate enquiries."],
    solution: "Business website + catalogue + WhatsApp + Google presence",
  },
  {
    id: "retail",
    title: "Retail",
    audience: "Stores that need customers to browse before they visit.",
    promise: ["Showcase products.", "Promote offers.", "Bring customers to your store."],
    solution: "Digital catalogue + search + filters + promotions",
  },
  {
    id: "startups",
    title: "Startup",
    audience: "Teams that need to look ready before the product is finished.",
    promise: ["Validate the idea.", "Launch quickly.", "Build credibility."],
    solution: "Landing page + MVP + analytics + a foundation that can grow",
  },
  {
    id: "creators",
    title: "Creator",
    audience: "People building a name and a pipeline of opportunities.",
    promise: ["Build your identity.", "Show your work.", "Generate opportunities."],
    solution: "Personal website + portfolio + enquiry system",
  },
  {
    id: "growing",
    title: "Growing business",
    audience: "Operators who have outgrown a simple brochure site.",
    promise: ["Improve operations.", "Automate workflows.", "Build custom tools."],
    solution: "Custom platform + automation + a clearer customer journey",
  },
];

export const intents = [
  {
    need: "I need customers to find my business.",
    result: "Business Website",
    href: "/services#business-websites",
  },
  {
    need: "I want customers to browse my products.",
    result: "Digital Catalogue",
    href: "/services#product-catalogues",
  },
  {
    need: "I want to start selling online.",
    result: "Ecommerce",
    href: "/services#ecommerce",
  },
  {
    need: "I need a custom system.",
    result: "Custom Web App",
    href: "/services#custom-web-apps",
  },
  {
    need: "I want to automate repetitive work.",
    result: "AI & Automation",
    href: "/services#ai-automation",
  },
];
