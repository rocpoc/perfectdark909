import { useEffect } from "react";
import { SEO } from "../components/SEO";

export const Music: React.FC = () => {
  useEffect(() => {
    window.location.replace("https://perfectdark909.bandcamp.com");
  }, []);

  return (
    <div className="pd-page pd-wrapper flex min-h-screen flex-col justify-center py-24">
      <SEO
        title="Music | Perfect Dark | Electronic Music Releases"
        description="Listen to Perfect Dark releases on Bandcamp. Discover techno, electronic music, and underground tracks from California-based label Perfect Dark."
        keywords="Perfect Dark music, Perfect Dark releases, techno music, electronic music, bandcamp"
        canonical="/music"
        robots="noindex,follow"
      />
      <span className="pd-kicker">Music</span>
      <h1 className="pd-heading-xl">Redirecting</h1>
      <p className="pd-body mt-8 max-w-xl text-white/70">
        If you are not redirected,{" "}
        <a className="underline underline-offset-2" href="https://perfectdark909.bandcamp.com">
          open Bandcamp
        </a>
        .
      </p>
    </div>
  );
};
