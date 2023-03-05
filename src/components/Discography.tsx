import MusicElement from "./MusicElement";

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
  return (
    <div className="flex flex-wrap p-10 mx-auto max-w-6xl">
      {releases.map((release) => {
        return <MusicElement release={release} />;
      })}
    </div>
  );
};

export default Discography;
