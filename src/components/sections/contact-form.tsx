"use client";

import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import type { ContactInfo } from "@/data/site";

const budgets = [
  "Under ₹20,000",
  "₹20,000–₹35,000",
  "₹35,000–₹50,000",
  "₹50,000+",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsapp, setWhatsapp] = useState("https://wa.me/918217700728");

  useEffect(() => {
    fetch("/api/contact", { cache: "no-store" })
      .then((res) => res.json() as Promise<ContactInfo>)
      .then((data) => setWhatsapp(data.whatsappUrl))
      .catch(() => undefined);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          phone: data.get("phone"),
          email: data.get("email"),
          projectType: data.get("projectType"),
          budget: data.get("budget"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Could not send enquiry.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send enquiry.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Business Name" name="business" />
        <Field label="Phone / WhatsApp" name="phone" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <label className="block text-sm">
        <span className="mb-2 block text-muted">Project Type</span>
        <select
          name="projectType"
          className="h-12 w-full rounded-2xl border border-line bg-bg-elevated px-4 text-fg"
          defaultValue={services[0].title}
        >
          {services.map((s) => (
            <option key={s.id} value={s.title} className="bg-bg-elevated">
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-2 block text-muted">Budget</span>
        <select
          name="budget"
          className="h-12 w-full rounded-2xl border border-line bg-bg-elevated px-4 text-fg"
          defaultValue={budgets[4]}
        >
          {budgets.map((b) => (
            <option key={b} value={b} className="bg-bg-elevated">
              {b}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-2 block text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you building, and what problem should it solve?"
          className="w-full rounded-2xl border border-line bg-bg-elevated px-4 py-3 text-fg placeholder:text-muted/60"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" arrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Start My Project"}
        </Button>
        <Button asChild variant="whatsapp">
          <a href={whatsapp}>WhatsApp Us</a>
        </Button>
      </div>
      {status === "sent" ? (
        <p className="text-sm text-fg">
          Received. We’ll get back to you on email or WhatsApp shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-muted">
          {error} You can also write to us or chat on WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-2xl border border-line bg-bg-elevated px-4 text-fg"
      />
    </label>
  );
}
