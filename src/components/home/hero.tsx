"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HeroVisual } from "@/components/home/hero-visual";
import { TypeHeadline } from "@/components/home/type-headline";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-12">
      <Container className="relative lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div className="flex items-start gap-3 lg:contents">
          <div className="min-w-0 flex-1">
            <TypeHeadline />
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-muted sm:text-[15px]">
              Lumis designs and builds modern digital experiences that help
              businesses present, sell and operate better online.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row">
              <Button asChild arrow>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#who">Pick your concept</Link>
              </Button>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-muted">
              Websites · Stores · Platforms · AI
            </p>
          </div>
          <HeroVisual />
        </div>
      </Container>
      <motion.a
        href="#story"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted sm:flex"
      >
        Keep looking
        <ChevronDown className="size-3.5 animate-float" />
      </motion.a>
    </section>
  );
}
