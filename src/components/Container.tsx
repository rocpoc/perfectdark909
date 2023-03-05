import classnames from "classnames";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";

enum Routes {
  ABOUT = "/about",
  CONTACT = "/contact",
  MUSIC = "/music",
  MERCH = "/merch",
}

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
}> = ({ children, showToolbar }) => {
  const { pathname } = useLocation();
  const isCurrentPath = Object.values(Routes).map((path) => path === pathname);

  return (
    <div>
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
          <div className="flex text-white p-4 sticky top-0 bg-black text-2xl font-bold">
            <div className="hover:bg-violet-600">
              <Link
                to="/"
                className={classnames({ underline: pathname === "/" })}
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
                        hover: "bg-violet-600",
                      },
                      "hover:bg-violet-600 "
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

        <div className=" bg-black mx-auto text-center text-white min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};
