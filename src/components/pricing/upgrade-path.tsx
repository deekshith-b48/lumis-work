import { ArrowDown } from "lucide-react";
import { FeatureIcon } from "@/components/pricing/feature-icon";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { pricingPlans } from "@/data/pricing";
import { formatInr } from "@/lib/utils";

export function UpgradePath() {
  return (
    <Section>
      <Container>
        <Eyebrow>What do I get when I upgrade?</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Presence. Then discovery. Then intelligence. Then commerce.
        </h2>
        <div className="mt-12">
          {pricingPlans.map((plan, i) => (
            <div key={plan.id}>
              {plan.increment ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <ArrowDown className="size-4 text-muted" />
                  <p className="mt-3 text-sm text-fg">
                    +{formatInr(plan.increment)}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">
                    Adds the next layer
                  </p>
                </div>
              ) : null}
              <article className="rounded-[24px] border border-line bg-bg-elevated px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      {plan.essence}
                    </p>
                    <h3 className="mt-2 font-mono text-3xl">{plan.name}</h3>
                  </div>
                  <p className="font-mono text-3xl">{plan.price}</p>
                </div>
                <p className="mt-3 max-w-xl text-sm text-muted">{plan.summary}</p>
                {i > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {plan.added.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-fg"
                      >
                        <FeatureIcon label={item} className="mt-0 size-3.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-sm text-muted">
                    The foundation: a site customers can trust, a catalogue they
                    can browse, and a way to get in touch.
                  </p>
                )}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
