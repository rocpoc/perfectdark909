import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../components/Container";
import logo from "../img/logo.jpg";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import pdWordmark from "../img/PD Logo White.png";
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
  <div className="text-2xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold can-hover:hover:text-emerald-300">
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
}> = ({ src, alt, href, className, onClick }) => {
  const tileClasses = `group relative block h-full w-full overflow-hidden bg-transparent ${
    className ?? ""
  }`;

  const content = (
    <>
      <img
        src={src}
        alt={alt}
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
      href: "https://ra.co/events/2262010",
      text: "DJ Fuckoff & X-Coast - Perfect Dark x Public Works — 11.8",
    },
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

  const [isNavActive, setIsNavActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleNavBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (isMenuOpen) {
      return;
    }
    const nextFocus = event.relatedTarget as Node | null;
    if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
      setIsNavActive(false);
    }
  };

  const navLinks: { label: string; href: string; external?: boolean }[] = [
    {
      label: "STORE",
      href: "https://shop.perfectdark909.com",
      external: true,
    },
    {
      label: "LABEL",
      href: "https://perfectdark909.bandcamp.com",
      external: true,
    },
    { label: "ARTISTS", href: "/artists" },
    { label: "INFO", href: "/about" },
  ];

  const galleryLink = "https://shop.perfectdark909.com/collections/all";

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

  const isNavSolid = isNavActive || isMenuOpen;
  const navBgClass = isNavSolid ? "bg-black/90" : "bg-transparent";
  const navLinkClass =
    "inline-flex items-center gap-3 px-1 py-2 text-[0.75rem] tracking-[0.3em] uppercase text-white font-helvetica font-bold transition-colors duration-200 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <div className="min-h-screen flex flex-col bg-black">
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

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${navBgClass}`}
        onMouseEnter={() => setIsNavActive(true)}
        onMouseLeave={() => {
          if (!isMenuOpen) {
            setIsNavActive(false);
          }
        }}
        onFocus={() => setIsNavActive(true)}
        onBlur={handleNavBlur}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white">
          <a
            href="/"
            aria-label="Perfect Dark — Home"
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={pdWordmark}
              alt="Perfect Dark"
              className="h-10 w-auto max-w-[180px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] md:h-12"
            />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 md:gap-8">
              {navLinks.map(({ label, href, external }) => (
                <li key={label} className="group">
                  <a
                    href={href}
                    className={navLinkClass}
                    onClick={() => setIsMenuOpen(false)}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <span className="whitespace-nowrap">{label}</span>
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="text-base leading-none transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute text-base leading-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        -
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="pd-mobile-nav"
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded border border-white/30 bg-black/40 text-white font-helvetica font-bold transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => {
              setIsMenuOpen((prev) => {
                const next = !prev;
                setIsNavActive(next);
                return next;
              });
            }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
        <div
          id="pd-mobile-nav"
          className={`md:hidden overflow-hidden border-t border-white/15 bg-black/95 text-white transition-[max-height,opacity] duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav>
            <ul className="flex flex-col divide-y divide-white/10">
              {navLinks.map(({ label, href, external }) => (
                <li key={`mobile-${label}`} className="group">
                  <a
                    href={href}
                    className="flex items-center justify-between px-6 py-4 text-sm tracking-[0.25em] lowercase font-helvetica font-bold transition-colors duration-200 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    onClick={() => setIsMenuOpen(false)}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <span>{label}</span>
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="text-base leading-none transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0"
                      >
                        +
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute text-base leading-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        -
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative w-full bg-[#dbe3b8] -mt-[84px] pt-[84px] md:-mt-[96px] md:pt-[96px] md:min-h-screen md:h-screen overflow-hidden">
        <GalleryTile
          src="/images/ATX 25.jpg"
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
            src="/images/ATX 25 (1).jpg"
            alt="Perfect Dark long sleeve detail"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark long sleeve detail")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:row-start-1"
          />
          <GalleryTile
            src="/images/ATX 25 (2).jpg"
            alt="Perfect Dark web graphic close-up"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark web graphic close-up")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:row-start-2"
          />
          <GalleryTile
            src="/images/ATX 25 (3).jpg"
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
            src="/images/ATX 25 (4).jpg"
            alt="Perfect Dark botanical graphics detail"
            href={galleryLink}
            onClick={handleMerchTileClick(
              "Perfect Dark botanical graphics detail"
            )}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-1"
          />
          <GalleryTile
            src="/images/ATX 25 R1 08039 005A.JPG"
            alt="Perfect Dark cap back embroidery"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark cap back embroidery")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-4 md:row-start-2"
          />
          <GalleryTile
            src="/images/ATX 25 R1 0001.JPG"
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
            src="/images/show-010.jpg"
            alt="Perfect Dark live show crowd"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark live show crowd")}
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
          />
          <GalleryTile
            src="/images/show-011.jpg"
            alt="Perfect Dark performer close-up"
            href={galleryLink}
            onClick={handleMerchTileClick("Perfect Dark performer close-up")}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-1"
          />
          <GalleryTile
            src="/images/show-012.jpg"
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
          className="relative z-40 w-full bg-black px-6 py-28 mt-28 mb-28 min-h-[65vh] flex items-center justify-center"
        >
          <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-4">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
              LATEST
            </span>

            {newsItems.map((item, index) => (
              <NewsItem key={index} href={item.href}>
                {item.text}
              </NewsItem>
            ))}
          </div>
        </section>

        <div className="pointer-events-none">
          <div
            className="fixed left-0 right-0 flex justify-center z-10 pointer-events-auto transition-all duration-500"
            style={{ bottom: isBeforeLatest ? "0.75rem" : "1rem" }}
          >
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
      </Container>

      <div ref={footerSentinelRef} className="h-32" />

      {/* Footer stays visible regardless of menu state */}
      <footer
        ref={footerRef}
        className={`fixed bottom-0 left-0 right-0 bg-black border-t border-white/20 z-40 text-white font-helvetica font-bold transition-transform duration-500 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3">
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="https://perfect-dark.kit.com/044179ba9e"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-white rounded text-sm text-white font-helvetica font-bold bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                Subscribe
              </a>
            </div>
            <div className="text-center md:text-right text-xs text-white space-x-6 md:space-x-6">
              <a
                href="https://soundcloud.com/perfectdark909"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-200"
              >
                SOUNDCLOUD
              </a>
              <a
                href="https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=3ec803cb982644a3"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-200"
              >
                SPOTIFY
              </a>
              <a
                href="https://instagram.com/perfectdark909"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-200"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
