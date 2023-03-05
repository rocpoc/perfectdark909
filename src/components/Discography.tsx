import MusicElement from "./MusicElement";

const releases = [
  {
    title: "Pain Reinforcement",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2815161335/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/pain-reinforcement",
  },
  {
    title: "5AM Dub by Brick",
    src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/5am-dub",
  },
  {
    title: "Exit Loop by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/track=3649480773/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/exit-loop",
  },
  {
    title: "Dub Tools 02 by Brick",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2032542749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/dub-tools-02",
  },
  {
    title: "Goofy Moment by Dreamgoth",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4158765372/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/goofy-moment",
  },
  {
    title: "For the Love of Sound by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2161531407/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/for-the-love-of-sound",
  },
  {
    title: "Dub Tools 01 by Brick",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1124410942/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/dub-tools-01",
  },
  {
    title: "Rave Forest",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2029916778/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/rave-forest",
  },
  {
    title: "Raving for a Reason Vol. I",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3766264515/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/raving-for-a-reason-vol-i",
  },
];

const Discography = () => {
  return (
    <div className="flex flex-wrap p-4 mx-auto max-w-6xl">
      {releases.map((release) => {
        return <MusicElement release={release} />;
      })}
    </div>
  );
};

export default Discography;
