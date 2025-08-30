import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

type Item = { label: string; to: string; external?: boolean };

const DEFAULT_ITEMS: Item[] = [
  {
    label: "Store",
    to: "https://perfectdark909.myshopify.com",
    external: true,
  },
  { label: "Events", to: "/music" }, // or a dedicated /events later
  { label: "Label", to: "/about" },
  { label: "Artists", to: "/artists" },
  { label: "Archive", to: "/archive" },
  { label: "Info", to: "/environment" },
];

export default function NavBar({ items = DEFAULT_ITEMS }: { items?: Item[] }) {
  const { pathname } = useLocation();
  const isActive = (to: string) =>
    useMemo(() => pathname === to, [pathname, to]);

  return (
    <nav className="pd-navbar">
      <div className="pd-navbar__inner">
        <Link
          className="pd-navbar__brand"
          to="/"
          aria-label="Perfect Dark — Home"
        >
          PERFECT&nbsp;DARK
        </Link>
        <ul className="pd-navbar__list">
          {items.map((it) => (
            <li key={it.label}>
              {it.external ? (
                <a
                  className={`pd-navbar__link ${
                    isActive(it.to) ? "is-active" : ""
                  }`}
                  href={it.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  {it.label}
                </a>
              ) : (
                <Link
                  className={`pd-navbar__link ${
                    isActive(it.to) ? "is-active" : ""
                  }`}
                  to={it.to}
                >
                  {it.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
