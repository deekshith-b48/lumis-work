"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { services } from "@/data/services";
import { formatInr } from "@/lib/utils";
import { cn } from "@/lib/utils";

const buildOptions = services.map((s) => ({
  id: s.id,
  label: s.title,
  base: s.startingAmount,
}));

const featureOptions = [
  { id: "catalogue", label: "Catalogue", add: 0, includedIn: ["business-websites", "product-catalogues", "ecommerce"] },
  { id: "whatsapp", label: "WhatsApp", add: 0, includedIn: ["business-websites", "product-catalogues", "landing-pages", "ecommerce"] },
  { id: "payments", label: "Payments", add: 18000, includedIn: ["ecommerce"] },
  { id: "orders", label: "Orders", add: 8000, includedIn: ["ecommerce"] },
  { id: "delivery", label: "Delivery", add: 5000, includedIn: ["ecommerce"] },
  { id: "admin", label: "Admin Dashboard", add: 8000, includedIn: ["custom-web-apps"] },
  { id: "ai", label: "AI", add: 15000, includedIn: ["ai-automation"] },
  { id: "analytics", label: "Analytics", add: 0, includedIn: ["business-websites", "product-catalogues", "landing-pages", "ecommerce", "custom-web-apps"] },
];

export function ProjectEstimator() {
  const [build, setBuild] = useState(buildOptions[0].id);
  const [features, setFeatures] = useState<string[]>(["whatsapp", "analytics"]);

  const estimate = useMemo(() => {
    const selected = buildOptions.find((b) => b.id === build)!;
    let extra = 0;
    for (const f of featureOptions) {
      if (!features.includes(f.id)) continue;
      if (f.includedIn.includes(build)) continue;
      extra += f.add;
    }
    const low = selected.base + extra;
    const high = Math.round(low * 1.35);
    return { low, high };
  }, [build, features]);

  return (
    <Section>
      <Container>
        <Eyebrow>Estimator</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Get a sense of the starting range.
        </h2>
        <div className="mt-10 grid gap-8 rounded-[24px] border border-line bg-bg-elevated p-5 sm:rounded-[28px] sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm text-fg">What are you building?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {buildOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setBuild(option.id)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm",
                    build === option.id
                      ? "border-accent bg-accent text-white"
                      : "border-line text-muted",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="mt-8 text-sm text-fg">What features do you need?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featureOptions.map((option) => {
                const on = features.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setFeatures((prev) =>
                        on ? prev.filter((id) => id !== option.id) : [...prev, option.id],
                      )
                    }
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-sm",
                      on ? "border-accent bg-accent text-white" : "border-line text-muted",
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-bg-elevated p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Estimated starting range
            </p>
            <p className="mt-4 font-mono text-3xl">
              {formatInr(estimate.low)} – {formatInr(estimate.high)}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Indicative estimate — final pricing depends on requirements.
            </p>
            <Button asChild arrow className="mt-8 w-full">
              <Link href="/contact">Discuss My Project</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
