import React, { useEffect, useRef } from "react";

export interface ArtistData {
  id: string;
  name: string;
  alias?: string;
  agents: string[];
  basedIn: string;
  setType: string; // "DJ", "Live", "DJ/Live"
  type: string; // "Bookings", "Mgmt + Bookings", "Management"
  bio: string;
  image?: string;
  socialLinks: { platform: string; url: string }[];
}

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

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !artist) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end lg:justify-center lg:items-center bg-black/80 backdrop-blur-sm pt-20 lg:pt-0"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="artist-profile-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl lg:max-w-5xl mx-4 lg:mx-8 bg-black border border-white/10 p-6 md:p-8 lg:p-10 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2
            id="artist-profile-title"
            className="text-xs uppercase tracking-wider text-white/70 font-helvetica"
          >
            ARTIST PROFILE
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-white hover:text-emerald-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 font-helvetica"
            aria-label="Close artist profile"
          >
            CLOSE
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Artist Name */}
            <div>
              <div className="text-xs uppercase tracking-wider text-white/70 mb-2 font-helvetica">
                ARTIST / ALIAS
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase font-helvetica">
                {artist.name}
              </h3>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-1 font-helvetica">
                    AGENT(S)
                  </div>
                  <div className="space-y-1">
                    {artist.agents.map((agent, idx) => (
                      <div key={idx} className="text-sm md:text-base font-helvetica">
                        {agent}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-1 font-helvetica">
                    BASED IN
                  </div>
                  <div className="text-sm md:text-base font-helvetica">
                    {artist.basedIn}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-1 font-helvetica">
                    SET TYPE
                  </div>
                  <div className="text-sm md:text-base font-helvetica">
                    {artist.setType}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mb-1 font-helvetica">
                    TYPE
                  </div>
                  <div className="text-sm md:text-base font-helvetica">
                    {artist.type}
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="pt-2">
              <div className="text-sm md:text-base leading-relaxed text-white font-helvetica">
                {artist.bio}
              </div>
            </div>

            {/* Call to Action & Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 pt-6">
              <button className="px-8 py-3 bg-white text-black uppercase text-xs tracking-wider font-bold hover:bg-emerald-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 font-helvetica">
                VIEW EPK
              </button>
              <div className="flex gap-2">
                {artist.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/5 hover:border-emerald-300 hover:bg-emerald-300/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label={`${link.platform} profile`}
                  >
                    <span className="text-xs text-white/70">{link.platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:flex lg:justify-end">
            <div className="w-full lg:w-[300px] aspect-square bg-white/10 border border-white/20 flex items-center justify-center">
              {artist.image ? (
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-white/30 text-sm uppercase font-helvetica">
                  Artist Image
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

