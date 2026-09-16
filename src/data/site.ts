export const site = {
  name: "Lumis",
  domain: "lumis.xyz",
  url: "https://lumis.xyz",
  tagline: "Build. Launch. Grow.",
  brandLine: "Lumis makes digital projects clearer.",
  description:
    "Lumis designs and builds modern digital experiences that help businesses present, sell and operate better online.",
  coreMessage: "Clearer ideas. Clearer products. Clearer experiences.",
  supporting:
    "Lumis helps businesses turn ideas and challenges into digital experiences built for what's next.",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "lumisxyz01@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+918217700728",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "918217700728",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/about", label: "About" },
] as const;

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return phone;
}

export function telUrl(phone = site.phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hi Lumis — I'd like to discuss a digital project.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export type ContactInfo = {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  telUrl: string;
  whatsappUrl: string;
};

export function getContactInfo(): ContactInfo {
  return {
    email: site.email,
    phone: site.phone,
    phoneDisplay: formatPhone(site.phone),
    whatsapp: site.whatsapp,
    telUrl: telUrl(),
    whatsappUrl: whatsappUrl(),
  };
}
