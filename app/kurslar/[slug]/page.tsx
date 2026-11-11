import { ArrowRight, Award, BriefcaseBusiness, Languages, Layers, Phone, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCard, DownloadBand, LearningFlow, PageHero } from "@/components/sections";
import { StoreButtons } from "@/components/StoreButtons";
import { Container, IconTile, SectionHeading, cx } from "@/components/ui";
import { courses, coursesByCategory, getCategory, getCourse } from "@/content/courses";
import { features } from "@/content/features";
import { site } from "@/content/site";
import { initials, teacherForCourse } from "@/content/teachers";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};

  const category = getCategory(course.category);
  const title =
    course.category === "bolajonlar"
      ? `${course.name} — bolajonlar uchun kurs`
      : course.category === "milliy-sertifikat"
        ? `${course.name} — milliy sertifikatga tayyorlov`
        : `${course.name} kursi`;

  return {
    title,
    description: `${course.summary} ${category.title} yoʻnalishi, Ilm-u Ziyo Online ilovasida.`,
    alternates: { canonical: `/kurslar/${course.slug}` },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const category = getCategory(course.category);
  const kids = course.category === "bolajonlar";
  const teacher = teacherForCourse(course.slug);
  const others = coursesByCategory(course.category).filter((c) => c.slug !== course.slug);

  const facts = [
    { icon: Layers, label: "Yoʻnalish", value: category.title },
    { icon: Users, label: "Kim uchun", value: course.audience },
    ...(course.badge ? [{ icon: Languages, label: "Dars tili", value: course.badge }] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow={category.title}
        eyebrowIcon={category.icon}
        title={course.name}
        lead={course.summary}
        breadcrumb={[
          { label: "Kurslar", href: "/kurslar" },
          { label: category.title, href: `/kurslar#${category.id}` },
          { label: course.name },
        ]}
      >
        <StoreButtons />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Kurs haqida</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {course.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Asosiy oʻquv imkoniyatlari
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className={cx(
                    "reveal flex items-start gap-4 border border-line bg-white p-5 shadow-card",
                    kids ? "rounded-[1.75rem]" : "rounded-2xl",
                  )}
                >
                  <IconTile icon={feature.icon} size="sm" className={cx(kids && "rounded-full")} />
                  <div>
                    <h3 className="font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{feature.short}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div
              className={cx(
                "border border-line bg-surface p-6",
                kids ? "rounded-[2rem] border-2 border-brand-200 bg-brand-50" : "rounded-3xl",
              )}
            >
              <div className="flex items-center gap-4">
                <IconTile
                  icon={course.icon}
                  size="lg"
                  tone="solid"
                  className={cx(kids && "rounded-full")}
                />
                <p className="text-xl font-bold tracking-tight text-ink">{course.name}</p>
              </div>
              <dl className="mt-6 space-y-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <fact.icon className="mt-0.5 size-5 shrink-0 text-brand-700" aria-hidden />
                    <div>
                      <dt className="text-sm text-muted">{fact.label}</dt>
                      <dd className="font-semibold text-ink">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {teacher ? (
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
                <p className="text-sm font-semibold tracking-wide text-brand-800 uppercase">
                  Kurs mutaxassisi
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex size-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-300 text-lg font-bold text-ink"
                  >
                    {initials(teacher.name)}
                  </span>
                  <div>
                    <p className="text-lg font-bold tracking-tight text-ink">{teacher.name}</p>
                    <p className="text-sm text-muted">{teacher.subject}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[13px] font-semibold text-brand-800 ring-1 ring-brand-200 ring-inset">
                    <Award className="size-3.5" aria-hidden />
                    {teacher.grade}
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[13px] font-medium text-ink ring-1 ring-line ring-inset">
                    <BriefcaseBusiness className="size-3.5" aria-hidden />
                    {teacher.experience}
                  </li>
                </ul>
                <Link
                  href="/mutaxassislar"
                  className="group mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-800"
                >
                  Barcha mutaxassislar
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            ) : null}

            <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
              <p className="font-semibold text-ink">Savolingiz bormi?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Kurs boʻyicha qisqa maslahat uchun qoʻngʻiroq qiling.
              </p>
              <ul className="mt-4 space-y-2">
                {site.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="inline-flex items-center gap-2.5 font-semibold text-ink transition-colors hover:text-brand-700"
                    >
                      <Phone className="size-4 text-brand-600" aria-hidden />
                      {phone.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Dars qanday oʻtadi"
            lead="Har bir darsda test faqat videodars toʻliq koʻrib tugatilgandan keyin ochiladi."
          />
          <div className="mt-10">
            <LearningFlow />
          </div>
        </Container>
      </section>

      {others.length > 0 ? (
        <section className="pt-16 sm:pt-20">
          <Container>
            <SectionHeading title="Shu yoʻnalishdagi boshqa kurslar" />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 3).map((other) => (
                <li key={other.slug}>
                  <CourseCard course={other} kids={kids} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <DownloadBand />
    </>
  );
}
