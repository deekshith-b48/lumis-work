import { FeatureLine } from "@/components/pricing/feature-icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

const skins: Record<PricingPlan["id"], string> = {
  basic: "border-white/80 bg-white/95",
  intermediate: "border-[#d9e3ff] bg-gradient-to-b from-white to-[#eef3ff]",
  advanced: "border-accent/25 bg-gradient-to-b from-[#ece8ff] to-white",
  pro: "border-violet-200 bg-gradient-to-b from-white to-[#f3e9ff]",
};

export function PlanCard({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) {
  return (
    <div className="flex h-full min-w-[min(84vw,300px)] snap-center flex-col gap-2.5 sm:min-w-[320px] lg:min-w-0">
      <p
        className={cn(
          "flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-white/55 px-3 text-[10px] uppercase tracking-[0.16em] text-muted",
          plan.popular && "bg-white/80 text-accent",
        )}
      >
        <span className="grid size-5 place-items-center rounded-full bg-white text-[10px] text-accent">
          {index + 1}
        </span>
        {plan.essence}
      </p>
      <article
        className={cn(
          "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[28px] border p-5 shadow-[0_8px_30px_rgba(23,21,18,0.04)] sm:p-6",
          skins[plan.id],
          plan.popular && "shadow-[0_16px_40px_rgba(91,111,255,0.14)]",
        )}
      >
        <div className="flex h-6 items-center justify-between gap-2">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            {plan.essence}
          </p>
          {plan.badge ? (
            <span className="max-w-[14ch] truncate rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-accent">
              {plan.badge}
            </span>
          ) : (
            <span className="invisible text-[10px]">.</span>
          )}
        </div>
        <h3 className="mt-3 font-mono text-[1.65rem] tracking-[-0.05em]">
          {plan.name}
        </h3>
        <p className="mt-1.5 min-h-[2.6em] text-[13px] leading-relaxed text-muted">
          {plan.promise}
        </p>
        <p className="mt-5 font-mono text-[2.15rem] leading-none tracking-[-0.06em] text-fg">
          {plan.price}
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted">
          One-time project
        </p>
        <Button asChild arrow className="mt-5 w-full shrink-0" size="sm">
          <Link href="/contact">{plan.cta}</Link>
        </Button>
        <div className="mt-5 min-h-[5.25rem]">
          {plan.inheritsFrom ? (
            <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-fg">
              <p>Everything in {plan.inheritsFrom}</p>
              <p className="mt-1 text-center text-muted">+</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                What&apos;s added
              </p>
            </div>
          ) : (
            <p className="pt-3 text-[10px] uppercase tracking-[0.16em] text-accent">
              Features included
            </p>
          )}
        </div>
        <div className="mt-4 min-w-0 flex-1 space-y-4">
          {plan.groups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                {group.title}
              </p>
              <ul className="mt-2 space-y-1.5">
                {group.items.map((item) => (
                  <FeatureLine key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
