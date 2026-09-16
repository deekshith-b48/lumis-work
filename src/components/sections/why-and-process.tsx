import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { nextSteps, principles, processSteps, thinkingSteps } from "@/data/expertise";

export function WhyLumis() {
  return (
    <Section>
      <Container>
        <Eyebrow>Why Lumis</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Clearer projects. Fewer surprises.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.04}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.number}
              </p>
              <h3 className="mt-3 font-mono text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HowWeThink() {
  return (
    <Section>
      <Container>
        <Eyebrow>How we think</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          We don&apos;t start with code.
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {thinkingSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05} className="bg-bg-elevated p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {step.number}
              </p>
              <h3 className="mt-4 font-mono text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function ProcessSteps() {
  return (
    <Section>
      <Container>
        <Eyebrow>Process</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Discover. Design. Build. Launch. Grow.
        </h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} className="rounded-[24px] border border-line bg-bg-elevated p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {step.number}
              </p>
              <h3 className="mt-4 font-mono text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function WhatHappensNext() {
  return (
    <Section>
      <Container>
        <Eyebrow>What happens next</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Starting a project should feel obvious, not risky.
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map((step) => (
            <li key={step.number}>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Step {step.number}
              </p>
              <p className="mt-3 font-mono text-2xl leading-snug">{step.title}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
