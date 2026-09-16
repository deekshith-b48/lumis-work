"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-8",
          scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16",
        )}
      >
        <Logo />
        <nav className="hidden items-center xl:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-[13px] text-muted transition-colors hover:text-fg",
                pathname === link.href && "text-accent",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild arrow className="hidden sm:inline-flex" size="sm">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg px-4 py-5 xl:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base text-fg",
                  pathname === link.href && "text-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild arrow className="mt-2 w-full">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
