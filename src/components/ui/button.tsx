import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { ArrowUpRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-mono text-sm tracking-[-0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "group bg-accent text-white hover:bg-[#4d5ef2]",
        secondary:
          "group border border-line bg-bg-elevated/70 text-fg hover:border-accent/30 hover:bg-accent-soft",
        ghost: "text-muted hover:text-fg",
        whatsapp: "border border-line bg-bg-elevated text-fg hover:bg-accent-soft",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6",
        sm: "h-9 px-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function withArrow(children: React.ReactNode, arrow?: boolean) {
  if (!arrow) return children;
  return (
    <>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  arrow = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    arrow?: boolean;
  }) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild && React.isValidElement<{ children?: React.ReactNode; className?: string }>(children)) {
    return (
      <Slot className={classes} {...props}>
        {React.cloneElement(children, {
          children: withArrow(children.props.children, arrow),
        })}
      </Slot>
    );
  }

  return (
    <button className={classes} {...props}>
      {withArrow(children, arrow)}
    </button>
  );
}
