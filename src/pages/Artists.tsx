import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { ArtistCard } from "../components/ArtistCard";
import { useLocation } from "react-router-dom";
import { SEO } from "../components/SEO";
import { artistData } from "../data/artists";
import { SITE_URL } from "../config/site";

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

  const handleArtistLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    artistId: string
  ) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    handleArtistClick(artistId);
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

  const artistCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Perfect Dark Artists",
    url: `${SITE_URL}/artists`,
    about: {
      "@type": "Organization",
      name: "Perfect Dark",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: artistData.map((artist, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: artist.name,
          url: `${SITE_URL}/artists/${artist.id}`,
        },
      })),
    },
  };

  return (
    <div className="pd-page flex min-h-screen flex-col">
      <SEO
        title="Artists | Perfect Dark | California Techno Label"
        description="Discover artists on Perfect Dark, a California techno label featuring Freeman 713, Fauna, Brick, Provider, and more. West Coast electronic music."
        keywords="Perfect Dark artists, california techno artists, west-coast techno"
        canonical="/artists"
        structuredData={[
          breadcrumbStructuredData,
          artistCollectionStructuredData,
        ]}
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
              <a
                key={artist.id}
                href={`/artists/${artist.id}`}
                onClick={(event) => handleArtistLinkClick(event, artist.id)}
                className={`group w-full text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                  selectedArtistId === artist.id
                    ? "text-[#8ceb8f]"
                    : "text-white hover:text-[#8ceb8f]"
                }`}
                aria-label={`View ${artist.name} profile`}
              >
                <span
                  className={`pd-media-tile aspect-square ${
                    artist.imageClassName ?? ""
                  }`}
                >
                  {artist.image ? (
                    <img
                      src={artist.image}
                      srcSet={artist.imageSrcSet}
                      sizes={artist.imageSizes}
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
              </a>
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
