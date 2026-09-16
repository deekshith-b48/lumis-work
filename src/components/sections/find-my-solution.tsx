"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: "goal",
    prompt: "What are you trying to do?",
    options: [
      "Look credible online",
      "Show products",
      "Sell and take payments",
      "Build a custom system",
      "Automate work with AI",
    ],
  },
  {
    id: "type",
    prompt: "Who is this for?",
    options: ["Local business", "Retail", "Startup", "Creator", "Growing company"],
  },
  {
    id: "budget",
    prompt: "Comfortable starting range?",
    options: ["Under ₹20,000", "₹20,000–₹35,000", "₹35,000–₹50,000", "₹50,000+", "Not sure"],
  },
];

function recommend(answers: Record<string, string>) {
  if (answers.goal === "Automate work with AI") {
    return services.find((s) => s.id === "ai-automation")!;
  }
  if (answers.goal === "Build a custom system") {
    return services.find((s) => s.id === "custom-web-apps")!;
  }
  if (answers.goal === "Sell and take payments") {
    return services.find((s) => s.id === "ecommerce")!;
  }
  if (answers.goal === "Show products") {
    return services.find((s) => s.id === "product-catalogues")!;
  }
  return services.find((s) => s.id === "business-websites")!;
}

export function FindMySolution() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const current = questions[step];
  const done = step >= questions.length;
  const result = useMemo(
    () => (done ? recommend(answers) : null),
    [answers, done],
  );

  return (
    <Section id="find-my-solution">
      <Container>
        <Eyebrow>Not sure what you need?</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Three taps. A starting point.
        </h2>
        <p className="mt-2 max-w-xl text-[13px] text-muted">
          Category only — not a quote. Scope still depends on what you need.
        </p>
        <div className="mt-5 rounded-2xl border border-line bg-bg-elevated p-4 sm:p-6">
          {!done && current ? (
            <>
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {step + 1} / {questions.length}
              </p>
              <p className="mt-3 text-base text-fg">{current.prompt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [current.id]: option }));
                      setStep((s) => s + 1);
                    }}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-[13px]",
                      answers[current.id] === option
                        ? "border-accent bg-accent text-white"
                        : "border-line text-muted hover:border-accent/40 hover:text-fg",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : result ? (
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                A sensible place to start
              </p>
              <h3 className="mt-3 font-mono text-2xl">{result.title}</h3>
              <p className="mt-2 max-w-lg text-[13px] text-muted">{result.headline}</p>
              <p className="mt-3 text-sm text-fg">From {result.startingPrice}</p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Button asChild arrow size="sm">
                  <Link href="/contact">Talk this through</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href={`/services#${result.id}`}>See this service</Link>
                </Button>
                <button
                  type="button"
                  className="text-[13px] text-muted hover:text-fg"
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                  }}
                >
                  Start over
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
