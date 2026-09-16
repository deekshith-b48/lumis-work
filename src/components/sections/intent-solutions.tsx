import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { intents } from "@/data/solutions";

export function IntentSolutions() {
  return (
    <Section id="solutions">
      <Container>
        <Eyebrow>Solutions</Eyebrow>
        <h2 className="max-w-[20ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Tell us the job. We&apos;ll name the build.
        </h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-bg-elevated">
          {intents.map((item) => (
            <Link
              key={item.need}
              href={item.href}
              className="group flex flex-col gap-1 border-b border-line px-4 py-3.5 last:border-b-0 transition-colors hover:bg-accent-soft/70 sm:flex-row sm:items-center sm:justify-between sm:px-5"
            >
              <p className="text-[13px] text-fg">{item.need}</p>
              <p className="flex items-center gap-2 text-[13px] text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                {item.result}
                <ArrowRight className="size-3.5" />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
