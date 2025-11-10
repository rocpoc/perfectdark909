import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { ArtistCard, ArtistData } from "../components/ArtistCard";
import { useLocation } from "react-router-dom";
import brickHeadshot from "../img/artists/headshots/brick-headshot.jpg";
import freemanHeadshot from "../img/artists/headshots/freeman-headshot.jpg";
import providerHeadshot from "../img/artists/headshots/provider-headshot.jpg";
import faunaHeadshot from "../img/artists/headshots/fauna-headshot.jpg";
import carmineHeadshot from "../img/artists/headshots/carmine-headshot.jpg";
import dogtoothHeadshot from "../img/artists/headshots/dogtooth-headshot.jpg";
import disfuHeadshot from "../img/artists/headshots/disfu-headshot.jpg";
import lavenderPersuasionHeadshot from "../img/artists/headshots/lavender-persuasion-headshot.jpg";
import brickPdf from "../img/artists/brick/brick-epk.pdf";
import carminePdf from "../img/artists/carmine/carmine-epk.pdf";
import disfuPdf from "../img/artists/disfu/disfu-epk.pdf";
import dogtoothPdf from "../img/artists/dogtooth/dogtooth-epk.pdf";
import faunaPdf from "../img/artists/fauna/fauna-epk.pdf";
import freeman713Pdf from "../img/artists/freeman-713/freeman-713.pdf";
import lavenderPersuasionPdf from "../img/artists/lavender-persuasion/lavender-persuasion-epk.pdf";
import providerPdf from "../img/artists/provider/provider-epk.pdf";

// Artist data matching reference site format
const artistData: ArtistData[] = [
  {
    id: "brick",
    name: "Brick",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ/Live",
    bio: "Brick is a producer and DJ based in San Francisco. His sound blends techno, dub, and tribal influences into stripped-back, driving rhythms built around movement and groove. Drawing inspiration from 90s rave culture, his performances balance precision, emotion, and flow. As a co-founder of Perfect Dark and Capp Street Project, Brick has become a central figure in the West Coast scene, shaping its sound through events, releases, and collaborations.",
    image: brickHeadshot,
    epk: brickPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/brick.909/" },
      { platform: "SoundCloud", url: "https://soundcloud.com/brick909" },
      { platform: "Bandcamp", url: "https://brick.bandcamp.com/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/brickus" },
    ],
  },
  {
    id: "freeman-713",
    name: "Freeman 713",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Los Angeles, US",
    setType: "DJ/Live",
    bio: "Freeman 713 is a Los Angeles-based DJ and producer fusing tribal grooves with high-energy techno, with performances spanning the US underground and a 2024 debut at Berlin's RSO. Their productions have earned international support from artists including Anetha, D.Dan, LSDXOXO, VTSS, and Daria Kolosova.",
    image: freemanHeadshot,
    epk: freeman713Pdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/Freeman_713/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/freeman713" },
      { platform: "SoundCloud", url: "https://soundcloud.com/freeman713" },
      { platform: "Bandcamp", url: "https://freeman713.bandcamp.com/" },
    ],
  },
  {
    id: "provider",
    name: "Provider",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Austin, Texas, US",
    setType: "DJ",
    bio: "Provider's sound takes inspiration from ambient, textural, and dubbed out electronic music and presents it in the dancefloor friendly form of groove focused techno, breaks, and electro. Expect atmospheric soundscapes and cutting edge sound design that transports you across genre lines.",
    image: providerHeadshot,
    epk: providerPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/provider.999/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/provider" },
      { platform: "SoundCloud", url: "https://soundcloud.com/provider999" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/" },
    ],
  },
  {
    id: "fauna",
    name: "Fauna",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Hailing from the mountains of Northern California, Perfect Dark's Fauna is a dynamic DJ and producer known for her electrifying sets. Drawing inspiration from the harder styles of techno, Fauna's music is a blend of heavy bass kicks, trance-like breakdowns, and trippy, ethereal vocals. Her performances are a journey through sound, creating an atmosphere of raw intensity and emotional depth. Each set is meticulously crafted to keep the energy levels soaring, captivating audiences with a relentless drive and a unique touch that stands out in the techno scene.",
    image: faunaHeadshot,
    epk: faunaPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/fauna.999/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/fauna" },
      { platform: "SoundCloud", url: "https://soundcloud.com/fauna" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/fauna" },
    ],
  },
  {
    id: "dogtooth",
    name: "Dogtooth",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Dogtooth is an SF based DJ. Reigning as a DJ for four years, she has continuously explored new sounds, often switching genres mid-set. They are attracted to music that is high energy, dark, and groovy. Genres they play but are not limited to are: techno, dark groove, acid, UKG, and house. She is always trying to push the limit of her artistic abilities and grow their skills. They are a resident DJ of Perfect Dark. Perfect Dark is a record label and collective dedicated to nurturing connections through a shared passion for electronic music",
    image: dogtoothHeadshot,
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
    image: disfuHeadshot,
    epk: disfuPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/disfu96/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/disfu" },
      { platform: "SoundCloud", url: "https://soundcloud.com/disfu" },
      { platform: "Bandcamp", url: "https://disfu.bandcamp.com/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/disfu" },
    ],
  },
  {
    id: "carmine",
    name: "Carmine",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Carmine is a San Francisco-based DJ who's known for his dynamic blend of eclectic and underground influences that resonate across a spectrum of house and techno. Carmine's sets effortlessly traverse these genres and styles, which has earned him a reputation as a versatile and skilled DJ.",
    image: carmineHeadshot,
    epk: carminePdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/carmine__909/" },
      { platform: "SoundCloud", url: "https://soundcloud.com/carmine" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/carmine" },
    ],
  },
  {
    id: "lavender-persuasion",
    name: "Lavender Persuasion",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Lavender Persuasion joined forces with record label Perfect Dark in 2018 after showcasing his unique, enchanted style as a special guest during the late-night slots of Perfect Dark's initial DIY events. His free-spirited track selection ranges from whimsical progressive house, to sassy, tongue-and cheek-techno, eccentric, lush breakbeats, and deep, dubby electronica. Lavender Persuasion has a reputation for refusing to conform to a specific genre and regularly excites crowds across Northern California through deranged, energetic, deeply compassionate and nuanced track selection.",
    image: lavenderPersuasionHeadshot,
    epk: lavenderPersuasionPdf,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
];

export const ArtistCards: React.FC = () => {
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

  // Play hover sound for artist names
  const playArtistHoverSound = useCallback(() => {
    try {
      const audio = new Audio(
        "/audio/UI Sounds/ESM_Alien_Button_Game_Organic_Cartoon_Sci_Fi_User_Interface.wav"
      );
      audio.volume = 0.3; // Adjust volume (0.0 to 1.0)
      audio.play().catch(() => {
        // Silently fail if audio can't play (user interaction required, etc.)
      });
    } catch (error) {
      // Silently fail if audio can't be created
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedArtistId) return;

      const currentIndex = artistData.findIndex(
        (a) => a.id === selectedArtistId
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
    [selectedArtistId]
  );

  useEffect(() => {
    if (selectedArtistId) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedArtistId, handleKeyDown]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
        className="!bg-black"
        contentClassName="max-w-6xl w-full text-left text-white px-6 sm:px-10 pt-16 md:pt-20"
      >
        <div className="flex justify-center pt-4 pb-16 relative">
          {/* Artist List - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl">
            {artistData.map((artist) => (
              <button
                key={artist.id}
                onClick={() => handleArtistClick(artist.id)}
                onMouseEnter={playArtistHoverSound}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleArtistClick(artist.id);
                  }
                }}
                className={`group w-full text-left bg-black border transition-all duration-150 p-3 md:p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 font-helvetica ${
                  selectedArtistId === artist.id
                    ? "border-accent bg-accent/5"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
                aria-label={`View ${artist.name} profile`}
                aria-pressed={selectedArtistId === artist.id}
              >
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-helvetica">
                    ARTIST
                  </div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase font-helvetica transition-colors duration-150 ${
                    selectedArtistId === artist.id
                      ? "text-artist-highlight"
                      : "text-white group-hover:text-artist-highlight"
                  }`}>
                    {artist.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* Modal Card */}
      <ArtistCard
        artist={selectedArtist}
        isOpen={selectedArtistId !== null}
        onClose={handleClose}
      />

      <footer className="mt-auto bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
