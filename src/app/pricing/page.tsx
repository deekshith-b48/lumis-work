import type { Metadata } from "next";
import { AddOnsMenu, CarePlans, RecurringCosts } from "@/components/sections/addons-and-care";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { PlanFit } from "@/components/pricing/plan-fit";
import { UpgradePath } from "@/components/pricing/upgrade-path";
import { ValueCards } from "@/components/pricing/value-cards";
import { PricingCatalogue, PricingClose } from "@/components/sections/pricing-catalogue";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start at ₹18,999. Presence, discovery, intelligence, then commerce. Each plan includes everything below it.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-24 pb-8 sm:pt-32">
        <Container>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="max-w-[18ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            Start with what you need. Scale when you&apos;re ready.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Every Lumis plan is designed as a starting point—not a limitation.
            Begin with the features your business needs today and add more
            capability as you grow.
          </p>
        </Container>
      </Section>
      <PricingCatalogue showIntro={false} />
      <FeatureHighlights />
      <UpgradePath />
      <FeatureComparison />
      <PlanFit />
      <ValueCards />
      <AddOnsMenu />
      <RecurringCosts />
      <CarePlans />
      <PricingClose />
    </>
  );
}
