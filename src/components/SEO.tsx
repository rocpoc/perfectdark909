import React from "react";
import { Helmet } from "react-helmet-async";
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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@perfectdark909" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {structuredDataItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};
