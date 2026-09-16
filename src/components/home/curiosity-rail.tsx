"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const threads = [
  { href: "#story", label: "The gap", hint: "Problem → build" },
  { href: "#who", label: "Your concept", hint: "Tap a business type" },
  { href: "#solutions", label: "Name the job", hint: "Need → product" },
  { href: "#work", label: "Live site", hint: "Bloom & Barrow" },
  { href: "#find-my-solution", label: "3 questions", hint: "Find a start" },
  { href: "#pricing", label: "Start small", hint: "Four layers" },
];

export function CuriosityRail() {
  const reduce = useReducedMotion();

  return (
    <section className="pb-8 sm:pb-4">
      <Container>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-[10px] uppercase tracking-[0.18em] text-accent"
        >
          Jump into a concept
        </motion.p>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap sm:overflow-visible">
          {threads.map((thread, i) => (
            <motion.div
              key={thread.href}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="min-w-[168px] sm:min-w-0"
            >
              <Link
                href={thread.href}
                className="group flex items-center justify-between gap-3 rounded-full border border-line bg-bg-elevated px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent-soft"
              >
                <span>
                  <span className="block text-[13px] text-fg">{thread.label}</span>
                  <span className="block text-[10px] text-muted">{thread.hint}</span>
                </span>
                <ArrowUpRight className="size-3.5 text-accent" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
