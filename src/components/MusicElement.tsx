import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

const MusicElement = ({
  release,
}: {
  release: {
    title: string;
    src: string;
    link: string;
  };
}) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className={classNames({ "motion-safe:animate-fadeIn": isVisible })}
      ref={domRef}
    >
      <iframe
        title={release.title}
        style={{ border: 0, width: "350px", height: "350px" }}
        src={release.src}
        seamless
      >
        <a href={release.link}>{release.title}</a>
      </iframe>
    </div>
  );
};

export default MusicElement;
