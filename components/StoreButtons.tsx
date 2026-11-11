import { Apple, Play } from "lucide-react";
import { site } from "@/content/site";
import { cx } from "./ui";

const stores = [
  { name: "Google Play", icon: Play, hint: "Android uchun" },
  { name: "App Store", icon: Apple, hint: "iPhone uchun" },
];

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      {stores.map(({ name, icon: Icon, hint }) => (
        <a
          key={name}
          href={site.appLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ilovani ${name} orqali yuklab olish`}
          className="group inline-flex items-center gap-3 rounded-2xl bg-ink py-2.5 pr-6 pl-4 text-white shadow-[0_10px_24px_-12px_rgb(31_26_20/0.7)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#33291d] active:scale-[0.98]"
        >
          <Icon
            className="size-7 text-brand-300 transition-transform duration-200 group-hover:scale-110"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-medium text-white/65">{hint}</span>
            <span className="text-[17px] font-semibold tracking-tight">{name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
