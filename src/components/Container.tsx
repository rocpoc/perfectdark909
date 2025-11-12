import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { SiteHeader } from "./SiteHeader";

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
  showMarquee?: boolean;
  padBottom?: boolean;
  fullHeight?: boolean;
  className?: string;
  contentClassName?: string;
}> = ({
  children,
  showToolbar,
  showMarquee = true,
  padBottom = true,
  fullHeight = true,
  className = "",
  contentClassName = "",
}) => {
  const { pathname } = useLocation();

  // True only on the redirect page
  const isSmsOptIn = pathname === "/sms-opt-in";
  const shouldShowHeader = showToolbar && !isSmsOptIn;

  return (
    <div
      className={`flex flex-col ${
        fullHeight ? "min-h-screen" : ""
      } bg-black ${className}`}
    >
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
        {/* Transparent nav bar on home page only; solid on others */}
        {shouldShowHeader && <SiteHeader forceSolid={pathname !== "/"} />}

        {/* Little rotating signature—also skip for opt-in */}
        {/* Previously a rotated signature; removed for cleaner layout */}

        <div
          className={`mx-auto text-center text-white ${
            shouldShowHeader ? "pt-28 md:pt-32" : ""
          } ${padBottom ? "pb-32" : "pb-8 md:pb-12"} ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
