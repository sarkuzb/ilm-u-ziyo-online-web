import { Phone, Send } from "lucide-react";
import Link from "next/link";
import { categories } from "@/content/courses";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { StoreButtons } from "./StoreButtons";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
            Ilm-u Ziyo tashkilotining koʻp yillik tajribasiga asoslangan onlayn taʼlim tizimi.
          </p>
          <StoreButtons className="mt-6" />
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">Sahifalar</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-muted transition-colors hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">Yoʻnalishlar</h2>
          <ul className="mt-4 space-y-2.5">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/kurslar#${category.id}`}
                  className="text-[15px] text-muted transition-colors hover:text-brand-700"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">Bogʻlanish</h2>
          <ul className="mt-4 space-y-3">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="inline-flex items-center gap-2.5 text-[15px] font-medium text-ink transition-colors hover:text-brand-700"
                >
                  <Phone className="size-4 text-brand-600" aria-hidden />
                  {phone.label}
                </a>
              </li>
            ))}
            {site.telegram ? (
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] font-medium text-ink transition-colors hover:text-brand-700"
                >
                  <Send className="size-4 text-brand-600" aria-hidden />
                  Telegram
                </a>
              </li>
            ) : null}
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-muted transition-colors hover:text-brand-700"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Barcha huquqlar himoyalangan.
          </p>
          <p>Rasmiy tanishtiruv sayti</p>
        </Container>
      </div>
    </footer>
  );
}
