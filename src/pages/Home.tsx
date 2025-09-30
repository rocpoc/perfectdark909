import React from "react";
import { Container } from "../components/Container";
import logo from "../img/logo.jpg";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import logo_cropped from "../img/logo_cropped.png";
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

export const Home: React.FC = () => {
  const newsItems = [
    {
      href: "https://perfectdark909.bandcamp.com/album/night-drive",
      text: "Solitaire — Night Drive",
    },
    {
      href: "https://ra.co/events/2262010",
      text: "DJ Fuckoff & X-Coast - Perfect Dark x Public Works — 11.8",
    },
    {
      href: "https://perfectdark909.myshopify.com/",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Container showToolbar={true}>
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
      <footer className="fixed bottom-0 left-0 right-0 bg-[#f6f6f2] border-t border-gray-300 z-40 text-black">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3">
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="https://perfect-dark.kit.com/044179ba9e"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-black rounded text-sm text-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                Subscribe
              </a>
            </div>
            <div className="text-center md:text-right text-xs text-gray-900 space-x-6 md:space-x-6">
              <a href="/about" className="hover:text-black">
                ABOUT
              </a>
              <a href="/contact" className="hover:text-black">
                CONTACT
              </a>
              <a
                href="https://instagram.com/perfectdark909"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black"
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
