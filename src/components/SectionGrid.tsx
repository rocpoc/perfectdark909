import { Link } from "react-router-dom";

export type Tile = {
  title: string;
  subtitle?: string;
  href: string;
  external?: boolean;
};

export default function SectionGrid({ tiles }: { tiles: Tile[] }) {
  return (
    <section className="pd-grid">
      {tiles.map((t) =>
        t.external ? (
          <a
            key={t.title}
            className="pd-tile"
            href={t.href}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="pd-tile__title">{t.title}</h3>
            {t.subtitle && <p className="pd-tile__subtitle">{t.subtitle}</p>}
          </a>
        ) : (
          <Link key={t.title} className="pd-tile" to={t.href}>
            <h3 className="pd-tile__title">{t.title}</h3>
            {t.subtitle && <p className="pd-tile__subtitle">{t.subtitle}</p>}
          </Link>
        )
      )}
    </section>
  );
}
