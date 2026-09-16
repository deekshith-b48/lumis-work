import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/contact-details";
import { ContactForm } from "@/components/sections/contact-form";
import { WhatHappensNext } from "@/components/sections/why-and-process";
import { Container, Eyebrow, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Lumis about the business and what you're trying to achieve. We'll recommend the right starting point.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
              Tell us what you&apos;re building.
            </h1>
            <p className="mt-5 max-w-md text-muted">
              Share the business, the problem, and where you want to go. We
              come back with a clear next step — not a pitch deck.
            </p>
            <ContactDetails />
          </div>
          <ContactForm />
        </Container>
      </Section>
      <WhatHappensNext />
    </>
  );
}
