"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { planFit, pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PlanFit() {
  const [selected, setSelected] = useState<(typeof planFit)[number]["id"] | null>(
    null,
  );
  const plan = pricingPlans.find((p) => p.id === selected);

  return (
    <Section>
      <Container>
        <Eyebrow>Which plan is right for me?</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          What are you trying to achieve?
        </h2>
        <div className="mt-8 flex flex-col gap-2">
          {planFit.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className={cn(
                "rounded-2xl border px-5 py-4 text-left text-sm transition-colors",
                selected === option.id
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:text-fg",
              )}
            >
              {option.question}
            </button>
          ))}
        </div>
        {plan ? (
          <div className="mt-8 rounded-[24px] border border-line bg-bg-elevated p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Recommended
            </p>
            <h3 className="mt-3 font-mono text-3xl">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted">{plan.summary}</p>
            <p className="mt-4 font-mono text-3xl">{plan.price}</p>
            <p className="mt-2 text-xs text-muted">One-time project</p>
            <Button asChild arrow className="mt-6">
              <Link href="/contact">See Recommended Plan</Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
