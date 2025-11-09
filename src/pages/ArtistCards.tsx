import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { ArtistCard, ArtistData } from "../components/ArtistCard";
import { useLocation } from "react-router-dom";

// Placeholder artist data matching reference site format
const artistData: ArtistData[] = [
  {
    id: "brick",
    name: "Brick",
    agents: ["Mila Voss"],
    basedIn: "San Francisco, US",
    setType: "DJ/Live",
    type: "Mgmt + Bookings",
    bio: "Brick is a producer and DJ based in San Francisco. His sound blends techno, dub, and tribal influences into stripped-back, driving rhythms built around movement and groove. Drawing inspiration from 90s rave culture, his performances balance precision, emotion, and flow. As a co-founder of Perfect Dark and Capp Street Project, Brick has become a central figure in the West Coast scene, shaping its sound through events, releases, and collaborations.",
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
    agents: ["Mila Voss"],
    basedIn: "Los Angeles, US",
    setType: "DJ/Live",
    type: "Bookings",
    bio: "Freeman 713 is a Los Angeles-based DJ and producer fusing tribal grooves with high-energy techno, with performances spanning the US underground and a 2024 debut at Berlin's RSO. Their productions have earned international support from artists including Anetha, D.Dan, LSDXOXO, VTSS, and Daria Kolosova.",
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
    agents: ["Mila Voss"],
    basedIn: "Austin, Texas, US",
    setType: "DJ",
    type: "Mgmt + Bookings",
    bio: "Provider is a co-founder of Perfect Dark and a California-based DJ and producer whose sound draws from trance, industrial, and melodic techno. Known for high-energy sets and emotionally driven productions, he is shaping the new wave of U.S. underground harder sounds while building community through the Perfect Dark collective.",
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
    agents: ["Mila Voss"],
    basedIn: "Northern California, US",
    setType: "DJ",
    type: "Bookings",
    bio: "Fauna is a Northern California-born DJ and producer on Perfect Dark. With a style rooted in harder techno, she crafts immersive journeys that balance raw intensity with emotional depth, captivating audiences with a relentless drive and distinctive sound.",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/fauna.999/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/fauna" },
      { platform: "SoundCloud", url: "https://soundcloud.com/fauna" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/fauna" },
    ],
  },
  {
    id: "carmine",
    name: "Carmine",
    agents: ["Mila Voss"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    type: "Bookings",
    bio: "Carmine (@carmine__909) is an Oakland, CA-based DJ who's known for his dynamic blend of eclectic and underground influences that resonate across a spectrum of house and techno. Carmine's sets effortlessly traverse these genres and styles, which has earned him a reputation as a versatile and skilled DJ. He is also a driving force behind Perfect Dark, a record label and collective dedicated to nurturing connections through a shared passion for electronic music.",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/carmine__909/" },
      { platform: "SoundCloud", url: "https://soundcloud.com/carmine" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/carmine" },
    ],
  },
  {
    id: "dogtooth",
    name: "Dogtooth",
    agents: ["Mila Voss"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    type: "Mgmt + Bookings",
    bio: 'the future of dogtooth is to solidify a bouncy y2k high energy sound with dark undertones. every time I finish a set I want a gay guy or a girlie to run up to me and say my set was "sooo cunty". Bounce. Techno. Ghetto Tech. Acid. Trance. "dogtooth- you\'ll know it when you hear it"',
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
  {
    id: "disfu",
    name: "Disfu",
    agents: ["Mila Voss"],
    basedIn: "Los Angeles, US",
    setType: "DJ",
    type: "Bookings",
    bio: "LA-born Disfu blends futuristic rave sounds, alternative influences, and the infectious rhythms of Latin music. His innovative fusion of Latin club styles with hard-edged techno creates a fresh, high-energy sound that's both nostalgic and forward-looking.",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/disfu96/" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/disfu" },
      { platform: "SoundCloud", url: "https://soundcloud.com/disfu" },
      { platform: "Bandcamp", url: "https://disfu.bandcamp.com/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/disfu" },
    ],
  },
  {
    id: "lavender-persuasion",
    name: "Lavender Persuasion",
    agents: ["Mila Voss"],
    basedIn: "Northern California, US",
    setType: "DJ",
    type: "Mgmt + Bookings",
    bio: "Lavender Persuasion creates ethereal soundscapes that blend ambient textures with driving rhythms. Their live performances are known for their emotional depth and technical precision.",
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
    <div className="flex flex-col min-h-screen bg-black">
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
      >
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-200px)] relative">
          {/* Left Side - Artist List */}
          <div className="flex flex-col justify-start lg:justify-center max-w-2xl lg:max-w-none lg:w-1/2 xl:w-2/5 px-6 lg:px-12 py-8 lg:py-16 z-10">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-8 lg:mb-12 font-helvetica uppercase">
              ARTISTS
            </span>
            <div className="space-y-1">
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
                  className={`w-full text-left py-3 px-4 text-xl xxs:text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 font-helvetica uppercase ${
                    selectedArtistId === artist.id
                      ? "text-emerald-300"
                      : "text-white/80 can-hover:hover:text-white can-hover:hover:text-emerald-300"
                  }`}
                  aria-label={`View ${artist.name} profile`}
                  aria-pressed={selectedArtistId === artist.id}
                >
                  {artist.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Reserved for Modal Overlay */}
          <div className="hidden lg:block lg:w-1/2 xl:w-3/5"></div>
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
