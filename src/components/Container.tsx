import classnames from "classnames";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";

enum Routes {
  ABOUT = "/about",
  CONTACT = "/contact",
  MUSIC = "/music",
  // MERCH = "/merch",
  // LINKS = "/links",
}

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
}> = ({ children, showToolbar }) => {
  const { pathname } = useLocation();
  const isCurrentPath = Object.values(Routes).map((path) => path === pathname);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Marquee
        gradient={false}
        className="bg-black text-white uppercase text-xs b bottom-[.5px]"
        pauseOnHover={true}
        speed={50}
      >
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909 @perfectdark909 @perfectdark909
        @perfectdark909 @perfectdark909
      </Marquee>
      <div className="w-full">
        {showToolbar && (
          <div className="flex text-white p-4 sticky top-0 text-2xl font-bold bg-black z-20">
            <div className="">
              <Link
                to="/"
                className={classnames(
                  // { underline: pathname === "/" },
                  "active:bg-violet-600 can-hover:hover:bg-violet-600 text-4xl"
                )}
              >
                PERFECT DARK
              </Link>
            </div>
            <div className="grow flex justify-end gap-2 flex-wrap">
              {Object.entries(Routes).map(([name, path]) => {
                return (
                  <Link
                    key={path}
                    className={classnames(
                      {
                        underline:
                          isCurrentPath[Object.values(Routes).indexOf(path)],
                      },
                      "can-hover:hover:bg-violet-600 active:bg-violet-600"
                    )}
                    to={path}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mx-auto text-center text-white">{children}</div>
      </div>
    </div>
  );
};
