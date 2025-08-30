import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import SectionGrid, { Tile } from "../components/SectionGrid";

export const Home: React.FC = () => {
  const featuredReleases = [
    {
      title: "Freeman 713 - Weapons: Fully Reloaded",
      subtitle: "Latest Release",
      href: "https://perfectdark909.bandcamp.com/album/weapons-fully-reloaded",
      external: true,
      image: "/img/tracks-4-trees.jpeg",
    },
    {
      title: "Provider - Isolation Seeker",
      subtitle: "Preorder Available",
      href: "https://perfectdark909.bandcamp.com/album/isolation-seeker",
      external: true,
      image: "/img/tracks-4-trees.jpeg",
    },
    {
      title: "Brick - Underground SF",
      subtitle: "Live Performance",
      href: "https://youtu.be/KVwyvPVrV94?si=SLnL_Q97i333YN7-",
      external: true,
      image: "/img/tracks-4-trees.jpeg",
    },
    {
      title: "Saroc - Paralysis EP",
      subtitle: "New EP",
      href: "https://fanlink.tv/pd11",
      external: true,
      image: "/img/tracks-4-trees.jpeg",
    },
  ];

  const navigationTiles: Tile[] = [
    {
      title: "SHOP ALL",
      subtitle: "Merch & drops",
      href: "https://perfectdark909.myshopify.com",
      external: true,
    },
    {
      title: "EVENTS",
      subtitle: "Nights & residencies",
      href: "/music",
    },
    {
      title: "ARTISTS",
      subtitle: "Roster & collaborators",
      href: "/artists",
    },
    {
      title: "ARCHIVE",
      subtitle: "Past shows & flyers",
      href: "/archive",
    },
    {
      title: "INFO",
      subtitle: "Ethos & environment",
      href: "/environment",
    },
  ];

  const newsItems = [
    {
      title: "Perfect Dark ☆ Argus, Chico ☆ July 12",
      href: "https://www.tickettailor.com/checkout/view-event/id/6155977/chk/4f82?nc=1751409801",
      external: true,
    },
    {
      title: "Freeman 713 - Weapons: Fully Reloaded",
      href: "https://perfectdark909.bandcamp.com/album/weapons-fully-reloaded",
      external: true,
    },
    {
      title: "Provider - Isolation Seeker",
      href: "https://perfectdark909.bandcamp.com/album/isolation-seeker",
      external: true,
    },
    {
      title: "Brick - Underground SF (YouTube)",
      href: "https://youtu.be/KVwyvPVrV94?si=SLnL_Q97i333YN7-",
      external: true,
    },
    {
      title: "Saroc - Paralysis EP",
      href: "https://fanlink.tv/pd11",
      external: true,
    },
    {
      title: "Perfect Dark Originals (Spotify)",
      href: "https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=24d808e9e59441d0",
      external: true,
    },
  ];

  const socialLinks = [
    {
      title: "Instagram",
      href: "https://instagram.com/perfectdark909",
      external: true,
    },
    {
      title: "SoundCloud",
      href: "https://soundcloud.com/perfectdark909",
      external: true,
    },
    {
      title: "Bandcamp",
      href: "https://perfectdark909.bandcamp.com",
      external: true,
    },
    {
      title: "Spotify",
      href: "https://open.spotify.com/user/perfectdark909",
      external: true,
    },
  ];

  return (
    <>
      <NavBar />

      {/* Full-Screen Hero Video */}
      <HeroSection
        sources={["/assets/hero1.mp4", "/assets/hero2.mp4"]}
        poster="/assets/hero_poster.jpg"
      >
        <div className="pd-hero__headline">
          <div>perfect dark</div>
          <div className="pd-hero__sub">label • parties • community</div>
        </div>
      </HeroSection>

      {/* Scrollable Content Section */}
      <section className="pd-content">
        <div className="pd-content__inner">
          {/* News Section */}
          <div className="pd-news">
            <h2 className="pd-news__title">LATEST</h2>
            <div className="pd-news__list">
              {newsItems.map((item, i) => (
                <article key={i} className="pd-news__item">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pd-news__link"
                  >
                    {item.title}
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="pd-social">
            <h2 className="pd-social__title">FOLLOW</h2>
            <div className="pd-social__list">
              {socialLinks.map((link, i) => (
                <div key={i} className="pd-social__item">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pd-social__link"
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Releases */}
          <div className="pd-releases">
            <h2 className="pd-releases__title">FEATURED</h2>
            <div className="pd-releases__grid">
              {featuredReleases.map((release, i) => (
                <div key={i} className="pd-release-card">
                  <a
                    href={release.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pd-release-card__link"
                  >
                    <div className="pd-release-card__image">
                      <img src={release.image} alt={release.title} />
                    </div>
                    <div className="pd-release-card__content">
                      <h3 className="pd-release-card__title">
                        {release.title}
                      </h3>
                      <p className="pd-release-card__subtitle">
                        {release.subtitle}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="pd-navigation">
            <SectionGrid tiles={navigationTiles} />
          </div>
        </div>
      </section>

      {/* Full-Screen Newsletter Section */}
      <section className="pd-newsletter-fullscreen">
        <div className="pd-newsletter-fullscreen__content">
          <h2 className="pd-newsletter-fullscreen__title">STAY UPDATED</h2>
          <p className="pd-newsletter-fullscreen__description">
            Sign up for our newsletter to receive updates on new products,
            special offers, and more.
          </p>
          <form className="pd-newsletter-fullscreen__form">
            <input
              type="email"
              placeholder="email@example.com"
              className="pd-newsletter-fullscreen__input"
            />
            <button type="submit" className="pd-newsletter-fullscreen__button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pd-footer">
        <div className="pd-footer__content">
          <div className="pd-footer__left">
            <span className="pd-footer__text">
              text "PERFECTDARK" to +1 (555) 123-4567 to receive drop day text
              updates
            </span>
          </div>
          <div className="pd-footer__right">
            <a href="/terms" className="pd-footer__link">
              TERMS + CONDITIONS
            </a>
            <a href="/search" className="pd-footer__link">
              SEARCH
            </a>
            <a
              href="https://instagram.com/perfectdark909"
              target="_blank"
              rel="noreferrer"
              className="pd-footer__link"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
