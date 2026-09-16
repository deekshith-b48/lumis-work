import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { outcomes } from "@/data/expertise";

export function WhatYouGet() {
  return (
    <Section>
      <Container>
        <Eyebrow>The outcome</Eyebrow>
        <h2 className="max-w-[14ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          You&apos;re not buying a website.
        </h2>
        <p className="mt-4 text-sm text-muted">You&apos;re getting:</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {outcomes.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-line bg-bg-elevated px-5 py-4 text-sm text-fg"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-md font-mono text-2xl leading-snug">
          Technology is how we build it. Business value is why we build it.
        </p>
        <Button asChild arrow className="mt-8">
          <Link href="/contact">Start a Project</Link>
        </Button>
      </Container>
    </Section>
  );
}
