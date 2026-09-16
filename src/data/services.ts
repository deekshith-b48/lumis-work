export type Service = {
  id: string;
  number: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  problem: string;
  solution: string;
  startingPrice: string;
  startingAmount: number;
  features: string[];
  whoFor: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: "business-websites",
    number: "01",
    slug: "business-websites",
    title: "Business Websites",
    headline: "A first impression that matches the quality of your work.",
    description:
      "A clear, credible website so customers know who you are, what you offer, and how to reach you.",
    problem:
      "People search for you, land on something outdated or unclear, and leave without getting in touch.",
    solution:
      "A mobile-first business site with the pages that matter, a direct enquiry path, and room to grow later.",
    startingPrice: "₹18,999",
    startingAmount: 18999,
    features: [
      "Home, about and contact",
      "Mobile-first layout",
      "WhatsApp and call",
      "Google Maps",
      "Basic SEO",
      "Analytics",
    ],
    whoFor: ["Local businesses", "Studios", "Clinics", "Professional services"],
    cta: "Build My Website",
  },
  {
    id: "product-catalogues",
    number: "02",
    slug: "product-catalogues",
    title: "Product Catalogues",
    headline: "Turn your product range into a digital storefront.",
    description:
      "Customers browse, compare and enquire before they visit — instead of guessing what you stock.",
    problem:
      "People can't see what you sell until they walk in. That means fewer visits and more basic questions.",
    solution:
      "A fast catalogue with categories, details, offers and WhatsApp — built for phones first.",
    startingPrice: "₹18,999",
    startingAmount: 18999,
    features: [
      "Product discovery",
      "Categories",
      "Search and filters",
      "Offers",
      "WhatsApp enquiries",
      "Store location",
    ],
    whoFor: [
      "Retail stores",
      "Nutrition stores",
      "Fashion businesses",
      "Electronics stores",
      "Local brands",
    ],
    cta: "Explore Product Catalogue",
  },
  {
    id: "landing-pages",
    number: "03",
    slug: "landing-pages",
    title: "Landing Pages",
    headline: "One page. One offer. One clear next step.",
    description:
      "A focused page for a launch, campaign or waitlist — without the clutter of a full website.",
    problem:
      "Campaigns send people to a homepage that tries to say everything, so they do nothing.",
    solution:
      "A single-purpose page that explains the offer, answers the obvious questions, and captures the lead.",
    startingPrice: "₹9,999",
    startingAmount: 9999,
    features: [
      "Clear offer hierarchy",
      "Lead capture",
      "WhatsApp or call",
      "Campaign sections",
      "Analytics",
    ],
    whoFor: ["Launches", "Offers", "Waitlists", "Founders testing an idea"],
    cta: "Start a Landing Page",
  },
  {
    id: "ecommerce",
    number: "04",
    slug: "ecommerce",
    title: "Ecommerce",
    headline: "Sell online without losing the feel of your brand.",
    description:
      "Catalogue, cart, checkout, payments and orders — so customers can buy the way they already expect to.",
    problem:
      "You are ready to take orders, but a catalogue-only site still sends people to WhatsApp for every purchase.",
    solution:
      "A complete store with payments, fulfilment settings and order handling, built on the same foundation as earlier packages.",
    startingPrice: "₹49,999",
    startingAmount: 49999,
    features: [
      "Cart and checkout",
      "Online payments",
      "Order management",
      "Delivery zones",
      "Customer accounts",
      "Inventory",
    ],
    whoFor: ["Brands ready to sell online", "Retail expanding beyond the shop"],
    cta: "Take My Business Online",
  },
  {
    id: "custom-web-apps",
    number: "05",
    slug: "custom-web-apps",
    title: "Custom Web Apps",
    headline: "When a website isn't the product — the product is.",
    description:
      "Booking tools, dashboards, internal systems and MVPs shaped around how your business actually works.",
    problem:
      "Spreadsheets, chats and generic tools are holding together a process that needs its own system.",
    solution:
      "We define the workflow, design the experience, then build only what the operation needs to run.",
    startingPrice: "₹35,000+",
    startingAmount: 35000,
    features: [
      "Product definition",
      "Custom interface",
      "Login and roles",
      "Dashboards",
      "Integrations",
      "Room to expand",
    ],
    whoFor: ["Founders", "Operators", "Teams with unique workflows"],
    cta: "Let's Talk About Your Idea",
  },
  {
    id: "ai-automation",
    number: "06",
    slug: "ai-automation",
    title: "AI & Automation",
    headline: "Give repetitive work a system, not another tab.",
    description:
      "Assistants, workflows and intelligent tools that take routine tasks off your team's plate.",
    problem:
      "The same questions, updates and follow-ups keep eating hours that should go to the actual business.",
    solution:
      "We map the repetitive work, then add AI or automation where it is reliable — with a person still in control.",
    startingPrice: "₹25,000+",
    startingAmount: 25000,
    features: [
      "Workflow mapping",
      "Assistants",
      "Lead qualification",
      "Internal tools",
      "Human-in-the-loop",
    ],
    whoFor: ["Teams drowning in repetitive work", "Businesses with high enquiry volume"],
    cta: "Explore AI Solutions",
  },
];
