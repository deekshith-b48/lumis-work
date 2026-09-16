import { Container, Eyebrow, Section } from "@/components/ui/container";
import { expertise } from "@/data/expertise";

export function ExpertiseGrid() {
  return (
    <Section>
      <Container>
        <Eyebrow>Expertise</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Capabilities behind the experience.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted">
          The tools sit underneath. The work is the outcome customers actually
          use.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {expertise.map((group) => (
            <div key={group.id} className="bg-bg-elevated p-6">
              <h3 className="font-mono text-xl">{group.title}</h3>
              <p className="mt-3 text-sm text-fg">{group.outcome}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
