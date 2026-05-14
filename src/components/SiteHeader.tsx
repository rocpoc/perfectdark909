import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
        id="pd-menu-drawer"
        className={`pd-menu-drawer ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="pd-drawer-top">
          <button
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
