"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { cx } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-[border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-line shadow-[0_8px_24px_-18px_rgb(92_55_0/0.35)]"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Asosiy menyu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx(
                    "rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "bg-brand-50 text-brand-800"
                      : "text-muted hover:bg-brand-50/70 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-[15px] font-semibold text-ink shadow-[0_8px_20px_-8px_rgb(223_145_17/0.7)] transition duration-200 hover:bg-brand-400 active:scale-[0.98] sm:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            Yuklab olish
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-brand-50 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobil menyu"
          className="animate-rise border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx(
                    "block rounded-xl px-4 py-3 text-base font-medium",
                    isActive(item.href) ? "bg-brand-50 text-brand-800" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href={site.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-ink"
              >
                <Download className="size-4" aria-hidden />
                Ilovani yuklab olish
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
