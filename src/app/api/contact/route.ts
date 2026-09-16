import { getContactInfo, site } from "@/data/site";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(getContactInfo(), {
    headers: { "Cache-Control": "no-store" },
  });
}

type Enquiry = {
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Enquiry;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !message) {
    return Response.json(
      { ok: false, error: "Please fill name, email, phone and message." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    business: body.business?.trim() || "—",
    phone,
    email,
    projectType: body.projectType ?? "—",
    budget: body.budget ?? "—",
    message,
    _subject: `New Lumis project enquiry from ${name}`,
    _template: "table",
    _captcha: false,
  };

  const forwarded = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!forwarded.ok) {
    return Response.json(
      {
        ok: false,
        error:
          "We couldn’t send that just now. Call or WhatsApp us and we’ll pick it up.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
