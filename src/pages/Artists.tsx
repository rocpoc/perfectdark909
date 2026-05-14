import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { ArtistCard, ArtistData } from "../components/ArtistCard";
import { useLocation } from "react-router-dom";
import { SEO } from "../components/SEO";
import brickPdf from "../img/artists/brick/brick-epk.pdf";
import carminePdf from "../img/artists/carmine/carmine-epk.pdf";
import disfuPdf from "../img/artists/disfu/disfu-epk.pdf";
import dogtoothPdf from "../img/artists/dogtooth/dogtooth-epk.pdf";
import faunaPdf from "../img/artists/fauna/fauna-epk.pdf";
import freeman713Pdf from "../img/artists/freeman-713/freeman-713.pdf";
import lavenderPersuasionPdf from "../img/artists/lavender-persuasion/lavender-persuasion-epk.pdf";
import providerPdf from "../img/artists/provider/provider-epk.pdf";

const artistImages = {
  brick: "/images/artists/brick-headshot.jpg",
  freeman: "/images/artists/freeman-headshot.jpg",
  provider: "/images/artists/provider-headshot.jpg",
  fauna: "/images/artists/fauna-headshot.jpg",
  carmine: "/images/artists/carmine-headshot.jpg",
  dogtooth: "/images/artists/dogtooth-headshot.jpg",
  disfu: "/images/artists/disfu-headshot.jpg",
  lavenderPersuasion: "/images/artists/lavender-persuasion-headshot.jpg",
};

// Artist data matching reference site format
const artistData: ArtistData[] = [
  {
    id: "brick",
    name: "Brick",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ + Live",
    bio: "Brick is a San Francisco-based producer and DJ blending techno, dub, and tribal influences into a modern and groove-driven sound. Rooted in 90s rave culture and contemporary club music, his productions and sets are stripped-back, percussive, and built for the club. As a co-founder of Perfect Dark and Capp Street Project, he’s part of a new wave shaping the West Coast underground through a focused, functional approach to modern techno and dance music.",
    image: artistImages.brick,
    epk: brickPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/brick.909/" },
      { platform: "Bandcamp", url: "https://brick.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/3hA5ZrOPV9bemqxzKxHufr?si=V5KRP2iQSaKKMS_mdvEOYw",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/brick909" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/brickus" },
    ],
  },
  {
    id: "freeman-713",
    name: "Freeman 713",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Los Angeles, US",
    setType: "DJ + Live",
    bio: "Freeman 713 is a Los Angeles-based DJ and producer fusing tribal grooves with high-energy techno, with performances spanning the US underground and a 2024 debut at Berlin's RSO. Their productions have earned international support from artists including Anetha, D.Dan, LSDXOXO, VTSS, and Daria Kolosova.",
    image: artistImages.freeman,
    epk: freeman713Pdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/Freeman_713/" },
      { platform: "Bandcamp", url: "https://freeman713.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/6boig61fpWOOmraTJ5M945?si=MEb5SmiLQ8G-5GqCunJ0VQ",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/freeman713" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/freeman713" },
    ],
  },
  {
    id: "provider",
    name: "Provider",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Austin, Texas, US",
    setType: "DJ + Live",
    bio: "Provider's sound takes inspiration from ambient, textural, and dubbed out electronic music and presents it in the dancefloor friendly form of groove focused techno, breaks, and electro. Expect atmospheric soundscapes and cutting edge sound design that transports you across genre lines.",
    image: artistImages.provider,
    epk: providerPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/provider.999/" },
      { platform: "Bandcamp", url: "http://provider999.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/7bYkaqLLuw9UqVuVyTH4OS?si=R8EFRV7BRM6VzhltZvTlvQ",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/provider999" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/provider" },
    ],
  },
  {
    id: "fauna",
    name: "Fauna",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Hailing from the mountains of Northern California, Perfect Dark's Fauna is a dynamic DJ and producer known for her electrifying sets. Drawing inspiration from the harder styles of techno, Fauna's music is a blend of heavy bass kicks, trance-like breakdowns, and trippy, ethereal vocals. Her performances are a journey through sound, creating an atmosphere of raw intensity and emotional depth. Each set is meticulously crafted to keep the energy levels soaring, captivating audiences with a relentless drive and a unique touch that stands out in the techno scene.",
    image: artistImages.fauna,
    epk: faunaPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/fauna.999/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/fauna" },
      { platform: "SoundCloud", url: "https://soundcloud.com/fauna" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/fauna" },
    ],
  },
  {
    id: "lavender-persuasion",
    name: "Lavender Persuasion",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Lavender Persuasion joined forces with record label Perfect Dark in 2018 after showcasing his unique, enchanted style as a special guest during the late-night slots of Perfect Dark's initial DIY events. His free-spirited track selection ranges from whimsical progressive house, to sassy, tongue-and cheek-techno, eccentric, lush breakbeats, and deep, dubby electronica. Lavender Persuasion has a reputation for refusing to conform to a specific genre and regularly excites crowds across Northern California through deranged, energetic, deeply compassionate and nuanced track selection.",
    image: artistImages.lavenderPersuasion,
    imageClassName: "pd-artist-image-lavender",
    epk: lavenderPersuasionPdf,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
  {
    id: "dogtooth",
    name: "Dogtooth",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Dogtooth is an SF based DJ. Reigning as a DJ for four years, she has continuously explored new sounds, often switching genres mid-set. They are attracted to music that is high energy, dark, and groovy. Genres they play but are not limited to are: techno, dark groove, acid, UKG, and house. She is always trying to push the limit of her artistic abilities and grow their skills. They are a resident DJ of Perfect Dark. Perfect Dark is a record label and collective dedicated to nurturing connections through a shared passion for electronic music",
    image: artistImages.dogtooth,
    epk: dogtoothPdf,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
  {
    id: "disfu",
    name: "Disfu",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Los Angeles, US",
    setType: "DJ",
    bio: "LA-born Disfu blends futuristic rave sounds, alternative influences, and the infectious rhythms of Latin music. His innovative fusion of Latin club styles with hard-edged techno creates a fresh, high-energy sound that's both nostalgic and forward-looking.",
    image: artistImages.disfu,
    epk: disfuPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/disfu96/" },
      { platform: "Bandcamp", url: "https://disfu96.bandcamp.com/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/disfu" },
      { platform: "SoundCloud", url: "https://soundcloud.com/disfu" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/disfu" },
    ],
  },
  {
    id: "carmine",
    name: "Carmine",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Carmine is a San Francisco-based DJ who's known for his dynamic blend of eclectic and underground influences that resonate across a spectrum of house and techno. Carmine's sets effortlessly traverse these genres and styles, which has earned him a reputation as a versatile and skilled DJ.",
    image: artistImages.carmine,
    epk: carminePdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/carmine__909/" },
      { platform: "SoundCloud", url: "https://soundcloud.com/carmine" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/carmine" },
    ],
  },
];

export const Artists: React.FC = () => {
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);
  const location = useLocation();

  // Check for hash in URL to pre-select artist
  useEffect(() => {
    const hash = location.hash.slice(1); // Remove the #
    if (hash && artistData.find((a) => a.id === hash)) {
      setSelectedArtistId(hash);
    }
  }, [location.hash]);

  const selectedArtist = selectedArtistId
    ? artistData.find((a) => a.id === selectedArtistId) || null
    : null;

  const handleArtistClick = (artistId: string) => {
    setSelectedArtistId(artistId);
    // Update URL hash without scrolling
    window.history.replaceState(null, "", `#${artistId}`);
  };

  const handleClose = () => {
    setSelectedArtistId(null);
    window.history.replaceState(null, "", location.pathname);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedArtistId) return;

      const currentIndex = artistData.findIndex(
        (a) => a.id === selectedArtistId,
      );

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        const prevArtist = artistData[currentIndex - 1];
        handleArtistClick(prevArtist.id);
      } else if (
        e.key === "ArrowRight" &&
        currentIndex < artistData.length - 1
      ) {
        e.preventDefault();
        const nextArtist = artistData[currentIndex + 1];
        handleArtistClick(nextArtist.id);
      }
    },
    [selectedArtistId],
  );

  useEffect(() => {
    if (selectedArtistId) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedArtistId, handleKeyDown]);

  useEffect(() => {
    const preloadImages = () => {
      artistData.forEach((artist) => {
        if (!artist.image) return;
        const image = new Image();
        image.decoding = "async";
        image.src = artist.image;
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadImages);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preloadImages, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfectdark909.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artists",
        item: "https://perfectdark909.com/artists",
      },
    ],
  };

  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Artists | Perfect Dark | California Techno Label"
        description="Discover artists on Perfect Dark, a California techno label featuring Freeman 713, Fauna, Brick, Provider, and more. West Coast electronic music."
        keywords="Perfect Dark artists, california techno artists, west-coast techno"
        canonical="/artists"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        contentClassName="pd-wrapper"
      >
        <main className="pd-section-tight">
          <h1 className="pd-heading-xl mb-12">Artists</h1>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {artistData.map((artist) => (
              <button
                key={artist.id}
                onClick={() => handleArtistClick(artist.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleArtistClick(artist.id);
                  }
                }}
                className={`group w-full text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                  selectedArtistId === artist.id
                    ? "text-[#8ceb8f]"
                    : "text-white hover:text-[#8ceb8f]"
                }`}
                aria-label={`View ${artist.name} profile`}
                aria-pressed={selectedArtistId === artist.id}
              >
                <span
                  className={`pd-media-tile aspect-square ${
                    artist.imageClassName ?? ""
                  }`}
                >
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center bg-white/10">
                      {artist.name}
                    </span>
                  )}
                </span>
                <span className="pd-kicker mt-3">Artist</span>
                <span className="block min-h-[3.25rem] text-2xl font-bold leading-none md:min-h-[4rem] md:text-3xl">
                  {artist.name}
                </span>
                <span className="mt-2 block text-white/70">
                  {artist.basedIn}
                </span>
              </button>
            ))}
          </div>
        </main>
      </Container>

      {/* Modal Card */}
      <ArtistCard
        artist={selectedArtist}
        isOpen={selectedArtistId !== null}
        onClose={handleClose}
      />

      <footer className="pd-footer mt-auto">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
