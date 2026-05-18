import React, { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME, toAbsoluteUrl } from "../config/site";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export type JsonLd = { [key: string]: JsonLdValue };

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  robots?: string;
  structuredData?: JsonLd | JsonLd[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonical,
  robots,
  structuredData,
}) => {
  const fullTitle = title.includes("Perfect Dark")
    ? title
    : `${title} | Perfect Dark`;

  const canonicalUrl = canonical
    ? toAbsoluteUrl(canonical)
    : typeof window !== "undefined"
    ? toAbsoluteUrl(window.location.pathname)
    : toAbsoluteUrl("/");
  const ogImageUrl = toAbsoluteUrl(ogImage);
  const structuredDataItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const structuredDataJson = JSON.stringify(structuredDataItems);

  useEffect(() => {
    const upsertMeta = (
      selector: string,
      attributes: Record<string, string>,
      content: string
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);

      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([name, value]) => {
          element?.setAttribute(name, value);
        });
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
      element.dataset.pdSeo = "true";
    };

    const removeMeta = (selector: string) => {
      document.head
        .querySelectorAll<HTMLMetaElement>(`${selector}[data-pd-seo="true"]`)
        .forEach((element) => element.remove());
    };

    document.title = fullTitle;

    upsertMeta('meta[name="title"]', { name: "title" }, fullTitle);
    upsertMeta(
      'meta[name="description"]',
      { name: "description" },
      description
    );

    if (robots) {
      upsertMeta('meta[name="robots"]', { name: "robots" }, robots);
    } else {
      removeMeta('meta[name="robots"]');
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords" }, keywords);
    } else {
      removeMeta('meta[name="keywords"]');
    }

    upsertMeta('meta[property="og:type"]', { property: "og:type" }, ogType);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, fullTitle);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, ogImageUrl);
    upsertMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      SITE_NAME
    );
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_US");

    upsertMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image"
    );
    upsertMeta('meta[name="twitter:url"]', { name: "twitter:url" }, canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, fullTitle);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description
    );
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, ogImageUrl);
    upsertMeta('meta[name="twitter:site"]', { name: "twitter:site" }, "@perfectdark909");

    let canonicalElement =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", canonicalUrl);
    canonicalElement.dataset.pdSeo = "true";

    document.head
      .querySelectorAll<HTMLScriptElement>('script[data-pd-seo-jsonld="true"]')
      .forEach((element) => element.remove());

    JSON.parse(structuredDataJson).forEach((item: JsonLd) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pdSeoJsonld = "true";
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [
    canonicalUrl,
    description,
    fullTitle,
    keywords,
    ogImageUrl,
    ogType,
    robots,
    structuredDataJson,
  ]);

  return null;
};
