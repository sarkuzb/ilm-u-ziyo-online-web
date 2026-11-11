import { LayoutGrid, Users } from "lucide-react";
import type { Metadata } from "next";
import { CourseCard, DownloadBand, PageHero } from "@/components/sections";
import { Container, IconTile, cx } from "@/components/ui";
import { categories, coursesByCategory } from "@/content/courses";

export const metadata: Metadata = {
  title: "Kurslar",
  description:
    "Ilm-u Ziyo Online kurslari: milliy sertifikatga tayyorlov (matematika, biologiya, kimyo, tarix, ona tili va adabiyot), nemis va turk tillari, 5–6 yoshli bolajonlar uchun kurslar.",
  alternates: { canonical: "/kurslar" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurslar"
        eyebrowIcon={LayoutGrid}
        title="Barcha taʼlim yoʻnalishlari"
        lead="Kurslar uch toifaga ajratilgan: milliy sertifikatga tayyorlov, xorijiy tillar va bolajonlar uchun kurslar."
      >
        <ul className="flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] font-medium text-ink shadow-card transition duration-200 hover:border-brand-300 hover:bg-brand-50"
              >
                <category.icon className="size-4 text-brand-700" aria-hidden />
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      {categories.map((category) => {
        const kids = category.id === "bolajonlar";
        const list = coursesByCategory(category.id);

        return (
          <section
            key={category.id}
            id={category.id}
            className={cx("py-16 sm:py-20", kids && "relative overflow-hidden bg-brand-50")}
          >
            {kids ? (
              <>
                <span
                  aria-hidden
                  className="absolute -top-16 -left-16 size-56 rounded-full bg-brand-200/60"
                />
                <span
                  aria-hidden
                  className="absolute top-24 right-[8%] size-8 rounded-full bg-brand-400/60"
                />
                <span
                  aria-hidden
                  className="absolute right-[-4rem] bottom-[-4rem] size-64 rounded-full border-[36px] border-brand-200/70"
                />
              </>
            ) : null}

            <Container className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <IconTile
                  icon={category.icon}
                  size="lg"
                  tone="solid"
                  className={cx(kids && "rounded-full")}
                />
                <div className="max-w-2xl">
                  <h2 className="text-3xl leading-[1.12] font-bold tracking-tight text-ink sm:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{category.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
                    <Users className="size-4" aria-hidden />
                    {category.audience}
                  </p>
                </div>
              </div>

              <ul
                className={cx(
                  "mt-10 grid gap-5 sm:grid-cols-2",
                  list.length === 2 ? "lg:grid-cols-2" : kids ? "lg:grid-cols-4" : "lg:grid-cols-3",
                )}
              >
                {list.map((course) => (
                  <li key={course.slug}>
                    <CourseCard course={course} kids={kids} />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <DownloadBand />
    </>
  );
}
