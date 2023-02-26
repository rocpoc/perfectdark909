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

  // console.log(Object.values(Routes));
  return (
    <div className="w-full bg-black">
      {showToolbar && (
        <div className="flex text-white p-4 sticky top-0">
          <div className="">
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
                  className={classnames({ underline: pathname === path })}
                  to={path}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="max-w-4xl bg-green-600 mx-auto text-center text-white min-h-screen">
        {children}
      </div>
    </div>
  );
};
