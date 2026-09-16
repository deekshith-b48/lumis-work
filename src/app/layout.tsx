import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lumis — Digital experiences for what's next",
    template: "%s · Lumis",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Lumis — Digital experiences for what's next",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumis — Digital experiences for what's next",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-mono text-fg">
        <JsonLd />
        <SiteHeader />
        <main className="pb-20 sm:pb-0">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
