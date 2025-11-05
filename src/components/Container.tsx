import classnames from "classnames";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Toolbar } from "./Toolbar";

export enum Routes {
  ABOUT = "/about",
  MUSIC = "/music",
  SHOP = "/shop",
  ARTISTS = "/artists",
  CONTACT = "/contact",
  EARTH = "/environment",
  // *Don’t* add /sms-opt-in here—this keeps it off the nav menu
}

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
  showMarquee?: boolean;
}> = ({ children, showToolbar, showMarquee = true }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // True only on the redirect page
  const isSmsOptIn = pathname === "/sms-opt-in";

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
        {/* Hide toolbar + burger menu on the opt-in page */}
        {showToolbar && !isSmsOptIn && (
          <Toolbar
            onHamburgerClick={() => setIsMenuOpen(!isMenuOpen)}
            onTitleClick={() => setIsMenuOpen(false)}
            currentPageName={
              Object.entries(Routes).find(([, path]) => path === pathname)?.[0]
            }
          />
        )}

        {/* Little rotating signature—also skip for opt-in */}
        {!isSmsOptIn && (
          <div className="hidden md:block fixed text-[.7rem] origin-top-right right-8 translate-y-[760px] rotate-90 text-white w-[700px]">
            <p>xoxo, perfect dark :)</p>
          </div>
        )}

        {isMenuOpen ? (
          <div
            className="flex flex-col h-screen md:h-full"
            onClick={() => setIsMenuOpen(false)}
          >
            {Object.entries(Routes).map(([name, path]) => (
              <Link
                key={path}
                to={path}
                target={path === Routes.SHOP ? "_blank" : undefined}
                className={classnames(
                  pathname === path
                    ? "bg-white text-black can-hover:hover:bg-emerald-300 active:bg-emerald-300"
                    : "text-white can-hover:hover:text-emerald-300 active:text-emerald-300",
                  "text-[9vh] leading-[7vh] md:text-[18vh] md:leading-[16vh] font-helvetica font-semibold uppercase w-fit p-2"
                )}
              >
                {name.toUpperCase()}
              </Link>
            ))}
          </div>
        ) : (
          // On /sms-opt-in this is all the visitor ever sees while JS redirects
          <div className="mx-auto text-center text-white">{children}</div>
        )}
      </div>
    </div>
  );
};
