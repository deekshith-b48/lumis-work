"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { solutions } from "@/data/solutions";
import { audienceVisuals } from "@/data/visuals";
import { VisualFrame } from "@/components/visual/visual-frame";
import { cn } from "@/lib/utils";

export function WhoWeBuildFor() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((item) => item.id === active) ?? solutions[0];
  const visual = audienceVisuals[current.id];

  return (
    <Section id="who">
      <Container>
        <Eyebrow>Who it&apos;s for</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Built around your business.
        </h2>
        <p className="mt-2 max-w-lg text-[13px] text-muted">
          Choose a lane. The promise and the build update together.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {solutions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] transition-colors",
                active === item.id
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-bg-elevated text-muted hover:text-fg",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article className="mt-5 grid overflow-hidden rounded-2xl border border-line bg-bg-elevated sm:grid-cols-[0.9fr_1.1fr]">
          {visual ? (
            <VisualFrame src={visual.src} alt={visual.alt} compact className="sm:h-full" />
          ) : null}
          <div className="p-5 sm:p-6">
            <h3 className="font-mono text-xl">{current.title}</h3>
            <p className="mt-1 text-[13px] text-muted">{current.audience}</p>
            <ul className="mt-4 space-y-1.5 text-[13px] text-fg">
              {current.promise.map((line) => (
                <li key={line} className="flex gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-accent-soft px-3 py-2 text-[13px] text-fg">
              {current.solution}
            </p>
            <Button asChild arrow className="mt-5" size="sm">
              <Link href="/contact">Start from this concept</Link>
            </Button>
          </div>
        </article>
      </Container>
    </Section>
  );
}
