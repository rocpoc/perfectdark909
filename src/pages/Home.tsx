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
      href: "https://www.tickettailor.com/checkout/view-event/id/6155977/chk/4f82?nc=1751409801",
      text: "Perfect Dark ☆ Argus, Chico ☆ July 12",
    },
    {
      href: "https://perfectdark909.bandcamp.com/album/weapons-fully-reloaded",
      text: "Freeman 713 - Weapons: Fully Reloaded",
    },
    {
      href: "https://perfectdark909.bandcamp.com/album/isolation-seeker",
      text: "Provider - Isolation Seeker",
    },
    {
      href: "https://youtu.be/KVwyvPVrV94?si=SLnL_Q97i333YN7-",
      text: "Brick - Underground SF (YouTube)",
    },
    {
      href: "https://perfectdark909.bandcamp.com/album/isolation-seeker",
      text: "Provider - Isolation Seeker (Preorder)",
    },
    {
      href: "https://fanlink.tv/pd11",
      text: "Saroc - Paralysis EP",
    },
    // {
    //   href: "https://www.youtube.com/watch?v=5hcD6uNPPnw",
    //   text: "Disfu - Perfect Dark LA",
    // },
    {
      href: "https://youtu.be/tZ48fQyQyTs?si=y1yybFXFCKVARjKp",
      text: "Kanyon (Live) | Perfect Dark LA",
    },
    {
      href: "https://perfectdark909.myshopify.com/",
      text: "Merch",
    },
    {
      href: "https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=24d808e9e59441d0",
      text: "Perfect Dark Originals (Spotify)",
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
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
        <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
          LATEST
        </span>
        <br />

        {newsItems.map((item, index) => (
          <React.Fragment key={index}>
            <NewsItem href={item.href}>{item.text}</NewsItem>
            <br />
          </React.Fragment>
        ))}

        <div className="text-2xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold can-hover:hover:text-emerald-300">
          <a
            className="font-bold italic bg-white text-black can-hover:hover:bg-emerald-300 active:bg-emerald-300"
            href="https://perfect-dark.ck.page/044179ba9e"
            target="_blank"
            rel="noopener noreferrer"
          >
            𝓮𝓶𝓪𝓲𝓵 𝓵𝓲𝓼𝓽 𝓼𝓲𝓰𝓷𝓾𝓹
          </a>
        </div>

        <br />
        <br />

        <div className="flex justify-center max-w-lg m-auto">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </Container>
  );
};
