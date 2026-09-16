"use client";

import { Fragment, useState } from "react";
import { Check, Minus } from "lucide-react";
import { FeatureIcon } from "@/components/pricing/feature-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { comparisonGroups, pricingPlans } from "@/data/pricing";

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="size-4 text-accent" aria-label="Included" />;
  if (value === false)
    return <Minus className="size-4 text-muted/50" aria-label="Not included" />;
  return <span className="text-fg">{value}</span>;
}

export function FeatureComparison() {
  const [open, setOpen] = useState(true);

  return (
    <Section>
      <Container>
        <Eyebrow>Compare every feature</Eyebrow>
        <h2 className="max-w-[16ch] font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Nothing disappears when you move up.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Higher plans keep everything below them. The table only shows what is
          already there — and what gets added.
        </p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-8 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          {open ? "Hide comparison" : "Compare every feature"}
        </button>
        {open ? (
          <>
            <div className="mt-8 hidden overflow-x-auto rounded-[24px] border border-line lg:block">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-bg-elevated text-muted">
                  <tr>
                    <th className="px-4 py-3 font-medium">Feature</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.id} className="px-4 py-3 font-medium">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonGroups.map((group) => (
                    <Fragment key={group.title}>
                      <tr className="border-t border-line bg-accent-soft/40">
                        <td
                          colSpan={5}
                          className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-muted"
                        >
                          {group.title}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={`${group.title}-${row.feature}`} className="border-t border-line">
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-2 text-fg">
                              <FeatureIcon label={row.feature} className="mt-0" />
                              {row.feature}
                            </span>
                          </td>
                          {pricingPlans.map((plan) => (
                            <td key={plan.id} className="px-4 py-3">
                              <Cell value={row.plans[plan.id]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 lg:hidden">
              <Accordion type="multiple">
                {comparisonGroups.map((group) => (
                  <AccordionItem key={group.title} value={group.title}>
                    <AccordionTrigger>{group.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4">
                        {group.rows.map((row) => (
                          <li key={row.feature}>
                            <p className="inline-flex items-center gap-2 text-fg">
                              <FeatureIcon label={row.feature} className="mt-0" />
                              {row.feature}
                            </p>
                            <div className="mt-1 grid grid-cols-2 gap-1 text-xs text-muted">
                              {pricingPlans.map((plan) => (
                                <p key={plan.id}>
                                  {plan.name}:{" "}
                                  <span className="text-fg">
                                    {row.plans[plan.id] === true
                                      ? "Included"
                                      : row.plans[plan.id] === false
                                        ? "Not included"
                                        : row.plans[plan.id]}
                                  </span>
                                </p>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </>
        ) : null}
      </Container>
    </Section>
  );
}
