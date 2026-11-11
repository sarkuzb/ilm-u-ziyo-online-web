import {
  BookA,
  BookOpenText,
  Dna,
  FlaskConical,
  Globe,
  GraduationCap,
  Landmark,
  Languages,
  PenLine,
  Shapes,
  Sigma,
  Smile,
  type LucideIcon,
} from "lucide-react";

// Kurslar va toifalar. Yangi kurs qoʻshish uchun "courses" roʻyxatiga yangi element yozing —
// kartasi va alohida sahifasi avtomatik paydo boʻladi.

export type CategoryId = "milliy-sertifikat" | "xorijiy-tillar" | "bolajonlar";

export type Category = {
  id: CategoryId;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  audience: string;
};

export type Course = {
  slug: string;
  category: CategoryId;
  icon: LucideIcon;
  name: string;
  badge?: string;
  audience: string;
  summary: string;
  description: string[];
  highlights: string[];
};

export const categories: Category[] = [
  {
    id: "milliy-sertifikat",
    icon: GraduationCap,
    title: "Milliy sertifikatga tayyorlov",
    short: "Besh fan boʻyicha tayyorlov kurslari.",
    description:
      "Matematika, biologiya, kimyo, tarix hamda ona tili va adabiyot fanlaridan milliy sertifikatga tayyorlov. Oʻquvchi yaxshi oʻzlashtirmagan mavzu va boʻlimlariga alohida eʼtibor qaratib, aynan shu yoʻnalishlarda bilimini mustahkamlaydi.",
    audience: "Milliy sertifikat olishga tayyorlanayotgan oʻquvchilar",
  },
  {
    id: "xorijiy-tillar",
    icon: Languages,
    title: "Xorijiy tillar",
    short: "Nemis va turk tillari kurslari.",
    description:
      "Nemis va turk tillarini videodarslar, oʻquv qoʻllanmalari va testlar orqali, oʻzingizga qulay vaqtda oʻrganing.",
    audience: "Xorijiy til oʻrganmoqchi boʻlganlar",
  },
  {
    id: "bolajonlar",
    icon: Smile,
    title: "Bolajonlar uchun kurslar",
    short: "5–6 yoshli bolalar uchun tayyorlov.",
    description:
      "5–6 yoshli bolajonlar uchun rus tilidagi Pismo, Bukvar va Matematika kurslari hamda ingliz tili kursi. Darslar sodda va qiziqarli — bola ota-onasi bilan birga, uyda oʻrganadi.",
    audience: "5–6 yoshli bolalar va ularning ota-onalari",
  },
];

const certificateAudience = "Milliy sertifikat olishga tayyorlanayotgan oʻquvchilar";
const certificateHighlights = ["Videodarslar", "Mavzular boʻyicha testlar", "Telegram guruh"];

const kidsAudience = "5–6 yoshli bolalar va ularning ota-onalari";

function certificateDescription(subject: string): string[] {
  return [
    `${subject} fanidan milliy sertifikatga tayyorlov kursi. Mavzular tajribali mutaxassis tayyorlagan videodarslar orqali tushuntiriladi, darslarga tegishli oʻquv qoʻllanmalari esa ilovaning oʻzida mavjud.`,
    "Oʻquvchi yaxshi oʻzlashtirmagan mavzu va boʻlimlariga alohida eʼtibor qaratib, aynan shu yoʻnalishlarda bilimini mustahkamlashi mumkin.",
  ];
}

export const courses: Course[] = [
  // A. Milliy sertifikatga tayyorlov
  {
    slug: "matematika",
    category: "milliy-sertifikat",
    icon: Sigma,
    name: "Matematika",
    audience: certificateAudience,
    summary: "Matematika fanidan milliy sertifikatga tayyorlov kursi.",
    description: certificateDescription("Matematika"),
    highlights: certificateHighlights,
  },
  {
    slug: "biologiya",
    category: "milliy-sertifikat",
    icon: Dna,
    name: "Biologiya",
    audience: certificateAudience,
    summary: "Biologiya fanidan milliy sertifikatga tayyorlov kursi.",
    description: certificateDescription("Biologiya"),
    highlights: certificateHighlights,
  },
  {
    slug: "kimyo",
    category: "milliy-sertifikat",
    icon: FlaskConical,
    name: "Kimyo",
    audience: certificateAudience,
    summary: "Kimyo fanidan milliy sertifikatga tayyorlov kursi.",
    description: certificateDescription("Kimyo"),
    highlights: certificateHighlights,
  },
  {
    slug: "tarix",
    category: "milliy-sertifikat",
    icon: Landmark,
    name: "Tarix",
    audience: certificateAudience,
    summary: "Tarix fanidan milliy sertifikatga tayyorlov kursi.",
    description: certificateDescription("Tarix"),
    highlights: certificateHighlights,
  },
  {
    slug: "ona-tili-va-adabiyot",
    category: "milliy-sertifikat",
    icon: BookOpenText,
    name: "Ona tili va adabiyot",
    audience: certificateAudience,
    summary: "Ona tili va adabiyot fanidan milliy sertifikatga tayyorlov kursi.",
    description: certificateDescription("Ona tili va adabiyot"),
    highlights: certificateHighlights,
  },

  // B. Xorijiy tillar
  {
    slug: "nemis-tili",
    category: "xorijiy-tillar",
    icon: Languages,
    name: "Nemis tili",
    audience: "Nemis tilini oʻrganmoqchi boʻlganlar",
    summary: "Nemis tilini videodarslar orqali, oʻzingizga qulay vaqtda oʻrganing.",
    description: [
      "Nemis tili kursi videodarslar, oʻquv qoʻllanmalari va testlardan iborat. Har bir darsdan keyin test orqali oʻrganilgan mavzu mustahkamlanadi.",
      "Darslarni istalgan vaqtda va oʻzingizga qulay tezlikda koʻrishingiz, savollaringizni esa kursning Telegram guruhida oʻqituvchiga berishingiz mumkin.",
    ],
    highlights: ["Videodarslar", "Oʻquv qoʻllanmalari", "Telegram guruh"],
  },
  {
    slug: "turk-tili",
    category: "xorijiy-tillar",
    icon: Globe,
    name: "Turk tili",
    audience: "Turk tilini oʻrganmoqchi boʻlganlar",
    summary: "Turk tilini videodarslar orqali, oʻzingizga qulay vaqtda oʻrganing.",
    description: [
      "Turk tili kursi videodarslar, oʻquv qoʻllanmalari va testlardan iborat. Har bir darsdan keyin test orqali oʻrganilgan mavzu mustahkamlanadi.",
      "Darslarni istalgan vaqtda va oʻzingizga qulay tezlikda koʻrishingiz, savollaringizni esa kursning Telegram guruhida oʻqituvchiga berishingiz mumkin.",
    ],
    highlights: ["Videodarslar", "Oʻquv qoʻllanmalari", "Telegram guruh"],
  },

  // C. Bolajonlar uchun kurslar
  {
    slug: "pismo",
    category: "bolajonlar",
    icon: PenLine,
    name: "Pismo",
    badge: "Rus tilida",
    audience: kidsAudience,
    summary: "Bolajonlarni yozuvga oʻrgatish kursi.",
    description: [
      "Pismo — 5–6 yoshli bolajonlarni yozuvga oʻrgatadigan, rus tilidagi kurs.",
      "Darslar videodars shaklida boʻlgani uchun bola ularni ota-onasi bilan birga, oʻziga qulay vaqtda va qulay tezlikda koʻra oladi.",
    ],
    highlights: ["Yozuvga oʻrgatish", "Videodarslar", "Qulay vaqtda"],
  },
  {
    slug: "bukvar",
    category: "bolajonlar",
    icon: BookA,
    name: "Bukvar",
    badge: "Rus tilida",
    audience: kidsAudience,
    summary: "Harflar va alifboni oʻrganish kursi.",
    description: [
      "Bukvar — 5–6 yoshli bolajonlar harflar va alifboni oʻrganadigan, rus tilidagi kurs.",
      "Darslar videodars shaklida boʻlgani uchun bola ularni ota-onasi bilan birga, oʻziga qulay vaqtda va qulay tezlikda koʻra oladi.",
    ],
    highlights: ["Harflar va alifbo", "Videodarslar", "Qulay vaqtda"],
  },
  {
    slug: "bolalar-matematikasi",
    category: "bolajonlar",
    icon: Shapes,
    name: "Matematika",
    badge: "Rus tilida",
    audience: kidsAudience,
    summary: "Bolalar uchun matematik tayyorgarlik kursi.",
    description: [
      "5–6 yoshli bolajonlar uchun matematik tayyorgarlik kursi. Darslar rus tilida olib boriladi.",
      "Darslar videodars shaklida boʻlgani uchun bola ularni ota-onasi bilan birga, oʻziga qulay vaqtda va qulay tezlikda koʻra oladi.",
    ],
    highlights: ["Matematik tayyorgarlik", "Videodarslar", "Qulay vaqtda"],
  },
  {
    slug: "bolalar-ingliz-tili",
    category: "bolajonlar",
    icon: Languages,
    name: "Ingliz tili",
    audience: kidsAudience,
    summary: "5–6 yoshli bolalar uchun umumlashtirilgan ingliz tili kursi.",
    description: [
      "5–6 yoshli bolajonlar uchun umumlashtirilgan ingliz tili kursi.",
      "Darslar videodars shaklida boʻlgani uchun bola ularni ota-onasi bilan birga, oʻziga qulay vaqtda va qulay tezlikda koʻra oladi.",
    ],
    highlights: ["Ingliz tili", "Videodarslar", "Qulay vaqtda"],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function coursesByCategory(id: CategoryId) {
  return courses.filter((c) => c.category === id);
}
