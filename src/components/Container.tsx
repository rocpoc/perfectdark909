import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
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

  const isSmsOptIn = pathname === "/sms-opt-in";
  const isEmailSignup = pathname === "/subscribe";
  const shouldShowHeader = showToolbar && !isSmsOptIn && !isEmailSignup;

  return (
    <div
      className={`pd-page flex flex-col ${
        fullHeight ? "min-h-screen" : ""
      } ${className}`}
    >
      <div className="w-full h-full">
        {shouldShowHeader && <SiteHeader forceSolid={pathname !== "/"} />}

        <div
          className={`mx-auto text-white ${
            shouldShowHeader ? "pt-[78px] md:pt-[76px]" : ""
          } ${padBottom ? "pb-24 md:pb-28" : "pb-10 md:pb-14"} ${
            showMarquee ? "" : ""
          } ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
