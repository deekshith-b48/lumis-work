import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import {
  HowWeThink,
  ProcessSteps,
  WhatHappensNext,
} from "@/components/sections/why-and-process";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Understand, simplify, design, build, measure, evolve. Lumis doesn't start with code.",
};

export default function ProcessPage() {
  return (
    <>
      <Section className="pt-24 pb-8 sm:pt-32">
        <Container>
          <Eyebrow>Process</Eyebrow>
          <h1 className="max-w-[16ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            We don&apos;t start with code.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            First we understand the job. Then we decide what actually needs to
            be built.
          </p>
        </Container>
      </Section>
      <HowWeThink />
      <ProcessSteps />
      <WhatHappensNext />
      <FinalCta />
    </>
  );
}
