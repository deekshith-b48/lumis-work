import Link from "next/link";
import { FeatureLine } from "@/components/pricing/feature-icon";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { pricingPlans } from "@/data/pricing";

export function ValueCards() {
  return (
    <Section>
      <Container>
        <Eyebrow>In short</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Four layers. One product.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Link
              key={plan.id}
              href="/contact"
              className="rounded-[24px] border border-line bg-bg-elevated p-6 transition-colors hover:border-accent/30"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {plan.name}
              </p>
              <h3 className="mt-3 font-mono text-2xl">{plan.valueTitle}</h3>
              <ul className="mt-4 space-y-1.5">
                {plan.valueItems.map((item) => (
                  <FeatureLine key={item} label={item} />
                ))}
              </ul>
              <p className="mt-6 text-fg">{plan.price}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
