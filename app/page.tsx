import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Handshake,
  Infinity as InfinityIcon,
  LayoutGrid,
  PhoneCall,
  Route,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadBand, LearningFlow, StatsGrid } from "@/components/sections";
import { StoreButtons } from "@/components/StoreButtons";
import { ButtonLink, Container, Eyebrow, IconTile, SectionHeading, cx } from "@/components/ui";
import { categories, coursesByCategory } from "@/content/courses";
import { features, learningSteps } from "@/content/features";
import { stats } from "@/content/stats";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -top-10 -right-8 size-72 rounded-full border-[40px] border-brand-200/60 sm:size-80"
      />
      <div
        aria-hidden
        className="dot-grid absolute -bottom-8 -left-8 size-48 [mask-image:radial-gradient(black,transparent_70%)]"
      />

      <div className="relative rounded-[2.25rem] border border-line bg-white/90 p-5 shadow-lift backdrop-blur sm:p-7">
        <div className="flex items-center gap-4 border-b border-line pb-5">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-200 ring-inset">
            <Image src="/logo.png" alt="" width={48} height={48} priority className="size-12" />
          </span>
          <div>
            <p className="text-lg font-bold tracking-tight text-ink">Ilm-u Ziyo Online</p>
            <p className="text-sm text-muted">Har bir dars — toʻrt qadam</p>
          </div>
        </div>

        <ol className="relative mt-5 space-y-3 before:absolute before:top-8 before:bottom-8 before:left-8 before:w-px before:bg-linear-to-b before:from-brand-400 before:via-brand-300 before:to-brand-100">
          {learningSteps.map((step, index) => (
            <li
              key={step.title}
              className="animate-rise relative flex items-center gap-4 rounded-2xl p-2 transition-colors duration-200 hover:bg-brand-50/70"
              style={{ animationDelay: `${180 + index * 110}ms` }}
            >
              <IconTile icon={step.icon} tone={index === 2 ? "solid" : "white"} />
              <div className="min-w-0">
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="text-sm leading-snug text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="animate-float absolute -top-8 right-8 hidden items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:flex">
        <IconTile icon={InfinityIcon} size="sm" tone="solid" />
        <p className="text-sm leading-tight font-semibold text-ink">
          Muddatsiz
          <span className="block font-normal text-muted">foydalanish</span>
        </p>
      </div>

      <div
        className="animate-float absolute right-2 -bottom-6 hidden items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:flex lg:-right-6"
        style={{ animationDelay: "-3.5s" }}
      >
        <IconTile icon={Clock} size="sm" tone="soft" />
        <p className="text-sm leading-tight font-semibold text-ink">
          Erkin jadval
          <span className="block font-normal text-muted">istalgan vaqtda</span>
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white">
        <Container className="grid items-center gap-16 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
          <div className="animate-rise">
            <Eyebrow icon={BadgeCheck}>Ilm-u Ziyo tashkilotining onlayn taʼlim tizimi</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl">
              Oʻzingizga{" "}
              <span className="relative whitespace-nowrap text-brand-700">
                qulay vaqtda
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-300"
                >
                  <path
                    d="M2 9 C 70 2, 150 2, 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              bilim oling
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Ilm-u Ziyo Online — 15 yildan ortiq taʼlim tajribasiga asoslangan mobil ilova.
              Videodarslar, oʻquv qoʻllanmalari va testlar bir joyda.
            </p>

            <StoreButtons className="mt-8" />

            <Link
              href="/kurslar"
              className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-800"
            >
              Kurslar bilan tanishish
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>

            <ul className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-7">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-ink tabular-nums sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </Container>
      </section>

      {/* Taʼlim yoʻnalishlari */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Taʼlim yoʻnalishlari"
              eyebrowIcon={LayoutGrid}
              title="Uch yoʻnalish, bitta ilova"
              lead="Milliy sertifikatga tayyorlovdan bolajonlar uchun ilk darslargacha."
            />
            <ButtonLink href="/kurslar" variant="secondary">
              Barcha kurslar
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {categories.map((category) => {
              const kids = category.id === "bolajonlar";
              return (
                <Link
                  key={category.id}
                  href={`/kurslar#${category.id}`}
                  className={cx(
                    "reveal group relative flex flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift",
                    kids
                      ? "rounded-[2.25rem] border-2 border-brand-200 bg-brand-50 hover:border-brand-400"
                      : "rounded-3xl border border-line bg-white shadow-card hover:border-brand-300",
                  )}
                >
                  {kids ? (
                    <>
                      <span
                        aria-hidden
                        className="absolute -top-6 -right-6 size-24 rounded-full bg-brand-200/70"
                      />
                      <span
                        aria-hidden
                        className="absolute top-14 right-16 size-5 rounded-full bg-brand-400/70"
                      />
                    </>
                  ) : null}
                  <IconTile
                    icon={category.icon}
                    size="lg"
                    tone="solid"
                    className={cx("relative", kids && "rounded-full")}
                  />
                  <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-ink">
                    {category.title}
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {coursesByCategory(category.id).map((course) => (
                      <li
                        key={course.slug}
                        className="rounded-full bg-white px-3 py-1 text-[13px] font-medium text-ink ring-1 ring-line ring-inset"
                      >
                        {course.name}
                      </li>
                    ))}
                  </ul>
                  <span className="relative mt-auto inline-flex items-center gap-1.5 pt-7 text-[15px] font-semibold text-brand-800">
                    Kurslarni koʻrish
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Afzalliklar */}
      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Platforma afzalliklari"
              eyebrowIcon={Sparkles}
              title="Oʻqish uchun kerakli hamma narsa"
              lead="Ilova oʻquvchiga mustaqil, lekin nazorat ostida oʻqish imkonini beradi."
            />
            <ButtonLink href="/platforma" variant="secondary">
              Platforma haqida
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="reveal group rounded-3xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
              >
                <IconTile
                  icon={feature.icon}
                  className="transition-colors duration-300 group-hover:bg-brand-100"
                />
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{feature.short}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Metodika */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Taʼlim metodikasi"
            eyebrowIcon={Route}
            title="Avval dars, keyin test"
            lead="Har bir darsda test faqat videodars toʻliq koʻrib tugatilgandan keyin ochiladi — bilim tartib bilan mustahkamlanadi."
          />
          <div className="mt-12">
            <LearningFlow />
          </div>
        </Container>
      </section>

      {/* Statistika */}
      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Ishonch asoslari"
              eyebrowIcon={TrendingUp}
              title="15 yildan ortiq tajriba ortida turgan natijalar"
              lead="Ilm-u Ziyo Online — tashkilotning koʻp yillik taʼlim tajribasi asosida yaratilgan."
            />
            <ButtonLink href="/natijalar" variant="secondary">
              Natijalar
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
          <div className="mt-12">
            <StatsGrid />
          </div>
        </Container>
      </section>

      <DownloadBand />

      {/* Hamkorlik va bogʻlanish */}
      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-5 md:grid-cols-2">
          {[
            {
              href: "/hamkorlik",
              icon: Handshake,
              title: "Hamkorlik va media",
              text: "Blogerlar, reklama agentliklari, marketologlar va hamkorlar uchun brend hamda kurslar haqida maʼlumot.",
              cta: "Hamkorlik sahifasi",
            },
            {
              href: "/boglanish",
              icon: PhoneCall,
              title: "Bogʻlanish",
              text: "Kurslar boʻyicha savolingiz bormi? Qoʻngʻiroq qiling — qisqa maslahat beramiz.",
              cta: "Aloqa maʼlumotlari",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="reveal group flex items-start gap-5 rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
            >
              <IconTile icon={item.icon} size="lg" />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold tracking-tight text-ink">{item.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-800">
                  {item.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
