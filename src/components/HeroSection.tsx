import { PropsWithChildren, useMemo } from "react";

type Props = {
  sources: string[]; // video sources under /public
  poster?: string; // optional poster image
  overlayClassName?: string; // optional extra classes for overlay
};

export default function HeroSection({
  sources,
  poster,
  overlayClassName,
  children,
}: PropsWithChildren<Props>) {
  const src = useMemo(
    () =>
      sources.length ? sources[Math.floor(Math.random() * sources.length)] : "",
    [sources]
  );

  return (
    <section className="pd-hero">
      {src ? (
        <video
          className="pd-hero__video"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => console.error("Video loading error:", e)}
        />
      ) : (
        <div className="pd-hero__fallback" />
      )}
      <div className={`pd-hero__overlay ${overlayClassName || ""}`}>
        {children}
      </div>
      <div className="pd-hero__scrim" />
    </section>
  );
}
