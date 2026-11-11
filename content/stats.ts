// Tashkilot koʻrsatkichlari. Raqamlar oʻzgarsa, faqat shu faylni yangilang.

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  {
    value: "15+",
    label: "yillik tajriba",
    description: "Ilm-u Ziyo tashkilotining taʼlim sohasidagi faoliyati.",
  },
  {
    value: "20 000",
    label: "ga yaqin oʻquvchi",
    description: "Tashkilotda taʼlim olgan oʻquvchilar soni.",
  },
  {
    value: "80%",
    label: "oliy taʼlimga qabul",
    description:
      "Taʼlim olganlar orasida oliy taʼlim muassasalariga qabul qilinganlar ulushi.",
  },
];

export const statsNote =
  "Koʻrsatkichlar Ilm-u Ziyo tashkilotining umumiy faoliyatiga tegishli.";
