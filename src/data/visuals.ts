export const serviceVisuals: Record<
  string,
  { src: string; alt: string }
> = {
  "business-websites": {
    src: "/visuals/service-website.jpg",
    alt: "A laptop on a desk showing a clean website layout",
  },
  "product-catalogues": {
    src: "/visuals/service-catalogue.jpg",
    alt: "Retail products arranged for browsing",
  },
  "landing-pages": {
    src: "/visuals/service-landing.jpg",
    alt: "A focused campaign layout on a desk",
  },
  ecommerce: {
    src: "/visuals/service-ecommerce.jpg",
    alt: "A customer checking out with a card",
  },
  "custom-web-apps": {
    src: "/visuals/service-app.jpg",
    alt: "Analytics and product dashboards on screen",
  },
  "ai-automation": {
    src: "/visuals/service-ai.jpg",
    alt: "Abstract light forms suggesting intelligent systems",
  },
};

export const projectVisuals: Record<string, { src: string; alt: string }> = {
  "bloom-and-barrow": {
    src: "/visuals/work-bloom-and-barrow.png",
    alt: "Screenshot of the Bloom & Barrow website homepage",
  },
};

export const storyVisuals = {
  problem: {
    src: "/visuals/story-problem.jpg",
    alt: "A person studying a screen, looking for a clearer next step",
  },
  insight: {
    src: "/visuals/story-insight.jpg",
    alt: "Analytics and a website on a laptop, used to understand a business",
  },
  solution: {
    src: "/visuals/story-solution.jpg",
    alt: "A team shaping a digital product together",
  },
} as const;

export const audienceVisuals: Record<string, { src: string; alt: string }> = {
  local: {
    src: "/visuals/audience-local.jpg",
    alt: "A neighbourhood shop floor with products on display",
  },
  retail: {
    src: "/visuals/audience-retail.jpg",
    alt: "A customer browsing products in a retail store",
  },
  startups: {
    src: "/visuals/audience-startup.jpg",
    alt: "A small team working on a product launch",
  },
  creators: {
    src: "/visuals/audience-creator.jpg",
    alt: "A camera and creative tools used to show a body of work",
  },
  growing: {
    src: "/visuals/audience-growing.jpg",
    alt: "A growing team in a working studio",
  },
};
