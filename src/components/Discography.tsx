import React from "react";

const Discography = () => {
  return (
    <div className="discography-container flex flex-wrap -mx-4">
      <iframe
        style={{ border: 0, width: "300px", height: "472px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2815161335/size=large/bgcol=333333/linkcol=ffffff/artwork=large/"
        seamless
      >
        <a href="https://perfectdark909.bandcamp.com/album/pain-reinforcement">
          Pain Reinforcement by Perfect Dark
        </a>
      </iframe>

      <iframe
        style={{ border: 0, width: "300px", height: "472px" }}
        src="https://bandcamp.com/EmbeddedPlayer/track=260360749//size=large/bgcol=333333/linkcol=ffffff/artwork=large/"
        seamless
      >
        <a href="https://perfectdark909.bandcamp.com/track/5am-dub">
          5AM Dub by BRICK
        </a>
      </iframe>

      <iframe
        style={{ border: 0, width: "300px", height: "472px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4158765372//size=large/bgcol=333333/linkcol=ffffff/artwork=large/"
        seamless
      >
        <a href="ttps://perfectdark909.bandcamp.com/album/goofy-moment">
          Goofy Moment by Dreamgoth
        </a>
      </iframe>
    </div>
  );
};

export default Discography;
