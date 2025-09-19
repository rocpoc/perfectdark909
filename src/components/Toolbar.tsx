import classnames from "classnames";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Routes } from "./Container";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import pdWordmark from "../img/PD Logo White.png";

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
    <div className="sticky top-0 z-20 bg-black text-white">
      <div className="relative flex items-center justify-between pr-4 pl-3 md:pl-4 py-4">
        {/* Left: hamburger pinned left */}
        <div
          className="w-12 h-8 my-auto cursor-pointer"
          onClick={() => {
            onHamburgerClick && onHamburgerClick();
          }}
        >
          <Hamburger />
        </div>

        {/* Centered logo like Shopify */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            to="/"
            onClick={() => {
              onTitleClick && onTitleClick();
            }}
            className={classnames("can-hover:hover:opacity-90 block")}
          >
            <img
              src={pdWordmark}
              alt="Perfect Dark"
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Right spacer matches hamburger width to maintain layout symmetry */}
        <div className="w-12 h-8" />
      </div>
    </div>
  );
};
