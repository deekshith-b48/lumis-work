"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { ContactInfo } from "@/data/site";

export function ContactDetails() {
  const [info, setInfo] = useState<ContactInfo | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/contact", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load contact details");
        return res.json() as Promise<ContactInfo>;
      })
      .then((data) => {
        if (!cancelled) setInfo(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="mt-8 text-sm text-muted">
        Contact details couldn’t load. Refresh the page, or message us on WhatsApp.
      </p>
    );
  }

  if (!info) {
    return (
      <div className="mt-8 space-y-2" aria-busy="true">
        <div className="h-4 w-48 animate-pulse rounded bg-accent-soft" />
        <div className="h-4 w-40 animate-pulse rounded bg-accent-soft" />
        <div className="h-4 w-36 animate-pulse rounded bg-accent-soft" />
      </div>
    );
  }

  return (
    <ul className="mt-8 space-y-3 text-sm">
      <li>
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted">
          <Mail className="size-3.5" />
          Email
        </p>
        <a href={`mailto:${info.email}`} className="mt-1 block text-fg hover:text-accent">
          {info.email}
        </a>
      </li>
      <li>
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted">
          <Phone className="size-3.5" />
          Phone
        </p>
        <a href={info.telUrl} className="mt-1 block text-fg hover:text-accent">
          {info.phoneDisplay}
        </a>
      </li>
      <li>
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted">
          <MessageCircle className="size-3.5" />
          WhatsApp
        </p>
        <a href={info.whatsappUrl} className="mt-1 block text-fg hover:text-accent">
          WhatsApp Us
        </a>
      </li>
    </ul>
  );
}
