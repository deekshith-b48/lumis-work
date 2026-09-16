import { Container, Eyebrow, Section } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <Eyebrow>Clients</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Words from the work.
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Placeholders only — we don&apos;t invent testimonials. Replace these
          when real client notes are ready.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <blockquote
              key={`${item.name}-${i}`}
              className="rounded-[24px] border border-dashed border-line bg-bg-elevated/70 p-6"
            >
              <p className="font-mono text-xl leading-snug text-muted">
                “{item.quote}”
              </p>
              <footer className="mt-6 text-sm">
                <p className="text-fg">{item.name}</p>
                <p className="text-muted">
                  {item.business} · {item.project}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
