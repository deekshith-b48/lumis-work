import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { WorkGrid } from "@/components/sections/work-grid";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Lumis projects — catalogues, launches, ecommerce and digital products. Objectives, not invented metrics.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-24 pb-8 sm:pt-32">
        <Container>
          <Eyebrow>Work</Eyebrow>
          <h1 className="max-w-[16ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            One live project. Judge the work.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Live work, presented with the problem, the solution and the
            objective — never invented metrics.
          </p>
        </Container>
      </Section>
      <WorkGrid />
      <FinalCta />
    </>
  );
}
