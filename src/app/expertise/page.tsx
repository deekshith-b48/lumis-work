import type { Metadata } from "next";
import { ExpertiseGrid } from "@/components/sections/expertise-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Design, engineering, ecommerce, AI and cloud — behind the experience customers actually use.",
};

export default function ExpertisePage() {
  return (
    <>
      <Section className="pt-24 pb-8 sm:pt-32">
        <Container>
          <Eyebrow>Expertise</Eyebrow>
          <h1 className="max-w-[18ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            The toolkit stays in the background.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            We choose technology because it serves the outcome — speed, clarity,
            and a product that can grow.
          </p>
        </Container>
      </Section>
      <ExpertiseGrid />
      <FinalCta />
    </>
  );
}
