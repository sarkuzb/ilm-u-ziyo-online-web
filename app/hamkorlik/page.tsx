import {
  ChartLine,
  Handshake,
  Lock,
  Megaphone,
  Mic,
  Palette,
  Phone,
  Send,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections";
import { ButtonLink, Container, IconTile, SectionHeading, cx } from "@/components/ui";
import { categories, coursesByCategory } from "@/content/courses";
import { site } from "@/content/site";
import { stats, statsNote } from "@/content/stats";

export const metadata: Metadata = {
  title: "Hamkorlik va media",
  description:
    "Blogerlar, reklama agentliklari, marketologlar va hamkorlar uchun: Ilm-u Ziyo Online brendi, kurslari va hamkorlik uchun aloqa maʼlumotlari.",
  alternates: { canonical: "/hamkorlik" },
};

const audiences = [
  { icon: Mic, label: "Blogerlar" },
  { icon: Megaphone, label: "Reklama agentliklari" },
  { icon: ChartLine, label: "Marketologlar" },
  { icon: Building2, label: "Potensial hamkorlar" },
];

const logoBackgrounds = [
  { label: "Oq fonda", className: "bg-white" },
  { label: "Iliq fonda", className: "bg-brand-50" },
  { label: "Toʻq fonda", className: "bg-ink" },
];

const palette = [
  { name: "Asosiy rang", hex: "#DF9111", className: "bg-brand-500" },
  { name: "Och rang", hex: "#E8B45F", className: "bg-brand-300" },
  { name: "Iliq fon", hex: "#FFF7EA", className: "bg-brand-50" },
  { name: "Matn rangi", hex: "#1F1A14", className: "bg-ink" },
];

export default function PartnershipPage() {
  const primaryPhone = site.phones[0];

  return (
    <>
      <PageHero
        eyebrow="Hamkorlik va media"
        eyebrowIcon={Handshake}
        title="Hamkorlar uchun maʼlumot markazi"
        lead="Ilm-u Ziyo Online haqida gapirmoqchi yoki biz bilan ishlamoqchi boʻlganlar uchun brend, kurslar va aloqa maʼlumotlari bir joyda."
      >
        <ul className="flex flex-wrap gap-2.5">
          {audiences.map((item) => (
            <li
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] font-medium text-ink shadow-card"
            >
              <item.icon className="size-4 text-brand-700" aria-hidden />
              {item.label}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Brend haqida */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading title="Ilm-u Ziyo Online haqida" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Ilm-u Ziyo Online — Ilm-u Ziyo tashkilotining yangi onlayn taʼlim tizimi.
                Tashkilotning oʻzi taʼlim sohasida 15 yildan ortiq tajribaga ega.
              </p>
              <p>
                Tizim oʻquvchilarga oʻzlariga qulay vaqtda taʼlim olish, videodarslar orqali bilim
                egallash, oʻquv qoʻllanmalaridan foydalanish va testlar orqali bilimlarini
                mustahkamlash imkonini beradi. Ilova Android va iOS uchun mavjud.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/platforma" variant="secondary">
                Ilova haqida
              </ButtonLink>
              <ButtonLink href="/kurslar" variant="secondary">
                Barcha kurslar
              </ButtonLink>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-line bg-surface p-7">
            <h3 className="text-sm font-semibold tracking-wide text-brand-800 uppercase">
              Asosiy koʻrsatkichlar
            </h3>
            <ul className="mt-5 divide-y divide-line">
              {stats.map((stat) => (
                <li key={stat.label} className="flex items-baseline gap-4 py-4 first:pt-0">
                  <span className="w-28 shrink-0 text-3xl font-bold tracking-tight text-ink tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[15px] leading-snug text-muted">{stat.description}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{statsNote}</p>
          </div>
        </Container>
      </section>

      {/* Kurslar tavsifi */}
      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Kurslar tavsifi"
            lead="Barcha kurslar uch yoʻnalishga ajratilgan."
          />
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <li
                key={category.id}
                className="reveal rounded-3xl border border-line bg-white p-7 shadow-card"
              >
                <IconTile icon={category.icon} tone="solid" />
                <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{category.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-800">{category.audience}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {coursesByCategory(category.id).map((course) => (
                    <li key={course.slug}>
                      <Link
                        href={`/kurslar/${course.slug}`}
                        className="inline-flex items-center gap-2.5 text-[15px] text-ink transition-colors hover:text-brand-700"
                      >
                        <course.icon className="size-4 text-brand-600" aria-hidden />
                        {course.name}
                        {course.badge ? (
                          <span className="text-sm text-muted">· {course.badge.toLowerCase()}</span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Brend dizayni */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Brend dizayni"
            eyebrowIcon={Palette}
            title="Logotip va ranglar"
            lead="Logotip va brend ranglari namunalari tanishish uchun koʻrsatilgan."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {logoBackgrounds.map((item) => (
              <li key={item.label} className="reveal">
                <div
                  className={cx(
                    "flex aspect-[4/3] items-center justify-center rounded-3xl border border-line select-none",
                    item.className,
                  )}
                >
                  <Image
                    src="/logo.png"
                    alt={`Ilm-u Ziyo Online logotipi — ${item.label.toLowerCase()}`}
                    width={128}
                    height={128}
                    draggable={false}
                    className="pointer-events-none size-28 sm:size-32"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-muted">{item.label}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {palette.map((color) => (
              <li
                key={color.hex}
                className="reveal overflow-hidden rounded-3xl border border-line bg-white shadow-card"
              >
                <div className={cx("h-24 border-b border-line", color.className)} />
                <div className="p-5">
                  <p className="font-semibold text-ink">{color.name}</p>
                  <p className="mt-0.5 font-mono text-sm text-muted">{color.hex}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-col gap-5 rounded-3xl border border-brand-200 bg-brand-50 p-7 sm:flex-row sm:items-center sm:p-8">
            <IconTile icon={Lock} size="lg" tone="white" />
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink">
                Original materiallar soʻrov asosida beriladi
              </h3>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">
                Logotip, reklama bannerlari, videoroliklar va ilova tanishtiruv materiallarining
                asl fayllari saytdan yuklab olinmaydi. Ularni olish uchun tashkilot bilan
                bogʻlaning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Hamkorlik uchun aloqa */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-500 via-brand-400 to-brand-300 px-6 py-12 sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="absolute -right-16 -bottom-24 size-96 rounded-full border-[56px] border-white/20"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl leading-[1.12] font-bold tracking-tight text-ink sm:text-4xl">
                Hamkorlikni boshlaymizmi?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                Hamkorlik takliflari va media materiallar boʻyicha biz bilan bogʻlaning.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={primaryPhone.href} variant="dark">
                  <Phone className="size-4" aria-hidden />
                  {primaryPhone.label}
                </ButtonLink>
                {site.telegram ? (
                  <ButtonLink href={site.telegram} variant="secondary" external>
                    <Send className="size-4" aria-hidden />
                    Telegram orqali yozish
                  </ButtonLink>
                ) : null}
                <ButtonLink href="/boglanish" variant="secondary">
                  Barcha aloqa kanallari
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
