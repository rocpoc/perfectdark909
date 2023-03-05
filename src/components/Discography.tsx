import React, { useEffect } from "react";

const releases = [
  {
    title: "Pain Reinforcement",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2815161335/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by BRICK",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
];

const Discography = () => {
  useEffect(() => {
    // Callback for IntersectionObserver
    const callback = function (entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
          // Otherwise remove the fadein class
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    };

    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll(".js-show-on-scroll");

    // Set up a new observer
    const observer = new IntersectionObserver(callback);

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-0");

      // Add the element to the watcher
      observer.observe(target);
    });
  }, []);
  return (
    <div className="flex flex-wrap p-10 mx-auto max-w-6xl">
      {releases.map((release) => {
        return (
          <div className="js-show-on-scroll">
            <iframe
              style={{ border: 0, width: "350px", height: "350px" }}
              src={release.src}
              seamless
            >
              <a href={release.link}>{release.title}</a>
            </iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Discography;
