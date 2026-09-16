import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { ServicesCatalogue } from "@/components/sections/services-catalogue";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, catalogues, landing pages, ecommerce, custom web apps and AI solutions — each with a problem, a solution and a starting price.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="max-w-[16ch] font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
            What you get, not what we use.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Every offering has a job: make the business easier to understand,
            discover, enquire with, or run.
          </p>
        </Container>
      </Section>
      <ServicesCatalogue />
      <WhatYouGet />
      <FinalCta />
    </>
  );
}
