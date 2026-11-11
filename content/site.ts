// Saytning umumiy maʼlumotlari. Aloqa va havolalarni shu yerdan yangilang.

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Ilm-u Ziyo Online",
  organization: "Ilm-u Ziyo",
  tagline: "Onlayn taʼlim tizimi",
  description:
    "Ilm-u Ziyo Online — 15 yildan ortiq tajribaga ega Ilm-u Ziyo tashkilotining yangi onlayn taʼlim tizimi. Videodarslar, oʻquv qoʻllanmalari va testlar bitta mobil ilovada.",

  // Domen ulangach, Vercel'da NEXT_PUBLIC_SITE_URL oʻzgaruvchisini kiriting (masalan: https://ilmuziyo.uz).
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),

  // Bitta havola qurilmaga qarab Google Play yoki App Store'ga yoʻnaltiradi.
  appLink: "https://onelink.to/gkdygk",

  phones: [
    { label: "+998 55 519 99 44", href: "tel:+998555199944" },
    { label: "+998 90 668 88 68", href: "tel:+998906688868" },
  ],

  // Rasmiy Telegram havolasi berilganda shu yerga yozing — tugmalar saytda oʻzi paydo boʻladi.
  // Masalan: "https://t.me/kanal_nomi"
  telegram: "",

  // Ijtimoiy tarmoqlar: { label: "Instagram", href: "https://..." } koʻrinishida qoʻshing.
  socials: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Kurslar", href: "/kurslar" },
  { label: "Platforma", href: "/platforma" },
  { label: "Mutaxassislar", href: "/mutaxassislar" },
  { label: "Natijalar", href: "/natijalar" },
  { label: "Hamkorlik", href: "/hamkorlik" },
  { label: "Bogʻlanish", href: "/boglanish" },
];
