import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("relative py-8 sm:py-12 lg:py-16", className)} {...props} />
  );
}

export function Eyebrow({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent sm:mb-3",
        className,
      )}
      {...props}
    />
  );
}
