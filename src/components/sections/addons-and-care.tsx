import { FeatureIcon, FeatureLine } from "@/components/pricing/feature-icon";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { addOns, carePlans, recurringCosts } from "@/data/pricing";

export function AddOnsMenu() {
  return (
    <Section>
      <Container>
        <Eyebrow>Add-ons</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Need something extra?
        </h2>
        <div className="mt-10 divide-y divide-line rounded-[24px] border border-line">
          {addOns.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
            >
              <p className="inline-flex items-center gap-2 text-sm text-fg">
                <FeatureIcon label={item.name} className="mt-0" />
                {item.name}
              </p>
              <p className="text-sm text-muted">{item.price}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function RecurringCosts() {
  return (
    <Section>
      <Container>
        <Eyebrow>What&apos;s recurring?</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          One-time development. Separate running costs.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {recurringCosts.map((item) => (
            <div key={item.name} className="border-t border-line pt-5">
              <h3 className="text-sm uppercase tracking-[0.14em] text-fg">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function CarePlans() {
  return (
    <Section>
      <Container>
        <Eyebrow>Maintenance</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Care after launch, if you want it.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {carePlans.map((plan) => (
            <article key={plan.name} className="rounded-[24px] border border-line bg-bg-elevated p-6">
              <h3 className="font-mono text-2xl">{plan.name}</h3>
              <p className="mt-3 font-mono text-3xl">{plan.price}</p>
              <ul className="mt-6 space-y-2">
                {plan.includes.map((item) => (
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
