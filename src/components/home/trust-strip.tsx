"use client";

import { Globe, LayoutPanelTop, Sparkles, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { trustItems } from "@/data/expertise";

const icons = [Globe, Store, LayoutPanelTop, Sparkles];

export function TrustStrip() {
  return (
    <section className="overflow-hidden border-y border-line bg-bg-elevated/40">
      <Container className="hidden grid-cols-4 lg:grid">
        {trustItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item}
              className="flex items-center justify-center gap-2 py-5 transition-colors hover:text-accent"
            >
              <Icon className="size-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-[13px] text-muted">{item}</span>
            </div>
          );
        })}
      </Container>
      <div className="lg:hidden">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {trustItems.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div key={`${copy}-${item}`} className="flex items-center gap-2 px-6 py-4">
                    <Icon className="size-3.5 text-accent" strokeWidth={1.5} />
                    <span className="whitespace-nowrap text-[13px] text-muted">{item}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
