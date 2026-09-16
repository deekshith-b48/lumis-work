import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/solutions",
    "/pricing",
    "/work",
    "/expertise",
    "/process",
    "/about",
    "/contact",
  ];
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
