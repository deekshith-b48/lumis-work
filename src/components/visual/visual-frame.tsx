import Image from "next/image";
import { cn } from "@/lib/utils";

export function VisualFrame({
  src,
  alt,
  className,
  caption,
  imageClassName,
  compact = false,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  imageClassName?: string;
  compact?: boolean;
}) {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-accent-soft",
          compact ? "aspect-[16/8]" : "aspect-[16/9]",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 92vw, 720px"
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
            imageClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fg/25 via-transparent to-white/10" />
        {caption ? (
          <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-fg">
            {caption}
          </p>
        ) : null}
      </div>
    </figure>
  );
}

export function FeatureChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-white px-3 py-1 text-xs text-fg shadow-[0_1px_0_rgba(23,21,18,0.04)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
