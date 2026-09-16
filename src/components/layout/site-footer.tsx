import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { navLinks, site } from "@/data/site";

const footerNav = [
  ...navLinks,
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-elevated/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs font-mono text-xl leading-tight text-fg">
            <span className="block">Build.</span>
            <span className="block">Launch.</span>
            <span className="block">Grow.</span>
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">
            Studio
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Digital experiences for businesses ready for what&apos;s next.</p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
