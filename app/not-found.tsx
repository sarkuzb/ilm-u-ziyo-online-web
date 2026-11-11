import { ArrowRight, Compass } from "lucide-react";
import { ButtonLink, Container, IconTile } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-linear-to-b from-brand-50 to-white py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <IconTile icon={Compass} size="lg" tone="solid" />
        <p className="mt-6 text-sm font-semibold tracking-wide text-brand-800 uppercase">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Sahifa topilmadi
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
          Bu manzilda sahifa yoʻq. Bosh sahifaga qayting yoki kurslar bilan tanishing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">
            Bosh sahifa
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/kurslar" variant="secondary">
            Kurslar
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
