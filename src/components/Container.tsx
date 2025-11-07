import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { SiteHeader } from "./SiteHeader";

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
  showMarquee?: boolean;
}> = ({ children, showToolbar, showMarquee = true }) => {
  const { pathname } = useLocation();

  // True only on the redirect page
  const isSmsOptIn = pathname === "/sms-opt-in";
  const shouldShowHeader = showToolbar && !isSmsOptIn;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hide the marquee on the opt-in redirect page */}
      {!isSmsOptIn && showMarquee && (
        <Marquee
          gradient={false}
          className="bg-black text-white uppercase text-xs bottom-[.5px]"
          pauseOnHover
          speed={50}
        >
          @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
          @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
          @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
          @perfectdark909 @perfectdark909
        </Marquee>
      )}

      <div className="w-full h-full">
        {/* Shared header (skip on opt-in redirect) */}
        {shouldShowHeader && <SiteHeader />}

        {/* Little rotating signature—also skip for opt-in */}
        {!isSmsOptIn && (
          <div className="hidden md:block fixed text-[.7rem] origin-top-right right-8 translate-y-[760px] rotate-90 text-white w-[700px]">
            <p>xoxo, perfect dark :)</p>
          </div>
        )}

        <div
          className={`mx-auto text-center text-white ${
            shouldShowHeader ? "pt-28 md:pt-32" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
