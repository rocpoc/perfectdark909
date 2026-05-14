import React, { useCallback, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const EVENT_URL = "https://ra.co/events/2440881";
const TICKER_COPY = "PERFECT DARK // RESURRECTION / TICKETS ON RA //";

const TICKER_TRACKING_EVENT = {
  content_name: "Perfect Dark Resurrection RA Tickets",
  content_category: "Event Tickets",
  destination_url: EVENT_URL,
};

const tickerItems = Array.from({ length: 8 }, (_, index) => (
  <span key={index} className="mx-8 whitespace-nowrap">
    {TICKER_COPY}
  </span>
));

export const EventTicketTicker: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  const handleTicketClick = useCallback(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", TICKER_TRACKING_EVENT);
    }
  }, []);

  return (
    <a
      href={EVENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy Perfect Dark Resurrection tickets on Resident Advisor"
      onClick={handleTicketClick}
      className="fixed inset-x-0 top-[84px] z-[55] block border-y border-white/25 bg-black text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white md:top-[96px]"
    >
      <div className="h-10 overflow-hidden font-helvetica text-[0.68rem] font-bold uppercase leading-10 tracking-[0.28em] sm:text-xs md:h-11 md:leading-[2.75rem] md:tracking-[0.36em]">
        {prefersReducedMotion ? (
          <div className="flex h-full items-center justify-center px-4 text-center">
            <span>{TICKER_COPY}</span>
          </div>
        ) : (
          <Marquee gradient={false} speed={72} pauseOnHover autoFill>
            {tickerItems}
          </Marquee>
        )}
      </div>
    </a>
  );
};
