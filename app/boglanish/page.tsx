import { ArrowUpRight, Handshake, Phone, PhoneCall, Send, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";
import { StoreButtons } from "@/components/StoreButtons";
import { Container, IconTile } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Bogʻlanish",
  description:
    "Ilm-u Ziyo Online bilan bogʻlanish: telefon raqamlari va ilovani yuklab olish havolalari.",
  alternates: { canonical: "/boglanish" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Bogʻlanish"
        eyebrowIcon={PhoneCall}
        title="Savolingiz bormi? Bogʻlaning"
        lead="Kurslar va ilova boʻyicha qisqa maslahat olish uchun bizga qoʻngʻiroq qiling."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-5 lg:grid-cols-3">
          {site.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="reveal group flex flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
            >
              <IconTile icon={Phone} size="lg" tone="solid" />
              <p className="mt-6 text-sm font-medium text-muted">Telefon</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-ink tabular-nums">
                {phone.label}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-brand-800">
                Qoʻngʻiroq qilish
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          ))}

          {site.telegram ? (
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
            >
              <IconTile icon={Send} size="lg" tone="solid" />
              <p className="mt-6 text-sm font-medium text-muted">Telegram</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-ink">Rasmiy sahifa</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-brand-800">
                Telegram orqali yozish
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          ) : null}

          <div className="reveal flex flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7">
            <IconTile icon={Smartphone} size="lg" tone="white" />
            <p className="mt-6 text-sm font-medium text-muted">Mobil ilova</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-ink">Ilovani yuklab oling</p>
            <StoreButtons className="mt-6" />
          </div>
        </Container>

        {site.socials.length > 0 ? (
          <Container className="mt-10">
            <h2 className="text-xl font-bold tracking-tight text-ink">Ijtimoiy tarmoqlar</h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {site.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] font-medium text-ink shadow-card transition duration-200 hover:border-brand-300 hover:bg-brand-50"
                  >
                    {social.label}
                    <ArrowUpRight className="size-4 text-brand-700" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        ) : null}

        <Container className="mt-10">
          <Link
            href="/hamkorlik"
            className="reveal group flex items-start gap-5 rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:border-brand-300"
          >
            <IconTile icon={Handshake} size="lg" />
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink">
                Hamkorlik boʻyicha murojaat
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Bloger, reklama agentligi yoki hamkor sifatida murojaat qilmoqchimisiz? Hamkorlik va
                media sahifasida kerakli maʼlumotlar jamlangan.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-800">
                Hamkorlik sahifasi
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}
