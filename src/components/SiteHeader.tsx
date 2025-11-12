import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import pdWordmark from "../img/PD Logo White.png";

interface NavLinkConfig {
  label: string;
  href: string;
  external?: boolean;
}

interface SiteHeaderProps {
  className?: string;
  forceSolid?: boolean;
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
  { label: "INFO", href: "/info" },
];

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  className,
  forceSolid = false,
}) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const lastHoverSoundTime = useRef<number>(0);
  const navigationBlockRef = useRef<boolean>(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Clear hover states when navigating to a new page
  useEffect(() => {
    setHoveredLink(null);
    setIsNavActive(false);
    // Block hover for a brief moment after navigation to prevent immediate re-hover
    navigationBlockRef.current = true;
    setTimeout(() => {
      navigationBlockRef.current = false;
    }, 100);

    // Blur all links to clear focus/hover states
    if (navRef.current) {
      const allLinks = navRef.current.querySelectorAll("a");
      allLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
          link.blur();
        }
      });
    }
  }, [location.pathname]);

  const navClasses = useMemo(() => {
    const isNavSolid = forceSolid || isNavActive || isMenuOpen;
    const navBgClass = forceSolid
      ? "bg-black"
      : isNavSolid
      ? "bg-black/90"
      : "bg-transparent";
    return `fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${navBgClass} ${
      className ?? ""
    }`;
  }, [className, forceSolid, isMenuOpen, isNavActive]);

  const handleNavBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (isMenuOpen || forceSolid) {
        return;
      }
      const nextFocus = event.relatedTarget as Node | null;
      if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
        setIsNavActive(false);
      }
    },
    [forceSolid, isMenuOpen]
  );

  // Check if device is mobile
  const isMobile = useCallback(() => {
    return window.innerWidth < 768 || "ontouchstart" in window;
  }, []);

  // Play hover sound from audio file (desktop only)
  const playHoverSound = useCallback(() => {
    if (isMobile()) return; // Don't play on mobile

    // Debounce: prevent playing if sound was played recently (within 200ms)
    const now = Date.now();
    if (now - lastHoverSoundTime.current < 200) {
      return;
    }
    lastHoverSoundTime.current = now;

    try {
      const audio = new Audio(
        "/audio/UI Sounds/ESM_Scifi_UI_Button_2_Glitch_Morph_Mechanism_Texture_Futuristic.wav"
      );
      audio.volume = 0.4; // Adjust volume (0.0 to 1.0)
      audio.play().catch(() => {
        // Silently fail if audio can't play (user interaction required, etc.)
      });
    } catch (error) {
      // Silently fail if audio can't be created
    }
  }, [isMobile]);

  const getNavLinkClass = (linkHref: string) => {
    const baseClass =
      "inline-flex items-center gap-3 px-1 py-2 text-[0.75rem] tracking-[0.3em] uppercase text-white font-helvetica font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";
    const hoverClass = hoveredLink === linkHref ? "text-accent-light" : "";
    return `${baseClass} ${hoverClass}`;
  };

  return (
    <header
      ref={navRef}
      className={navClasses}
      onMouseEnter={() => {
        if (!forceSolid && !navigationBlockRef.current) {
          setIsNavActive(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMenuOpen && !forceSolid) {
          setIsNavActive(false);
        }
      }}
      onFocus={() => {
        if (!forceSolid) {
          setIsNavActive(true);
        }
      }}
      onBlur={handleNavBlur}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white">
        <a
          href="/"
          aria-label="Perfect Dark — Home"
          className="flex items-center gap-3 shrink-0"
          onMouseEnter={() => {
            if (!navigationBlockRef.current) {
              setHoveredLink("/");
            }
          }}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => {
            setIsMenuOpen(false);
          }}
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
                  className={getNavLinkClass(href)}
                  onMouseEnter={() => {
                    if (!navigationBlockRef.current) {
                      setHoveredLink(href);
                      playHoverSound();
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                  }}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="whitespace-nowrap">{label}</span>
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className={`text-base leading-none transition-opacity duration-200 ${
                        hoveredLink === href ? "opacity-0" : ""
                      } group-focus-within:opacity-0`}
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute text-base leading-none transition-opacity duration-200 ${
                        hoveredLink === href ? "opacity-100" : "opacity-0"
                      } group-focus-within:opacity-100`}
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
                  className="flex items-center justify-between px-6 py-4 text-sm tracking-[0.25em] lowercase font-helvetica font-bold transition-colors duration-200 hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  onMouseEnter={playHoverSound}
                  onMouseLeave={(e) => {
                    e.currentTarget.blur();
                  }}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    e.currentTarget.blur();
                  }}
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
