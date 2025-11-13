import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../components/Container";
import { SiteHeader } from "../components/SiteHeader";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { SEO } from "../components/SEO";
import logo from "../img/logo.jpg";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import bc_logo from "../img/icons bc.png";
import ig_logo from "../img/icons-insta-01.png";
import spotify_logo from "../img/icons-spotify-01.png";
import soundcloud_logo from "../img/icons-soundcloud-01.png";
import sticker_pack from "../img/sticker-pack.png";
import special from "../img/eseip.png";

interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <div className="px-2">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt} className="w-10 h-10" />
    </a>
  </div>
);

const NewsItem: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <div className="text-2xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold can-hover:hover:text-accent">
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </div>
);

const GalleryTile: React.FC<{
  src: string;
  alt: string;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
  srcSet?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
}> = ({ src, alt, href, className, onClick, srcSet, sizes, loading }) => {
  const tileClasses = `group relative block h-full w-full overflow-hidden bg-transparent ${
    className ?? ""
  }`;

  const imageLoading = loading ?? "lazy";

  const content = (
    <>
      <img
        src={src}
        alt={alt}
        loading={imageLoading}
        decoding="async"
        srcSet={srcSet}
        sizes={sizes}
        className="h-full w-full object-cover transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-focus-within:scale-105"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/10 group-focus-within:bg-white/10"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${tileClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={tileClasses} onClick={onClick}>
      {content}
    </div>
  );
};

export const Home: React.FC = () => {
  const newsItems = [
    {
      href: "https://perfectdark909.bandcamp.com/album/night-drive",
      text: "Solitaire — Night Drive",
    },
    {
      href: "https://shop.perfectdark909.com",
      text: "Fall 25 Merch 🍁",
    },
  ];

  const socialLinks = [
    {
      href: "https://soundcloud.com/perfectdark909",
      icon: soundcloud_logo,
      alt: "SoundCloud",
    },
    {
      href: "https://perfectdark909.bandcamp.com",
      icon: bc_logo,
      alt: "Bandcamp",
    },
    {
      href: "https://instagram.com/perfectdark909",
      icon: ig_logo,
      alt: "Instagram",
    },
    {
      href: "https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=3ec803cb982644a3",
      icon: spotify_logo,
      alt: "Spotify",
    },
  ];

  const latestSectionRef = useRef<HTMLDivElement | null>(null);
  const latestTriggerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const footerSentinelRef = useRef<HTMLDivElement | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isBeforeLatest, setIsBeforeLatest] = useState(true);

  useEffect(() => {
    const sentinel = footerSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const trigger = latestTriggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBeforeLatest(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-120px 0px 0px 0px" }
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, []);

  const galleryLink = "https://shop.perfectdark909.com/collections/all";
  const heroTileSizes = "100vw";
  const merchTileSizes =
    "(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 20vw";

  const handleMerchTileClick = useCallback(
    (tileLabel: string) =>
      (_event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "ViewContent", {
            content_name: tileLabel,
            content_category: "Merch Gallery",
            content_type: "product_group",
            content_ids: ["home-merch-gallery"],
            destination_url: galleryLink,
          });
        }
      },
    [galleryLink]
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Perfect Dark",
    description:
      "Perfect Dark is a California-based electronic music label and collective specializing in techno, hosting underground events, and releasing cutting-edge electronic music.",
    url: "https://perfectdark909.com",
    logo: "https://perfectdark909.com/logo512.png",
    sameAs: [
      "https://perfectdark909.bandcamp.com",
      "https://soundcloud.com/perfectdark909",
      "https://instagram.com/perfectdark909",
      "https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi",
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Chico, California",
    },
    areaServed: {
      "@type": "Place",
      name: "California, United States",
    },
    genre: ["Techno", "Electronic Music", "Dance Music"],
  };

  const brandStructuredData = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "Perfect Dark",
    description:
      "Perfect Dark is an independent techno clothing brand and record label based in California. We create underground fashion and electronic music apparel for the techno community.",
    url: "https://perfectdark909.com",
    logo: "https://perfectdark909.com/logo512.png",
    sameAs: [
      "https://shop.perfectdark909.com",
      "https://perfectdark909.bandcamp.com",
      "https://soundcloud.com/perfectdark909",
      "https://instagram.com/perfectdark909",
    ],
    category: [
      "Clothing",
      "Streetwear",
      "Electronic Music Apparel",
      "Techno Fashion",
      "Underground Fashion",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <SEO
        title="Perfect Dark | Electronic Music Label & Collective | California Techno"
        description="Perfect Dark is a record label, clothing brand, and artist collective."
        keywords="Perfect Dark, Perfect Dark techno, electronic music label california, california techno, west-coast techno, techno merch, techno streetwear, electronic music apparel, underground fashion, Perfect Dark clothing, techno clothing brand"
        canonical="/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandStructuredData),
        }}
      />
      {/* SEO: H1 heading for search engines */}
      <h1 className="sr-only">
        Perfect Dark - Record Label, Clothing Brand, and Artist Collective
      </h1>
      {/* Hero video temporarily disabled */}
      {/**
       * <section className="relative h-screen w-full overflow-hidden">
       *   <video
       *     className="absolute inset-0 h-full w-full object-cover"
       *     src="/videos/hero1.mp4"
       *     autoPlay
       *     loop
       *     muted
       *     playsInline
       *     aria-hidden="true"
       *   />
       *   <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
       *   {...nav overlay previously here}
       * </section>
       */}

      <SiteHeader />

      <section className="relative w-full bg-[#dbe3b8] -mt-[84px] pt-[84px] md:-mt-[96px] md:pt-[96px] md:min-h-screen md:h-screen overflow-hidden">
        <GalleryTile
          src="/images/optimized/merch-hero.jpg"
          srcSet="/images/optimized/merch-hero@800.jpg 1000w, /images/optimized/merch-hero.jpg 2000w"
          sizes={heroTileSizes}
          loading="eager"
          alt="Perfect Dark apparel in forest canopy"
          href={galleryLink}
          onClick={handleMerchTileClick(
            "Perfect Dark apparel in forest canopy"
          )}
          className="w-full h-full"
        />
      </section>

      <section className="relative w-full bg-[#e4ebc6] md:min-h-screen md:h-screen overflow-hidden">
        <div className="grid h-full w-full grid-cols-2 md:grid-cols-5 md:grid-rows-2 auto-rows-[minmax(160px,1fr)] md:auto-rows-[1fr] grid-flow-dense">
          <GalleryTile
            src="/images/optimized/merch-1.jpg"
            srcSet="/images/optimized/merch-1@800.jpg 1000w, /images/optimized/merch-1.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark long sleeve detail"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark long sleeve detail")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:row-start-1"
          />
          <GalleryTile
            src="/images/optimized/merch-2.jpg"
            srcSet="/images/optimized/merch-2@800.jpg 1000w, /images/optimized/merch-2.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark web graphic close-up"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark web graphic close-up")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:row-start-2"
          />
          <GalleryTile
            src="/images/optimized/merch-3.jpg"
            srcSet="/images/optimized/merch-3@800.jpg 1000w, /images/optimized/merch-3.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark nature walk lookbook"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark nature walk lookbook")}
            className="col-span-2 row-span-2 md:col-span-3 md:row-span-2 md:col-start-3"
          />
        </div>
      </section>

      <section className="relative w-full bg-[#d6e1ad] md:min-h-screen md:h-screen overflow-hidden">
        <div className="grid h-full w-full grid-cols-2 md:grid-cols-5 md:grid-rows-2 auto-rows-[minmax(160px,1fr)] md:auto-rows-[1fr] grid-flow-dense">
          <GalleryTile
            src="/images/optimized/merch-4.jpg"
            srcSet="/images/optimized/merch-4@800.jpg 1000w, /images/optimized/merch-4.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark botanical graphics detail"
            href={galleryLink}
            onClick={handleMerchTileClick(
              "Perfect Dark botanical graphics detail"
            )}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-1"
          />
          <GalleryTile
            src="/images/optimized/merch-6.jpg"
            srcSet="/images/optimized/merch-6@800.jpg 1000w, /images/optimized/merch-6.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark cap back embroidery"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark cap back embroidery")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-2"
          />
          <GalleryTile
            src="/images/optimized/merch-5.jpg"
            srcSet="/images/optimized/merch-5@800.jpg 1000w, /images/optimized/merch-5.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark forest polaroid"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark forest polaroid")}
            className="col-span-2 row-span-2 md:col-span-3 md:row-span-2 md:col-start-1"
          />
        </div>
      </section>

      <section className="relative w-full bg-[#cfe0b2] md:min-h-screen md:h-screen overflow-hidden">
        <div className="grid h-full w-full grid-cols-2 md:grid-cols-4 md:grid-rows-2 auto-rows-[minmax(160px,1fr)] md:auto-rows-[1fr] grid-flow-dense">
          <GalleryTile
            src="/images/optimized/show-010.jpg"
            srcSet="/images/optimized/show-010@800.jpg 1000w, /images/optimized/show-010.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark live show crowd"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark live show crowd")}
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          />
          <GalleryTile
            src="/images/optimized/show-011.jpg"
            srcSet="/images/optimized/show-011@800.jpg 1000w, /images/optimized/show-011.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark performer close-up"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark performer close-up")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-1"
          />
          <GalleryTile
            src="/images/optimized/show-012.jpg"
            srcSet="/images/optimized/show-012@800.jpg 1000w, /images/optimized/show-012.jpg 2000w"
            sizes={merchTileSizes}
            alt="Perfect Dark booth detail"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark booth detail")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-2"
          />
        </div>
      </section>

      <div ref={latestTriggerRef} className="h-1" />

      <Container showToolbar={false} showMarquee={false}>
        {/* Centered section (leave headroom for fixed footer & icons) */}
        <section
          ref={latestSectionRef}
          className="relative z-40 w-full bg-black px-6 min-h-screen flex items-center justify-center pt-64"
        >
          <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-4">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-accent">
              LATEST
            </span>

            {newsItems.map((item, index) => (
              <NewsItem key={index} href={item.href}>
                {item.text}
              </NewsItem>
            ))}
          </div>
        </section>
      </Container>

      <div ref={footerSentinelRef} className="h-32" />

      {/* Footer stays visible regardless of menu state */}
      <footer
        ref={footerRef}
        className={`fixed bottom-0 left-0 right-0 bg-black border-t border-white/20 z-40 text-white font-helvetica font-bold transition-transform duration-500 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <FooterSubscribe />
      </footer>
    </div>
  );
};
