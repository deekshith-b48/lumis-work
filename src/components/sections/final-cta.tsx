import Link from "next/link";
import { GradientField } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { whatsappUrl } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <GradientField />
      <Container className="relative rounded-2xl border border-line bg-bg-elevated/70 px-5 py-8 text-center sm:px-12 sm:py-12">
        <h2 className="mx-auto max-w-[16ch] font-mono text-[1.45rem] tracking-[-0.04em] sm:text-4xl">
          Tell us what you&apos;re trying to achieve.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[13px] text-muted">
          A website, a store, a product, or something you can&apos;t name yet.
          We&apos;ll help you find the right starting point.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Button asChild arrow size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappUrl()}>WhatsApp Us</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
