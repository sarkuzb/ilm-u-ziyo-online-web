import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — bosh sahifa`}
      className="group inline-flex items-center gap-2.5"
    >
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 transition-transform duration-300 group-hover:rotate-[-6deg]"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-bold tracking-tight text-ink">Ilm-u Ziyo</span>
        <span className="mt-1 text-[11px] font-semibold tracking-[0.22em] text-brand-700 uppercase">
          Online
        </span>
      </span>
    </Link>
  );
}
