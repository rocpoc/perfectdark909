import React, { useState } from "react";
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
}> = ({ src, alt, href, className }) => {
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
      >
        {content}
      </a>
    );
  }

  return <div className={tileClasses}>{content}</div>;
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
      label: "store",
      href: "https://shop.perfectdark909.com",
      external: true,
    },
    {
      label: "label",
      href: "https://perfectdark909.bandcamp.com",
      external: true,
    },
    { label: "artists", href: "/artists" },
    { label: "info", href: "/about" },
  ];

  const galleryLink = "https://shop.perfectdark909.com/collections/all";

  const isNavSolid = isNavActive || isMenuOpen;
  const navBgClass = isNavSolid ? "bg-black/90" : "bg-transparent";
  const navLinkClass =
    "inline-flex items-center gap-3 px-1 py-2 text-[0.75rem] tracking-[0.3em] lowercase text-white font-helvetica font-bold transition-colors duration-200 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div
          className={`absolute top-0 left-0 right-0 z-20 border-b border-white/20 transition-colors duration-300 ${navBgClass}`}
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
        </div>
      </section>

      <section className="relative h-screen w-full bg-[#dbe3b8]">
        <div className="grid h-full w-full md:grid-cols-5">
          <div className="grid h-full md:col-span-2 grid-rows-2">
            <GalleryTile
              src="/images/ATX 25.jpg"
              alt="Perfect Dark apparel in forest canopy"
              href={galleryLink}
              className="h-full"
            />
            <GalleryTile
              src="/images/ATX 25 (1).jpg"
              alt="Perfect Dark long sleeve detail"
              href={galleryLink}
              className="h-full"
            />
          </div>
          <div className="md:col-span-3">
            <GalleryTile
              src="/images/ATX 25 (2).jpg"
              alt="Perfect Dark web graphic close-up"
              href={galleryLink}
              className="h-full"
            />
          </div>
        </div>
      </section>

      <section className="relative h-screen w-full bg-[#e4ebc6]">
        <div className="grid h-full w-full md:grid-cols-5">
          <div className="md:col-span-3">
            <GalleryTile
              src="/images/ATX 25 (3).jpg"
              alt="Perfect Dark nature walk lookbook"
              href={galleryLink}
              className="h-full"
            />
          </div>
          <div className="grid h-full md:col-span-2 grid-rows-2">
            <GalleryTile
              src="/images/ATX 25 (4).jpg"
              alt="Perfect Dark botanical graphics detail"
              href={galleryLink}
              className="h-full"
            />
            <GalleryTile
              src="/images/ATX 25 R1 08039 005A.JPG"
              alt="Perfect Dark cap back embroidery"
              href={galleryLink}
              className="h-full"
            />
          </div>
        </div>
      </section>

      <Container showToolbar={false}>
        {/* Centered section (leave headroom for fixed footer & icons) */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-3 mx-auto max-w-2xl">
          <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
            LATEST
          </span>
          <div className="h-4" />

          {newsItems.map((item, index) => (
            <div key={index} className="mb-3">
              <NewsItem href={item.href}>{item.text}</NewsItem>
            </div>
          ))}
        </section>

        {/* Fixed icons bar in black area above footer (hide when menu open) */}
        <div className="fixed left-0 right-0 bottom-28 flex justify-center z-50">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </Container>

      {/* Footer stays visible regardless of menu state */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/20 z-40 text-white font-helvetica font-bold">
        <div className="max-w-6xl mx-auto px-4 py-3">
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
              <a href="/about" className="hover:text-emerald-200">
                ABOUT
              </a>
              <a href="/contact" className="hover:text-emerald-200">
                CONTACT
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
