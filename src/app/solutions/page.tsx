import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { IntentSolutions } from "@/components/sections/intent-solutions";
import { SolutionsTabs } from "@/components/sections/solutions-tabs";
import { WhoWeBuildFor } from "@/components/sections/who-we-build-for";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Find the Lumis starting point for local businesses, retail, startups, creators and growing companies.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-24 pb-8 sm:pt-32">
        <Container>
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="max-w-[18ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            Built around the problem, not a generic website package.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Name the job. We&apos;ll name the build.
          </p>
        </Container>
      </Section>
      <IntentSolutions />
      <WhoWeBuildFor />
      <SolutionsTabs />
      <FinalCta />
    </>
  );
}
