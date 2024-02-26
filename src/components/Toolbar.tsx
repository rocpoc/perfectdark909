import classnames from "classnames";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Routes } from "./Container";
import { Hamburger } from "./Hamburger";
import { useState } from "react";

export const Toolbar = ({
  onHamburgerClick,
  onTitleClick,
  currentPageName,
}: {
  onHamburgerClick?: () => void;
  onTitleClick?: () => void;
  currentPageName?: String;
}) => {
  return (
    <div className="flex gap-4 text-white p-4 sticky top-0 text-2xl font-bold bg-black z-20">
      <div
        className="w-12 h-8 my-auto cursor-pointer"
        onClick={() => {
          onHamburgerClick && onHamburgerClick();
        }}
      >
        <Hamburger />
      </div>

      <div className="my-auto">
        <Link
          to="/"
          onClick={() => {
            onTitleClick && onTitleClick();
          }}
          className={classnames(
            // { underline: pathname === "/" },
            "active:text-emerald-300 can-hover:hover:text-emerald-300 text-4xl"
          )}
        >
          PERFECT DARK
        </Link>
      </div>
      {currentPageName && (
        <div className="my-auto bg-white text-black px-1 hidden md:block">
          {currentPageName}
        </div>
      )}
      {/* <div className="grow flex justify-end gap-2 flex-wrap">
        {Object.entries(Routes).map(([name, path]) => {
          return (
            <Link
              key={path}
              className={classnames(
                {
                  underline: isCurrentPath[Object.values(Routes).indexOf(path)],
                },
                "can-hover:hover:bg-violet-600 active:bg-violet-600"
              )}
              to={path}
            >
              {name}
            </Link>
          );
        })}
      </div> */}
    </div>
  );
};
