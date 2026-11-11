import { Lock, LockOpen, MonitorPlay, Route, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import { DownloadBand, LearningFlow, PageHero } from "@/components/sections";
import { StoreButtons } from "@/components/StoreButtons";
import { Container, IconTile, SectionHeading } from "@/components/ui";
import { features } from "@/content/features";

export const metadata: Metadata = {
  title: "Platforma haqida",
  description:
    "Ilm-u Ziyo Online ilovasi qanday ishlaydi: videodarslar, oʻquv qoʻllanmalari, test tizimi, rivojlanishni kuzatish, eslatmalar va Telegram guruhlari.",
  alternates: { canonical: "/platforma" },
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platforma haqida"
        eyebrowIcon={Smartphone}
        title="Ilovada taʼlim qanday tashkil etilgan"
        lead="Ilm-u Ziyo Online — Android va iOS uchun mobil ilova. Oʻquvchi videodarslarni koʻradi, qoʻllanmalar bilan ishlaydi, testlar orqali bilimini mustahkamlaydi va oʻsishini kuzatib boradi."
      >
        <StoreButtons />
      </PageHero>

      {/* Metodika */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Taʼlim metodikasi"
            eyebrowIcon={Route}
            title="Har bir dars — toʻrt qadam"
            lead="Darslar bir xil tartibda oʻtadi: avval mavzu oʻrganiladi, keyin bilim tekshiriladi."
          />
          <div className="mt-12">
            <LearningFlow />
          </div>

          <div className="reveal mt-8 grid items-center gap-8 rounded-[2rem] border border-brand-200 bg-brand-50 p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Test faqat darsdan keyin ochiladi
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
                Har bir darsda videodars toʻliq koʻrib tugatilgandan keyingina tegishli testni
                ishlash imkoniyati ochiladi. Bu — Ilm-u Ziyo Online taʼlim jarayonining asosiy
                metodik xususiyatlaridan biri.
              </p>
            </div>
            <div className="flex items-center gap-3" aria-hidden>
              <span className="flex flex-col items-center gap-2">
                <IconTile icon={MonitorPlay} size="lg" tone="white" />
                <span className="text-xs font-semibold text-muted">Videodars</span>
              </span>
              <span className="mb-6 h-px w-8 bg-brand-300 sm:w-12" />
              <span className="flex flex-col items-center gap-2">
                <IconTile icon={Lock} size="lg" tone="white" />
                <span className="text-xs font-semibold text-muted">Test yopiq</span>
              </span>
              <span className="mb-6 h-px w-8 bg-brand-300 sm:w-12" />
              <span className="flex flex-col items-center gap-2">
                <IconTile icon={LockOpen} size="lg" tone="solid" />
                <span className="text-xs font-semibold text-brand-800">Test ochiq</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Imkoniyatlar */}
      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Ilovaning asosiy imkoniyatlari"
            lead="Sakkizta imkoniyat — oʻquvchi mustaqil va tartibli oʻqishi uchun."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <li
                key={feature.id}
                id={feature.id}
                className="reveal group flex items-start gap-5 rounded-3xl border border-line bg-white p-7 shadow-card transition duration-300 hover:border-brand-300 hover:shadow-lift"
              >
                <IconTile icon={feature.icon} size="lg" tone={index === 2 ? "solid" : "soft"} />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <DownloadBand
        title="Ilova Android va iOS uchun mavjud"
        text="Ilm-u Ziyo Online rasman Google Play va Apple App Store doʻkonlarida joylashtirilgan."
      />
    </>
  );
}
