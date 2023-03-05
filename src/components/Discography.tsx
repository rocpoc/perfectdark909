import React from "react";

// const Discography: React.FC<{}> = () => {
//   const releases = [
//     {
//       title: "Pain Reinforcement",
//       src: "https://bandcamp.com/EmbeddedPlayer/album=2815161335/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
//     },
//     {
//       title: "5AM Dub by BRICK",
//       src: "https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/",
//     },
//     // {
//     //   title: "Release 3",
//     //   src: "https://your.bandcamp.com/album/release-3",
//     // },
//     // {
//     //   title: "Release 4",
//     //   src: "https://your.bandcamp.com/album/release-4",
//     // },
//     // {
//     //   title: "Release 5",
//     //   src: "https://your.bandcamp.com/album/release-5",
//     // },
//     // {
//     //   title: "Release 6",
//     //   src: "https://your.bandcamp.com/album/release-6",
//     // },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center">
//       {releases.map((release) => (
//         <div key={release.title} className="w-full sm:w-1/2 md:w-1/3 p-2">
//           <div className="p-1">
//             <iframe
//               title={release.title}
//               style={{ border: 0, width: "350px", height: "350" }}
//               src={release.src}
//               seamless
//             >
//               <a href={release.src}>{release.title}</a>
//             </iframe>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const Discography = () => {
  return (
    <div className="discography-container flex flex-wrap -mx-4 p-1 grid-cols-3">
      <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2815161335/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        seamless
      >
        <a href="https://perfectdark909.bandcamp.com/album/pain-reinforcement">
          Pain Reinforcement by Perfect Dark
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/track=260360749/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        seamless
      >
        <a href="https://perfectdark909.bandcamp.com/track/5am-dub">
          5AM Dub by BRICK
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4158765372/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        seamless
      >
        <a href="ttps://perfectdark909.bandcamp.com/album/goofy-moment">
          Goofy Moment by Dreamgoth
        </a>
      </iframe>
      <iframe
        style={{ border: 0, width: "350px", height: "350px" }}
        src="https://bandcamp.com/EmbeddedPlayer/track=3649480773/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
        seamless
      >
        <a href="https://perfectdark909.bandcamp.com/track/exit-loop">
          Exit Loop by Luvr Boy
        </a>
      </iframe>
      ;
    </div>
  );
};

export default Discography;
