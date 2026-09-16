import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { services } from "@/data/services";
import { serviceVisuals } from "@/data/visuals";
import { FeatureChips, VisualFrame } from "@/components/visual/visual-frame";

export function ServicesCatalogue({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.filter((s) => s.id !== "landing-pages") : services;

  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="max-w-[14ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
              Products with a job to do.
            </h2>
            <p className="mt-2 max-w-lg text-[13px] text-muted">
              Scoped around an outcome — not a tech list.
            </p>
          </div>
          {compact ? (
            <Button asChild variant="secondary" arrow>
              <Link href="/services">Explore What We Build</Link>
            </Button>
          ) : null}
        </div>
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0">
          {list.map((service) => {
            const visual = serviceVisuals[service.id];
            return (
              <article
                id={service.id}
                key={service.id}
                className="group min-w-[min(82vw,300px)] scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-bg-elevated lg:min-w-0"
              >
                {visual ? (
                  <VisualFrame src={visual.src} alt={visual.alt} />
                ) : null}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                      {service.number}
                    </p>
                    <p className="text-[13px] text-fg">From {service.startingPrice}</p>
                  </div>
                  <h3 className="mt-2 font-mono text-xl tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-fg">{service.headline}</p>
                  {!compact ? (
                    <>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3">
                          <p className="text-[10px] uppercase tracking-[0.16em] text-red-600">
                            The problem
                          </p>
                          <p className="mt-2 leading-relaxed text-red-950/80">{service.problem}</p>
                        </div>
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-3">
                          <p className="text-[10px] uppercase tracking-[0.16em] text-emerald-700">
                            The solution
                          </p>
                          <p className="mt-2 leading-relaxed text-emerald-950/80">{service.solution}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                  )}
                  <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-accent">
                    What you get
                  </p>
                  <div className="mt-2">
                    <FeatureChips items={compact ? service.features.slice(0, 4) : service.features} />
                  </div>
                  {!compact ? (
                    <>
                      <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-muted">
                        Who it&apos;s for
                      </p>
                      <p className="mt-2 text-sm text-fg">{service.whoFor.join(" · ")}</p>
                    </>
                  ) : null}
                  <Button asChild arrow className="mt-5" size="sm">
                    <Link href="/contact">{service.cta}</Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
