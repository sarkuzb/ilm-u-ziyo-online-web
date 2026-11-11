import { ArrowRight, ChevronRight, Info, LockOpen, Smartphone, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Course } from "@/content/courses";
import { learningSteps } from "@/content/features";
import { stats, statsNote } from "@/content/stats";
import { StoreButtons } from "./StoreButtons";
import { Container, Eyebrow, IconTile, cx } from "./ui";

/* ---------- Ichki sahifalar sarlavhasi ---------- */

export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  lead: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-brand-50 to-white">
      <div
        aria-hidden
        className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-80 rounded-full border-[44px] border-brand-200/50"
      />
      <Container className="relative py-16 sm:py-20">
        {breadcrumb ? (
          <nav aria-label="Yoʻl" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {index > 0 ? <ChevronRight className="size-3.5" aria-hidden /> : null}
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-brand-700">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-ink">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="max-w-3xl animate-rise">
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Kurs kartasi ---------- */

export function CourseCard({ course, kids = false }: { course: Course; kids?: boolean }) {
  return (
    <Link
      href={`/kurslar/${course.slug}`}
      className={cx(
        "reveal group relative flex h-full flex-col bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift",
        kids
          ? "rounded-[2rem] border-2 border-brand-200 hover:border-brand-400"
          : "rounded-3xl border border-line shadow-card hover:border-brand-300",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <IconTile
          icon={course.icon}
          size="lg"
          tone={kids ? "solid" : "soft"}
          className={cx(
            "transition-transform duration-300 group-hover:scale-105",
            kids && "rounded-full group-hover:rotate-[-8deg]",
          )}
        />
        {course.badge ? (
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-200 ring-inset">
            {course.badge}
          </span>
        ) : null}
      </div>

      <h3 className={cx("mt-5 font-bold tracking-tight text-ink", kids ? "text-2xl" : "text-xl")}>
        {course.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-800">{course.audience}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{course.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {course.highlights.map((item) => (
          <li
            key={item}
            className="rounded-full bg-surface px-3 py-1 text-[13px] font-medium text-ink ring-1 ring-line ring-inset"
          >
            {item}
          </li>
        ))}
      </ul>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-brand-800">
        Batafsil
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}

/* ---------- Statistika ---------- */

export function StatsGrid({ note = true }: { note?: boolean }) {
  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="reveal relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-card"
          >
            <div
              aria-hidden
              className="absolute -top-10 -right-10 size-32 rounded-full border-[18px] border-brand-100"
            />
            <p className="relative">
              <span className="block text-5xl font-bold tracking-tight text-ink tabular-nums sm:text-6xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-base font-semibold text-brand-800">
                {stat.label}
              </span>
            </p>
            <p className="relative mt-4 text-[15px] leading-relaxed text-muted">
              {stat.description}
            </p>
          </li>
        ))}
      </ul>
      {note ? (
        <p className="mt-5 flex items-start gap-2 text-sm text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
          {statsNote}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Dars jarayoni: 4 qadam ---------- */

export function LearningFlow() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {learningSteps.map((step, index) => (
        <li
          key={step.title}
          className="reveal relative rounded-3xl border border-line bg-white p-6 shadow-card"
        >
          <div className="flex items-center justify-between">
            <IconTile icon={step.icon} tone="solid" />
            <span className="text-4xl font-bold tracking-tight text-brand-200 tabular-nums">
              0{index + 1}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{step.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
          {index === 2 ? (
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[13px] font-semibold text-brand-800 ring-1 ring-brand-200 ring-inset">
              <LockOpen className="size-3.5" aria-hidden />
              Darsdan keyin ochiladi
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ---------- Ilovani yuklab olish bloki ---------- */

export function DownloadBand({
  title = "Ilovani yuklab oling va oʻqishni boshlang",
  text = "Ilm-u Ziyo Online ilovasi Android va iOS qurilmalari uchun Google Play hamda App Store doʻkonlarida mavjud.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-500 via-brand-400 to-brand-300 px-6 py-12 sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="absolute -right-16 -bottom-24 size-96 rounded-full border-[56px] border-white/20"
          />
          <div
            aria-hidden
            className="absolute top-8 right-10 hidden size-28 items-center justify-center rounded-full bg-white shadow-lift md:flex lg:right-24 lg:size-36"
          >
            <Image src="/logo.png" alt="" width={96} height={96} className="size-16 lg:size-24" />
          </div>

          <div className="relative max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/35 px-3.5 py-1.5 text-[13px] font-semibold text-ink">
              <Smartphone className="size-4" aria-hidden />
              Mobil ilova
            </p>
            <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{text}</p>
            <StoreButtons className="mt-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
