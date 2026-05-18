import React, { useCallback } from "react";
import Marquee from "react-fast-marquee";
import { SiteHeader } from "../components/SiteHeader";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";
import { SITE_NAME, SITE_URL, toAbsoluteUrl } from "../config/site";

interface GalleryItem {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  href: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy";
}

const standardTileSizes =
  "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw";
const featureTileSizes = "100vw";

const optimizedImage = (
  name: string,
  smallWidth: number,
  largeWidth: number,
  sizes = standardTileSizes
) => ({
  src: `/images/optimized/${name}.jpg`,
  srcSet: `/images/optimized/${name}@800.jpg ${smallWidth}w, /images/optimized/${name}.jpg ${largeWidth}w`,
  sizes,
});

const galleryItems: GalleryItem[] = [
  {
    ...optimizedImage("film-hero", 1000, 2000),
    alt: "Perfect Dark shirt overlooking snow-covered mountains",
    href: "https://shop.perfectdark909.com/products/energy-systems-tee-charcoal",
    className: "sm:col-span-1 sm:row-span-2 lg:col-span-4 lg:row-span-2",
    fetchPriority: "high",
    loading: "eager",
  },
  {
    ...optimizedImage("film-6", 663, 1326),
    alt: "Perfect Dark shirt facing a lion on film",
    href: "https://shop.perfectdark909.com/products/rules-of-the-rave-hoodie",
    className: "pd-rotate-left lg:col-span-4",
  },
  {
    ...optimizedImage("film-2", 663, 1326),
    alt: "Perfect Dark black hoodie graphic detail on film",
    href: "https://shop.perfectdark909.com/products/rules-of-the-rave-hoodie",
    className: "lg:col-span-4",
  },
  {
    ...optimizedImage("film-3", 663, 1326),
    alt: "Perfect Dark mountain portrait on film",
    href: "https://shop.perfectdark909.com/products/energy-systems-tee-charcoal",
    className: "lg:col-span-4",
  },
  {
    ...optimizedImage("film-4", 1000, 2000),
    alt: "Snow-covered mountain landscape on film",
    href: "https://shop.perfectdark909.com/collections/all",
    className: "lg:col-span-4",
  },
  {
    ...optimizedImage("film-speakers", 663, 1060),
    alt: "Perfect Dark event crowd on film",
    href: "https://shop.perfectdark909.com/products/energy-systems-tee-limited-edition-arctic-glacier-blue",
    className: "lg:col-span-6",
  },
  {
    ...optimizedImage("bunker-1", 1000, 1600),
    alt: "Bunker March 6 SIAH x Perfect Dark x Bit Crusher event photo",
    href: "https://shop.perfectdark909.com/products/energy-systems-tee-limited-edition-arctic-glacier-blue",
    className: "lg:col-span-3",
  },
  {
    ...optimizedImage("bunker-2", 1000, 1600),
    alt: "Bunker March 6 SIAH x Perfect Dark x Bit Crusher crowd photo",
    href: "https://shop.perfectdark909.com/collections/all",
    className: "lg:col-span-3",
  },
  {
    ...optimizedImage("bunker-main", 1000, 1600, featureTileSizes),
    alt: "Bunker March 6 SIAH x Perfect Dark x Bit Crusher dance floor",
    href: "https://shop.perfectdark909.com/collections/all",
    className: "sm:col-span-2 lg:col-span-12",
  },
];

const modularHeroItems = galleryItems.slice(0, 3);
const splitGalleryItems = galleryItems.slice(3, 5);
const modularSecondItems = galleryItems.slice(5, 8);
const featureGalleryItem = galleryItems[8];

const ticketUrl = "https://ra.co/events/2440881";
const ticketText =
  "PERFECT DARK // RESURRECTION // LOS ANGELES // RESIDENT ADVISOR";

const GalleryTile: React.FC<GalleryItem> = ({
  src,
  srcSet,
  sizes,
  alt,
  href,
  className,
  fetchPriority,
  loading,
}) => {
  const handleClick = useCallback(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: alt,
        content_category: "Merch Gallery",
        content_type: "product_group",
        destination_url: href,
      });
    }
  }, [alt, href]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={`pd-media-tile focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${className ?? ""}`}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading ?? "lazy"}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </a>
  );
};

export const Home: React.FC = () => {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Perfect Dark 909",
    description:
      "Perfect Dark is a California-based electronic music label, clothing brand, and artist collective focused on underground techno, events, releases, and environmental initiatives.",
    url: SITE_URL,
    logo: toAbsoluteUrl("/logo512.png"),
    sameAs: [
      "https://perfectdark909.bandcamp.com",
      "https://soundcloud.com/perfectdark909",
      "https://instagram.com/perfectdark909",
      "https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi",
      "https://shop.perfectdark909.com",
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Chico, California",
    },
    areaServed: {
      "@type": "Place",
      name: "California, United States",
    },
    knowsAbout: [
      "Techno",
      "Electronic music",
      "Underground events",
      "Artist booking",
      "Environmental music initiatives",
      "Techno clothing",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Official website for Perfect Dark, a California electronic music label, clothing brand, and artist collective.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <div className="pd-page min-h-screen">
      <SEO
        title="Perfect Dark | Electronic Music Label & Collective"
        description="Perfect Dark is a record label, clothing brand, and artist collective."
        keywords="Perfect Dark, techno merch, electronic music label, underground fashion"
        canonical="/"
        structuredData={[organizationStructuredData, websiteStructuredData]}
      />
      <h1 className="sr-only">
        Perfect Dark - Record Label, Clothing Brand, and Artist Collective
      </h1>

      <SiteHeader />

      <main>
        <section className="pt-[54px] md:pt-[52px]">
          <div className="pd-ev-modular">
            {modularHeroItems.map((item, index) => (
              <GalleryTile
                key={item.alt}
                {...item}
                className={
                  index === 1 ? "pd-ev-span-large" : "pd-ev-span-small"
                }
              />
            ))}
          </div>

          <div className="pd-ev-split">
            {splitGalleryItems.map((item) => (
              <GalleryTile
                key={item.alt}
                {...item}
                className="pd-ev-split-tile"
              />
            ))}
          </div>

          <div className="pd-ev-modular">
            {modularSecondItems.map((item, index) => (
              <GalleryTile
                key={item.alt}
                {...item}
                className={
                  index === 1 ? "pd-ev-span-large" : "pd-ev-span-small"
                }
              />
            ))}
          </div>

          <div className="pd-ev-feature">
            <GalleryTile
              {...featureGalleryItem}
              className="pd-ev-feature-tile"
            />
          </div>
        </section>

        <section className="pd-ticket-ticker-wrap" aria-label="Event tickets">
          <a
            href={ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="pd-ticket-ticker"
          >
            <Marquee gradient={false} speed={105} autoFill>
              <span className="pd-ticket-text">{ticketText}</span>
            </Marquee>
          </a>
        </section>
      </main>

      <footer className="pd-footer">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
