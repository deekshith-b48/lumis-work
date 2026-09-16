import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { pricingPlans } from "@/data/pricing";

export function GrowthPath() {
  return (
    <Section>
      <Container>
        <Eyebrow>Start small, then scale</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          You don&apos;t need everything on day one.
        </h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <li key={plan.id} className="rounded-[24px] border border-line bg-bg-elevated p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {String(i + 1).padStart(2, "0")} · {plan.journey}
              </p>
              <h3 className="mt-4 font-mono text-2xl">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.summary}</p>
              <p className="mt-6 text-lg text-fg">{plan.price}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-lg font-mono text-2xl leading-snug">
          Start with what your business needs today. Build on it when tomorrow
          demands more.
        </p>
        <Button asChild arrow className="mt-8" variant="secondary">
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </Container>
    </Section>
  );
}
