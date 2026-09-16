import { ArrowDown } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { beforeAfter } from "@/data/expertise";

export function BeforeAfter() {
  return (
    <Section>
      <Container>
        <Eyebrow>Before and after</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          The same business. A clearer experience.
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-[24px] border border-line bg-bg-elevated p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              Before
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {beforeAfter.before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center text-muted">
            <ArrowDown className="size-5 lg:-rotate-90" />
          </div>
          <div className="rounded-[24px] border border-accent/20 bg-gradient-to-br from-accent-soft to-bg-elevated p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              After Lumis
            </p>
            <ul className="mt-6 space-y-3 text-sm text-fg">
              {beforeAfter.after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
