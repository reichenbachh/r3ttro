import type { MetaDescriptor } from "react-router";

// Change this once the site has its own domain; canonical, OG, sitemap and robots all read it.
export const SITE_URL = "https://r3ttro-nine.vercel.app";
export const SITE_NAME = "George Wiredu Ansong";

export function seo({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): MetaDescriptor[] {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/og.png`;
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${SITE_NAME}, Frontend / Backend / Mobile` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
