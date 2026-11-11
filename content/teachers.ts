// Mutaxassislar roʻyxati. Yangi mutaxassis qoʻshish uchun roʻyxatga yangi element yozing.
// courseSlug — content/courses.ts dagi kurs "slug"i bilan bir xil boʻlishi kerak.

export type Teacher = {
  name: string;
  subject: string;
  courseSlug: string;
  grade: string;
  experience: string;
};

export const teachers: Teacher[] = [
  {
    name: "Sobir Omonov",
    subject: "Matematika",
    courseSlug: "matematika",
    grade: "A+ daraja",
    experience: "15 yillik ustoz",
  },
  {
    name: "Shahboz Tursunov",
    subject: "Kimyo",
    courseSlug: "kimyo",
    grade: "A+ daraja",
    experience: "10 yillik ustoz",
  },
  {
    name: "Jamila Yuldosheva",
    subject: "Biologiya",
    courseSlug: "biologiya",
    grade: "A+ daraja",
    experience: "10 yillik ustoz",
  },
  {
    name: "Jamshid Qobilov",
    subject: "Ona tili va adabiyot",
    courseSlug: "ona-tili-va-adabiyot",
    grade: "A daraja",
    experience: "10 yillik tajriba",
  },
  {
    name: "Fozil Qoʻyboqarov",
    subject: "Tarix",
    courseSlug: "tarix",
    grade: "A daraja",
    experience: "10 yillik tajriba",
  },
];

export function teacherForCourse(slug: string) {
  return teachers.find((t) => t.courseSlug === slug);
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
