import React, { useCallback, useMemo, useState } from "react";
import pdWordmark from "../img/PD Logo White.png";

interface NavLinkConfig {
  label: string;
  href: string;
  external?: boolean;
}

interface SiteHeaderProps {
  className?: string;
}

const NAV_LINKS: NavLinkConfig[] = [
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

export const SiteHeader: React.FC<SiteHeaderProps> = ({ className }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClasses = useMemo(() => {
    const isNavSolid = isNavActive || isMenuOpen;
    const navBgClass = isNavSolid ? "bg-black/90" : "bg-transparent";
    return `fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${navBgClass} ${className ?? ""}`;
  }, [className, isMenuOpen, isNavActive]);

  const handleNavBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (isMenuOpen) {
        return;
      }
      const nextFocus = event.relatedTarget as Node | null;
      if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
        setIsNavActive(false);
      }
    },
    [isMenuOpen]
  );

  const navLinkClass =
    "inline-flex items-center gap-3 px-1 py-2 text-[0.75rem] tracking-[0.3em] uppercase text-white font-helvetica font-bold transition-colors duration-200 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <header
      className={navClasses}
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
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={pdWordmark}
            alt="Perfect Dark"
            className="h-10 w-auto max-w-[180px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] md:h-12"
          />
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 md:gap-8">
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label} className="group">
                <a
                  href={href}
                  className={navLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
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
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={`mobile-${label}`} className="group">
                <a
                  href={href}
                  className="flex items-center justify-between px-6 py-4 text-sm tracking-[0.25em] lowercase font-helvetica font-bold transition-colors duration-200 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  onClick={() => setIsMenuOpen(false)}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
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
  );
};


