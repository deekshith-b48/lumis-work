import Link from "next/link";
import { PlanCard } from "@/components/pricing/plan-card";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { pricingPlans } from "@/data/pricing";

export function PricingCatalogue({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <Section id="pricing">
      <Container className="max-w-[88rem]">
        {showIntro ? (
          <>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="max-w-[18ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
              Start with what you need. Scale when you&apos;re ready.
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted">
              Four layers. Each one includes everything below it — so you can
              start small and step up without starting over.
            </p>
          </>
        ) : null}
        <div className="mt-6 overflow-visible rounded-[32px] border border-white/70 bg-gradient-to-b from-[#dfe6f4] via-[#e8eef8] to-[#d9e2f0] p-3 sm:p-5 lg:p-7">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 no-scrollbar md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4 xl:items-stretch xl:gap-4">
            {pricingPlans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[12px] leading-relaxed text-muted">
          Payment gateway transaction fees, shipping/logistics charges, domain,
          hosting and third-party service fees are separate unless specifically
          mentioned in the project scope.
        </p>
      </Container>
    </Section>
  );
}

export function PricingClose() {
  return (
    <Section>
      <Container>
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Not sure which plan fits?
        </p>
        <h2 className="mt-3 max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Tell us what you&apos;re building. We&apos;ll recommend the right
          starting point.
        </h2>
        <Button asChild arrow className="mt-8">
          <Link href="/contact">Talk to Lumis</Link>
        </Button>
      </Container>
    </Section>
  );
}
