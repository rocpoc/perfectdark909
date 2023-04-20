import MusicElement from "./MusicElement";

const releases = [
  {
    title: "Luvr Boy - Lifeforce EP",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2315407880/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/lifeforce",
  },
  {
    title: "Dilate - Forgotten Places EP",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1180745057/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/forgotten-places-ep",
  },
  {
    title: "Sticktalk - Pain Reinforcement EP",
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
  {
    title: "Dialog by Brick",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1743491767/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/dialogue",
  },
  {
    title: "The Sun Also Rises by Brick",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1956242000/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/the-sun-also-rises",
  },
  {
    title: "And Rise by Ricky Bobi",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3427379787/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/and-rise",
  },
  {
    title: "Disfu EP by Disfu",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4086573862/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/disfu-ep",
  },
  {
    title: "Make it Right (feat. Nicolas Sales) by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/track=2079876904/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/make-it-right-feat-nicolas-sales",
  },
  {
    title: "Poison Tree (Luvr Boy&#39;s Existential Dread Mix) by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/track=3337519491/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/poison-tree-luvr-boys-existential-dread-mix",
  },
  {
    title: "Miracle Ticket EP by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=978969981/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/miracle-ticket-ep",
  },
  {
    title: "MPC Workout EP by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1459977055/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/mpc-workout-ep",
  },
  {
    title: "Carbonized EP by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3797795936/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/carbonized-2",
  },
  {
    title: "Moshing by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/track=1982862071/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/moshing",
  },
  {
    title: "Grinding by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1795637422/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/grinding",
  },
  {
    title: "Osmosis Jones by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4192542802/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/osmosis-jones-2",
  },
  {
    title: "*67 by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1828212474/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/67",
  },
  {
    title: "Missing (Smoke Jumper Agoraphobic Remix)",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1111875684/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/missing-smoke-jumper-agoraphobic-remix",
  },
  {
    title: "Slammed EP by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2198058090/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/slammed-ep",
  },
  {
    title: "Staying Out by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=1790312094/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/staying-out",
  },
  {
    title: "Gimme Dat by Disfu",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3468304931/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/gimme-dat",
  },
  {
    title: "Rave Utility by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=3930913963/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/rave-utility",
  },
  {
    title: "2 Days 4 Nights by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2825406822/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/2-days-4-nights",
  },
  {
    title: "Acid Control by Smoke Jumper",
    src: "https://bandcamp.com/EmbeddedPlayer/track=1517779998/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/acid-control",
  },
  {
    title: "Planetary Imbalances by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/track=1682668423/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/planetary-imbalences",
  },
  {
    title: "909s and Heartbreak by Luvr Boy",
    src: "https://bandcamp.com/EmbeddedPlayer/album=4003368384/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/909s-and-heartbreak",
  },
  {
    title: "Tink - Somebody (Smoke Jumper Remix)",
    src: "https://bandcamp.com/EmbeddedPlayer/track=1582867309/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/track/tink-somebody-smoke-jumper-remix",
  },
  {
    title: "Freeman 713 by Freeman 713",
    src: "https://bandcamp.com/EmbeddedPlayer/album=2161514827/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
    link: "https://perfectdark909.bandcamp.com/album/freeman-713",
  },
  // {
  //   title: "X",
  //   src: "https://bandcamp.com/EmbeddedPlayer/album=X/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
  //   link: "X",
  // },
  // {
  //   title: "X",
  //   src: "https://bandcamp.com/EmbeddedPlayer/album=X/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
  //   link: "X",
  // },
  // {
  //   title: "X",
  //   src: "https://bandcamp.com/EmbeddedPlayer/album=X/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
  //   link: "X",
  // },
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
