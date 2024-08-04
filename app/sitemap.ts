import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.useTemus.com",
      lastModified: new Date(),
    },
    {
      url: "https://demo.useTemus.com/demo",
      lastModified: new Date(),
    },
  ];
}
