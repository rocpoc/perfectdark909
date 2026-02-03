import React from "react";

export const FooterSubscribe: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-6">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3">
      <div className="flex items-center justify-center md:justify-start">
        <a
          href="/subscribe"
          className="px-4 py-2 border border-white rounded text-sm text-white font-helvetica font-bold bg-transparent hover:bg-white hover:text-black transition-colors"
        >
          Subscribe
        </a>
      </div>
      <div className="text-center md:text-right text-xs text-white space-x-6 md:space-x-6">
        <a
          href="https://soundcloud.com/perfectdark909"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent-light"
        >
          SOUNDCLOUD
        </a>
        <a
          href="https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=3ec803cb982644a3"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent-light"
        >
          SPOTIFY
        </a>
        <a
          href="https://instagram.com/perfectdark909"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent-light"
        >
          INSTAGRAM
        </a>
      </div>
    </div>
  </div>
);
