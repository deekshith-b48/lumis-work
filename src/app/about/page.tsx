import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { LumisMinute } from "@/components/sections/lumis-minute";
import { WhyLumis } from "@/components/sections/why-and-process";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.supporting,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container className="max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            Lumis makes digital projects clearer.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {site.supporting}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We design and build the experiences businesses actually use:
            websites, catalogues, stores, custom platforms and AI. You always
            know what we&apos;re building, why it exists, and what it costs.
          </p>
          <p className="mt-8 font-mono text-2xl text-fg">{site.coreMessage}</p>
          <Button asChild arrow className="mt-10">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </Container>
      </Section>
      <LumisMinute />
      <WhyLumis />
      <FinalCta />
    </>
  );
}
