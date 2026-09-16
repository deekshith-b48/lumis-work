import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center pt-28">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 font-mono text-[2.05rem] sm:text-5xl">This page isn&apos;t here.</h1>
      <p className="mt-4 max-w-md text-muted">
        The work might have moved. Start from the studio home, or tell us what
        you&apos;re trying to build.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">Start a Project</Link>
        </Button>
      </div>
    </Container>
  );
}
