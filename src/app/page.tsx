import { Hero } from "@/components/home/hero";
import { CuriosityRail } from "@/components/home/curiosity-rail";
import { StoryArc } from "@/components/home/story-arc";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { FindMySolution } from "@/components/sections/find-my-solution";
import { IntentSolutions } from "@/components/sections/intent-solutions";
import { PricingCatalogue } from "@/components/sections/pricing-catalogue";
import { ServicesCatalogue } from "@/components/sections/services-catalogue";
import { WhoWeBuildFor } from "@/components/sections/who-we-build-for";
import { WorkGrid } from "@/components/sections/work-grid";

export default function Home() {
  return (
    <>
      <Hero />
      <CuriosityRail />
      <WorkGrid />
      <StoryArc />
      <WhoWeBuildFor />
      <IntentSolutions />
      <ServicesCatalogue compact />
      <PricingCatalogue />
      <FindMySolution />
      <FaqSection />
      <FinalCta />
    </>
  );
}
