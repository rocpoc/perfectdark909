import { Container } from "../components/Container";
import logo from "../img/logo.jpg";

export const Links: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-2xl font-bold can-hover:hover:bg-violet-600">
            CLICK FOR TICKETS / MORE INFO
          </span>
        </div>
        <br></br>

        <br></br>
        <div className="text-xl p-2  can-hover:hover:bg-violet-600 can-hover:hover:line-through">
          <a href="https://ra.co/events/1652757" target="_blank">
            TICKETS: 3/31: Direct to Earth with Ø[Phase], Project 313, Adra and
            Perfect Dark
          </a>
          <br></br>
        </div>
        <br></br>
        <div className="text-xl p-2  can-hover:hover:bg-violet-600 can-hover:hover:line-through">
          <a
            href="https://open.spotify.com/playlist/4qiTCCPzzGZfU2r4CvqHDi?si=MvOScfjfRjmm6TkxQne8PQ&nd=1"
            target="_blank"
          >
            Perfect Dark Selects Spotify Playlist
          </a>
        </div>
        <br></br>
      </div>
    </Container>
  );
};
