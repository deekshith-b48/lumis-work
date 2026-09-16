import { FeatureLine } from "@/components/pricing/feature-icon";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { pricingPlans } from "@/data/pricing";

export function FeatureHighlights() {
  return (
    <Section>
      <Container>
        <Eyebrow>Features, in the open</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          You can see what each layer adds.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Nothing is hidden in a collapsed table. Each plan keeps the last one
          and adds a visible set of capabilities.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-[24px] border border-line bg-bg-elevated p-5 sm:p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-2xl">{plan.name}</h3>
                <p className="text-sm text-accent">{plan.price}</p>
              </div>
              <p className="mt-2 text-sm text-muted">{plan.promise}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {plan.added.map((item) => (
                  <FeatureLine key={item} label={item} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
