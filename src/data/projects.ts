export type Project = {
  slug: string;
  name: string;
  industry: string;
  url?: string;
  business: string;
  challenge: string;
  approach: string;
  solution: string;
  experience: string;
  features: string[];
  technology: string[];
  objective: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "bloom-and-barrow",
    name: "Bloom & Barrow",
    industry: "Farm / Skincare",
    url: "https://bloom-and-barrow.vercel.app/",
    business:
      "A family farm making goat milk soap, candles and care products by hand.",
    challenge:
      "The brand needed a digital storefront that felt as considered as the product — not a generic template shop.",
    approach:
      "Lead with the farm story, then let people browse by product type and scent family before they buy.",
    solution:
      "A branded ecommerce experience: catalogue, collections, product pages and a path from browse to purchase.",
    experience:
      "Customers meet the brand, understand what is handmade, find a scent or product, and know what to do next.",
    features: [
      "Brand storytelling",
      "Product catalogue",
      "Scent families",
      "Category collections",
      "Product pages",
      "Mobile-first shopping",
    ],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    objective:
      "Give a farm-crafted skincare brand a polished place online where customers can discover products before they buy.",
    year: "2026",
  },
];
