import React, { useEffect, useRef } from "react";
import instagramLogo from "../img/icons-insta-01.png";
import soundcloudLogo from "../img/icons-soundcloud-01.png";
import bandcampLogo from "../img/icons bc.png";
import spotifyLogo from "../img/icons-spotify-01.png";
import raLogo from "../img/RA logo.png";
import type { ArtistData } from "../types/artist";

interface ArtistCardProps {
  artist: ArtistData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({
  artist,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const availableSocialLinks =
    artist?.socialLinks.filter((link) => link.url && link.url !== "#") ?? [];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      modalRef.current?.scrollTo({ top: 0 });
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const getPlatformLogo = (platform: string): string | null => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes("instagram")) return instagramLogo;
    if (platformLower.includes("soundcloud")) return soundcloudLogo;
    if (platformLower.includes("bandcamp")) return bandcampLogo;
    if (platformLower.includes("spotify")) return spotifyLogo;
    if (
      platformLower.includes("resident advisor") ||
      platformLower.includes("resident")
    ) {
      return raLogo;
    }
    return null;
  };

  if (!isOpen || !artist) return null;

  return (
    <div
      className="pd-artist-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="artist-profile-title"
    >
      <div
        ref={modalRef}
        className="pd-artist-modal-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pd-artist-modal-header">
          <h2 id="artist-profile-title" className="pd-kicker">
            Artist Profile
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="pd-header-link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Close artist profile"
          >
            Close
          </button>
        </div>

        <div className="pd-artist-modal-content grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,360px)] lg:items-start lg:gap-8">
          <div>
            <span className="pd-kicker">Artist / Alias</span>
            <h3 className="pd-artist-modal-name uppercase">{artist.name}</h3>

            <div className="pd-artist-modal-meta grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <span className="pd-kicker">Bookings</span>
                <div className="grid gap-1">
                  {artist.agents.map((agent) => (
                    <a
                      key={agent}
                      href={`mailto:${agent}`}
                      className="hover:underline"
                    >
                      {agent}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span className="pd-kicker">Set Type</span>
                <span>{artist.setType}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="pd-kicker">Based In</span>
                <span>{artist.basedIn}</span>
              </div>
            </div>

            <p className="pd-artist-modal-bio">
              {artist.bio}
            </p>

            <div className="pd-artist-modal-actions">
              {artist.epk ? (
                <a
                  href={artist.epk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-button"
                >
                  View EPK
                </a>
              ) : (
                <button className="pd-button">View EPK</button>
              )}
              {availableSocialLinks.length > 0 && (
                <div className="pd-artist-socials">
                  {availableSocialLinks.map((link) => {
                    const logo = getPlatformLogo(link.platform);
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pd-artist-social-link"
                        aria-label={`${link.platform} profile`}
                      >
                        {logo ? (
                          <img
                            src={logo}
                            alt={link.platform}
                            className={`h-5 w-5 object-contain ${
                              logo === raLogo ? "invert" : ""
                            }`}
                          />
                        ) : (
                          <span className="text-xs">{link.platform[0]}</span>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div>
            <div
              className={`pd-media-tile pd-artist-modal-image aspect-[4/5] ${
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
                <div className="flex h-full items-center justify-center text-white/40">
                  {artist.name}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
