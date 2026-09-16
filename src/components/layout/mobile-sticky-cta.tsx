"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl()}
          className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-line text-sm text-fg"
        >
          <MessageCircle className="size-3.5" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex h-11 items-center justify-center gap-1.5 rounded-full bg-accent text-sm text-white"
        >
          Start a Project
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
