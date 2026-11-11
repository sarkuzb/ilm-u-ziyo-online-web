import { ArrowRight, Award, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { DownloadBand, PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { initials, teachers } from "@/content/teachers";

export const metadata: Metadata = {
  title: "Mutaxassislar",
  description:
    "Ilm-u Ziyo Online videodarslarini tayyorlovchi mutaxassislar: milliy sertifikatga tayyorlov kurslari ustozlari.",
  alternates: { canonical: "/mutaxassislar" },
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Mutaxassislar"
        eyebrowIcon={Users}
        title="Videodarslarni tajribali ustozlar tayyorlaydi"
        lead="Ilm-u Ziyo Online videodarslari jalb qilingan tajribali mutaxassislar tomonidan tayyorlanadi va oʻtiladi."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-center gap-3">
            <GraduationCap className="size-6 text-brand-700" aria-hidden />
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Milliy sertifikatga tayyorlov
            </h2>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <li
                key={teacher.name}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
              >
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 size-36 rounded-full border-[20px] border-brand-100 transition-colors duration-300 group-hover:border-brand-200"
                />
                <span
                  aria-hidden
                  className="relative flex size-20 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-300 text-2xl font-bold tracking-tight text-ink shadow-[0_12px_24px_-12px_rgb(223_145_17/0.9)]"
                >
                  {initials(teacher.name)}
                </span>

                <h3 className="relative mt-6 text-xl font-bold tracking-tight text-ink">
                  {teacher.name}
                </h3>
                <p className="relative mt-1 font-medium text-brand-800">{teacher.subject}</p>

                <ul className="relative mt-5 space-y-2.5 border-t border-line pt-5">
                  <li className="flex items-center gap-2.5 text-[15px] text-ink">
                    <Award className="size-[18px] text-brand-600" aria-hidden />
                    <span className="font-semibold">{teacher.grade}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[15px] text-ink">
                    <BriefcaseBusiness className="size-[18px] text-brand-600" aria-hidden />
                    {teacher.experience}
                  </li>
                </ul>

                <Link
                  href={`/kurslar/${teacher.courseSlug}`}
                  className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-brand-800"
                >
                  Kurs bilan tanishish
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <DownloadBand />
    </>
  );
}
