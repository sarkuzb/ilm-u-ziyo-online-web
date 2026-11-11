import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — onlayn taʼlim tizimi`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Ilm-u Ziyo Online",
    "Ilm-u Ziyo",
    "onlayn taʼlim",
    "milliy sertifikat",
    "milliy sertifikatga tayyorlov",
    "videodarslar",
    "nemis tili",
    "turk tili",
    "bolalar uchun kurslar",
  ],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: site.name,
    title: `${site.name} — onlayn taʼlim tizimi`,
    description: site.description,
    url: "/",
    images: [{ url: "/logo.png", width: 256, height: 256, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — onlayn taʼlim tizimi`,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.description,
  telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
  sameAs: [site.telegram, ...site.socials.map((social) => social.href)].filter(Boolean),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-white"
        >
          Asosiy kontentga oʻtish
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
