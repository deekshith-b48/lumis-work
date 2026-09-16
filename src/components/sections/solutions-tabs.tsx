"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

export function SolutionsTabs() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  return (
    <Section>
      <Container>
        <Eyebrow>Solutions</Eyebrow>
        <h2 className="max-w-[18ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Different businesses. Different problems. One digital partner.
        </h2>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {solutions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                active === item.id
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:text-fg",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-8 rounded-[24px] border border-line bg-bg-elevated p-5 sm:rounded-[28px] sm:p-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm text-muted">{current.audience}</p>
            <h3 className="mt-4 font-mono text-3xl">{current.title}</h3>
            <ul className="mt-6 space-y-2 text-sm text-fg">
              {current.promise.map((line) => (
                <li key={line} className="flex gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                What we build
              </p>
              <p className="mt-4 font-mono text-2xl leading-snug text-fg">
                {current.solution}
              </p>
            </div>
            <Button asChild arrow className="mt-8 w-fit">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
