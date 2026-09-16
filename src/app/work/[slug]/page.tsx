import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { projectVisuals } from "@/data/visuals";
import { FeatureChips } from "@/components/visual/visual-frame";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.objective,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const visual = projectVisuals[project.slug];

  return (
    <Section className="pt-24 sm:pt-32">
      <Container className="max-w-3xl">
        <Eyebrow>
          {project.industry} · {project.year}
        </Eyebrow>
        <h1 className="font-mono text-[1.55rem] tracking-[-0.045em] sm:text-4xl">
          {project.name}
        </h1>
        {visual ? (
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[24px] border border-line">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(max-width: 768px) 92vw, 768px"
              className="object-cover object-top"
              priority
            />
          </div>
        ) : null}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-muted hover:text-fg"
          >
            {new URL(project.url).hostname}
          </a>
        ) : null}
        <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-accent">
          Features delivered
        </p>
        <div className="mt-3">
          <FeatureChips items={project.features} />
        </div>
        <dl className="mt-12 space-y-8">
          <Item label="The business" value={project.business} />
          <Item label="The challenge" value={project.challenge} />
          <Item label="The approach" value={project.approach} />
          <Item label="The solution" value={project.solution} />
          <Item label="The experience" value={project.experience} />
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
              The technology
            </dt>
            <dd className="mt-2 text-fg">{project.technology.join(" · ")}</dd>
          </div>
          <Item label="Project objective" value={project.objective} />
        </dl>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          {project.url ? (
            <Button asChild arrow>
              <a href={project.url} target="_blank" rel="noreferrer">
                View live site
              </a>
            </Button>
          ) : null}
          <Button asChild arrow={!project.url} variant={project.url ? "secondary" : "primary"}>
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-lg leading-relaxed text-fg">{value}</dd>
    </div>
  );
}
