import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-2.5">
      <Image
        src="/brand/lumis-logo.png"
        alt={site.name}
        width={160}
        height={160}
        className="size-9 shrink-0 object-contain mix-blend-multiply sm:size-10"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-mono text-[18px] tracking-[-0.04em] text-fg sm:text-[20px]">
          {site.name}
        </span>
        {!compact ? (
          <span className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
            {site.domain}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function GradientField({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,111,255,0.28),transparent_68%)] blur-2xl",
          animated && "animate-drift",
        )}
      />
      <div
        className={cn(
          "absolute top-32 right-[-80px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.28),transparent_70%)] blur-2xl",
          animated && "animate-float",
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-[-60px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(34,197,192,0.2),transparent_70%)] blur-2xl",
          animated && "animate-pulse-soft",
        )}
      />
    </div>
  );
}
