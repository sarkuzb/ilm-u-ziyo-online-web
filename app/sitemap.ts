import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...nav.map((item) => item.href)];
  const coursePages = courses.map((course) => `/kurslar/${course.slug}`);

  return [...pages, ...coursePages].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/kurslar/") ? 0.7 : 0.8,
  }));
}
