"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";

const blocks = [
  {
    label: "What we do",
    items: ["Design", "Development", "Digital strategy"],
    tone: "bg-[#ece8ff]",
  },
  {
    label: "What we build",
    items: ["Websites", "Digital stores", "Ecommerce", "Web apps", "AI solutions"],
    tone: "bg-[#e8fbf9]",
  },
  {
    label: "Who we help",
    items: ["Businesses", "Startups", "Creators", "Founders"],
    tone: "bg-[#fff4d6]",
  },
  {
    label: "How we work",
    items: ["Discover", "Design", "Build", "Launch", "Grow"],
    tone: "bg-[#ffe8f2]",
  },
];

export function LumisMinute() {
  const reduce = useReducedMotion();

  return (
    <Section>
      <Container>
        <Eyebrow>Lumis in one minute</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Digital projects, made clearer.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="rounded-[24px] border border-line bg-bg-elevated p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {block.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full ${block.tone} px-3 py-1 text-sm text-fg`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <Button asChild arrow className="mt-10">
          <Link href="/contact">Let&apos;s Build</Link>
        </Button>
      </Container>
    </Section>
  );
}
