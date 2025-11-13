import { useEffect } from "react";
import { SEO } from "../components/SEO";

export const Music: React.FC = () => {
  useEffect(() => {
    window.location.replace("https://perfectdark909.bandcamp.com");
  }, []);

  return (
    <div className="text-white p-6">
      <SEO
        title="Music | Perfect Dark | Electronic Music Releases"
        description="Listen to Perfect Dark releases on Bandcamp. Discover techno, electronic music, and underground tracks from California-based label Perfect Dark."
        keywords="Perfect Dark music, Perfect Dark releases, techno music, electronic music, bandcamp"
        canonical="/music"
      />
      Redirecting to Bandcamp… If you're not redirected, <a className="underline" href="https://perfectdark909.bandcamp.com">click here</a>.
    </div>
  );
};
