import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { projectVisuals } from "@/data/visuals";
import { FeatureChips, VisualFrame } from "@/components/visual/visual-frame";
import { cn } from "@/lib/utils";

export function WorkGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  const showAll = Boolean(limit) && projects.length > list.length;

  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
              Work you can open and judge.
            </h2>
            <p className="mt-2 max-w-lg text-[13px] text-muted">
              One live project, with the features that shipped.
            </p>
          </div>
          {showAll ? (
            <Button asChild variant="secondary" arrow>
              <Link href="/work">View all work</Link>
            </Button>
          ) : null}
        </div>
        <div
          className={cn(
            "mt-5 grid gap-3",
            list.length > 1 ? "md:grid-cols-2" : "max-w-4xl",
          )}
        >
          {list.map((project) => {
            const visual = projectVisuals[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-line bg-bg-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
              >
                {visual ? (
                  <VisualFrame
                    src={visual.src}
                    alt={visual.alt}
                    caption="Live site"
                    imageClassName="object-top"
                    compact
                  />
                ) : null}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-muted">
                    <span>{project.industry}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-mono text-xl group-hover:text-accent">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {project.challenge}
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-accent">
                    Features delivered
                  </p>
                  <div className="mt-2">
                    <FeatureChips items={project.features} />
                  </div>
                  <p className="mt-3 text-[13px] text-fg">{project.objective}</p>
                  {project.url ? (
                    <p className="mt-4 inline-flex items-center gap-1 text-[11px] text-muted">
                      Live project
                      <ArrowUpRight className="size-3.5" />
                    </p>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
