import classnames from "classnames";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

enum Routes {
  About = "/about",
  Contact = "/contact",
  Music = "/music",
}

export const Container: React.FC<{
  children?: ReactNode;
  showToolbar: boolean;
}> = ({ children, showToolbar }) => {
  const { pathname } = useLocation();
  const isCurrentPath = Object.values(Routes).map((path) => path === pathname);

  return (
    <div className="w-full">
      {showToolbar && (
        <div className="flex text-white p-4 sticky top-0 bg-black">
          <div className="hover:underline">
            <Link
              to="/"
              className={classnames({ underline: pathname === "/" })}
            >
              Perfect Dark
            </Link>
          </div>
          <div className="grow flex justify-end gap-2">
            {Object.entries(Routes).map(([name, path]) => {
              return (
                <Link
                  key={path}
                  className={classnames(
                    {
                      underline:
                        isCurrentPath[Object.values(Routes).indexOf(path)],
                    },
                    "hover:underline"
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
  );
};
