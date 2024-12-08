import classnames from "classnames";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Toolbar } from "./Toolbar";

export enum Routes {
  ABOUT = "/about",
  MUSIC = "/music",
  MERCH = "/merch",
  ARTISTS = "/artists",
  CONTACT = "/contact",
  EARTH = "/environment",
}

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
}> = ({ children, showToolbar }) => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Marquee
        gradient={false}
        className="bg-black text-white uppercase text-xs bottom-[.5px]"
        pauseOnHover={true}
        speed={50}
      >
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909
      </Marquee>

      <div className="w-full h-full">
        {showToolbar && (
          <Toolbar
            onHamburgerClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            onTitleClick={() => {
              setIsMenuOpen(false);
            }}
            currentPageName={
              Object.entries(Routes).find(([, path]) => path === pathname)?.[0]
            }
          />
        )}
        <div className="hidden md:block fixed text-[.7rem]  origin-top-right right-8 translate-y-[760px] rotate-90  text-white w-[700px] ">
          <p>xoxo, perfect dark :)</p>
        </div>

        {isMenuOpen ? (
          <div
            className="flex flex-col h-screen md:h-full"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {Object.entries(Routes).map(([name, path]) => {
              return (
                <Link
                  target={path === Routes.MERCH ? "_blank" : ""}
                  key={path}
                  className={classnames(
                    {
                      "bg-white text-black can-hover:hover:bg-emerald-300 active:bg-emerald-300":
                        pathname === path,
                    },
                    {
                      "text-white  can-hover:hover:text-emerald-300 active:text-emerald-300":
                        pathname !== path,
                    },
                    " text-[9vh] leading-[7vh]  md:text-[18vh] md:leading-[16vh] font-helvetica font-semibold w-fit p-2"
                  )}
                  to={path}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto text-center text-white">{children}</div>
        )}
      </div>
    </div>
  );
};
