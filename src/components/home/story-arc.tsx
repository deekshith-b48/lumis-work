"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { VisualFrame } from "@/components/visual/visual-frame";
import { storyVisuals } from "@/data/visuals";
import { cn } from "@/lib/utils";

const beats = [
  {
    id: "problem" as const,
    label: "The problem",
    title: "Your business has changed. Your digital presence hasn't.",
    body: "Customers still can't tell what you offer, how to reach you, or why they should choose you.",
    wash: "from-[#ffe8ea] to-bg-elevated",
  },
  {
    id: "insight" as const,
    label: "The insight",
    title: "A website shouldn't simply exist.",
    body: "It should make your business easier to understand, discover and engage with.",
    wash: "from-[#ece8ff] to-bg-elevated",
  },
  {
    id: "solution" as const,
    label: "The solution",
    title: "That's what Lumis builds.",
    body: "Websites, catalogues, stores, custom platforms and AI — matched to the job, not a generic package.",
    wash: "from-[#e8fbf9] to-bg-elevated",
  },
];

export function StoryArc() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<(typeof beats)[number]["id"]>("problem");

  return (
    <Section id="story">
      <Container>
        <Reveal>
          <Eyebrow>The story</Eyebrow>
          <h2 className="max-w-[18ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
            We start with the gap, not the stack.
          </h2>
          <p className="mt-2 text-[13px] text-muted">
            Tap a beat. The rest stays in view so the argument stays whole.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-2 lg:grid-cols-3">
          {beats.map((beat, i) => {
            const visual = storyVisuals[beat.id];
            const selected = active === beat.id;
            return (
              <motion.button
                type="button"
                key={beat.label}
                initial={reduce ? false : { opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => setActive(beat.id)}
                className={cn(
                  `group overflow-hidden rounded-2xl border bg-gradient-to-b text-left ${beat.wash}`,
                  selected
                    ? "border-accent/40 shadow-[0_12px_30px_rgba(91,111,255,0.12)]"
                    : "border-line opacity-80 hover:opacity-100",
                )}
              >
                <VisualFrame src={visual.src} alt={visual.alt} compact />
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-accent">
                    {beat.label}
                  </p>
                  <h3 className="mt-2 font-mono text-[15px] leading-snug sm:text-lg">
                    {beat.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[13px] leading-relaxed text-muted",
                      selected ? "block" : "hidden lg:block",
                    )}
                  >
                    {beat.body}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
        <Button asChild arrow className="mt-6" variant="secondary" size="sm">
          <Link href="#who">See who it&apos;s for</Link>
        </Button>
      </Container>
    </Section>
  );
}
