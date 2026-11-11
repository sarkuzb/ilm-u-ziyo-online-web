import { ClipboardCheck, GraduationCap, History, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import { DownloadBand, PageHero, StatsGrid } from "@/components/sections";
import { ButtonLink, Container, IconTile, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Natijalar",
  description:
    "Ilm-u Ziyo tashkiloti koʻrsatkichlari: 15+ yillik tajriba, 20 000 ga yaqin oʻquvchi, taʼlim olganlarning 80% i oliy taʼlim muassasalariga qabul qilingan.",
  alternates: { canonical: "/natijalar" },
};

const reasons = [
  {
    icon: History,
    title: "Tashkilot tajribasi",
    text: "Ilm-u Ziyo tashkiloti taʼlim sohasida 15 yildan ortiq faoliyat yuritadi. Ilm-u Ziyo Online — uning yangi onlayn yoʻnalishi.",
  },
  {
    icon: Users,
    title: "Tajribali mutaxassislar",
    text: "Videodarslar tajribali mutaxassislar tomonidan tayyorlanadi va oʻtiladi.",
  },
  {
    icon: ClipboardCheck,
    title: "Puxta metodika",
    text: "Test faqat videodars toʻliq koʻrib tugatilgandan keyin ochiladi — bilim tartib bilan mustahkamlanadi.",
  },
  {
    icon: GraduationCap,
    title: "Aniq maqsad",
    text: "Milliy sertifikatga tayyorlovda oʻquvchi oʻzlashtirmagan mavzulariga alohida eʼtibor qaratadi.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Natijalar"
        eyebrowIcon={TrendingUp}
        title="Raqamlarda Ilm-u Ziyo"
        lead="Ilm-u Ziyo Online — yangi onlayn taʼlim tizimi. Uning ortida Ilm-u Ziyo tashkilotining 15 yildan ortiq tajribasi turadi."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <StatsGrid />
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Ishonch nimaga asoslanadi"
            lead="Tashkilot tajribasi, mutaxassislar va oʻqitish tartibi."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="reveal flex items-start gap-5 rounded-3xl border border-line bg-white p-7 shadow-card"
              >
                <IconTile icon={reason.icon} size="lg" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">{reason.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/mutaxassislar">Mutaxassislar bilan tanishish</ButtonLink>
            <ButtonLink href="/platforma" variant="secondary">
              Ilova haqida
            </ButtonLink>
          </div>
        </Container>
      </section>

      <DownloadBand />
    </>
  );
}
