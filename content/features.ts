import {
  BellRing,
  BookOpen,
  CirclePlay,
  ClipboardCheck,
  Clock,
  Infinity as InfinityIcon,
  MessagesSquare,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// Ilovaning imkoniyatlari. Yangi imkoniyat qoʻshish uchun roʻyxatga yangi element yozing.

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "videodarslar",
    icon: CirclePlay,
    title: "Videodarslar",
    short: "Mavzular tajribali mutaxassislar tayyorlagan videodarslar orqali oʻrganiladi.",
    description:
      "Oʻquvchilar har bir mavzuni tajribali mutaxassislar tomonidan tayyorlangan videodarslar orqali oʻrganadilar.",
  },
  {
    id: "qollanmalar",
    icon: BookOpen,
    title: "Oʻquv qoʻllanmalari",
    short: "Darslarga tegishli qoʻshimcha oʻquv materiallari.",
    description:
      "Darslarga tegishli qoʻshimcha oʻquv materiallari ilovaning oʻzida mavjud — mavzuni mustahkamlash uchun boshqa joydan izlash shart emas.",
  },
  {
    id: "testlar",
    icon: ClipboardCheck,
    title: "Test tizimi",
    short: "Videodars toʻliq koʻrilgandan keyingina tegishli test ochiladi.",
    description:
      "Har bir darsda videodars toʻliq koʻrib tugatilgandan keyingina tegishli testni ishlash imkoniyati ochiladi. Shu tariqa test oʻrganilgan bilimni tekshiradi.",
  },
  {
    id: "rivojlanish",
    icon: TrendingUp,
    title: "Rivojlanishni kuzatish",
    short: "Natijalar va taʼlim jarayonidagi oʻsish koʻz oldingizda.",
    description:
      "Oʻquvchilar oʻz natijalarini va taʼlim jarayonidagi rivojlanishini kuzatib boradilar.",
  },
  {
    id: "eslatmalar",
    icon: BellRing,
    title: "Eslatmalar",
    short: "Ortda qolayotgan oʻquvchini tizim oʻzi xabardor qiladi.",
    description:
      "Oʻquvchi taʼlim jarayonida ortda qolayotgan boʻlsa, tizim tegishli eslatmalar orqali uni xabardor qiladi.",
  },
  {
    id: "aloqa",
    icon: MessagesSquare,
    title: "Oʻqituvchilar bilan aloqa",
    short: "Har bir kurs uchun alohida Telegram guruhi.",
    description:
      "Har bir kurs uchun alohida Telegram guruhi tashkil etilgan. Oʻquvchilar shu guruhlar orqali oʻqituvchilar bilan muloqot qiladilar.",
  },
  {
    id: "erkin-jadval",
    icon: Clock,
    title: "Erkin oʻqish jadvali",
    short: "Darslarni istalgan vaqtda, oʻzingizga qulay tezlikda koʻring.",
    description:
      "Videodarslarni istalgan vaqtda va oʻzingizga qulay tezlikda koʻrish mumkin — jadvalni oʻquvchining oʻzi belgilaydi.",
  },
  {
    id: "muddatsiz",
    icon: InfinityIcon,
    title: "Muddatsiz foydalanish",
    short: "Bir marta xarid qilingan kurs sizda muddatsiz qoladi.",
    description:
      "Kursni bir marta xarid qilgan foydalanuvchi undan muddatsiz foydalanadi.",
  },
];

// Dars jarayoni: videodarsdan natijagacha.
export const learningSteps = [
  {
    icon: CirclePlay,
    title: "Videodarsni koʻring",
    text: "Mavzuni mutaxassis tayyorlagan videodars orqali oʻrganasiz.",
  },
  {
    icon: BookOpen,
    title: "Qoʻllanma bilan mustahkamlang",
    text: "Darsga tegishli qoʻshimcha materiallar bilan ishlaysiz.",
  },
  {
    icon: ClipboardCheck,
    title: "Testni ishlang",
    text: "Videodars toʻliq koʻrib tugatilgach, test ochiladi.",
  },
  {
    icon: TrendingUp,
    title: "Natijani kuzating",
    text: "Oʻsishingizni ilovada kuzatib borasiz.",
  },
];
