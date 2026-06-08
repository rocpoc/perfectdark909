import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    label: "Shop",
    href: "https://shop.perfectdark909.com",
    external: true,
  },
  { label: "Info", href: "/info" },
  { label: "Artists", href: "/artists" },
  { label: "Contact", href: "/contact" },
  {
    label: "Label",
    href: "https://perfectdark909.bandcamp.com",
    external: true,
  },
];

const HeaderLink: React.FC<NavLinkConfig & { onClick?: () => void }> = ({
  label,
  href,
  external,
  onClick,
}) => {
  const className =
    "pd-header-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
};

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const getFocusableElements = () =>
      Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    drawer.addEventListener("keydown", handleKeyDown);
    return () => drawer.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const headerClass = [
    "pd-header",
    "pd-header--solid",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="pd-wrapper">
          <div className="pd-header-grid">
            <Link
              to="/"
              aria-label="Perfect Dark home"
              className="pd-logo-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <img src={pdWordmark} alt="Perfect Dark" className="pd-logo" />
            </Link>

            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="pd-header-nav">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <HeaderLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pd-header-actions">
              <button
                ref={menuButtonRef}
                type="button"
                className="pd-header-link lg:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="pd-menu-drawer"
                onClick={() => setIsMenuOpen(true)}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`pd-drawer-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <aside
        ref={drawerRef}
        id="pd-menu-drawer"
        className={`pd-menu-drawer ${isMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <div className="pd-drawer-top">
          <button
            ref={closeButtonRef}
            type="button"
            className="pd-header-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="pd-drawer-nav">
          {NAV_LINKS.map((link) => (
            <HeaderLink
              key={link.label}
              {...link}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </nav>

      </aside>
    </>
  );
};
