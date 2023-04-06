import { Container } from "../components/Container";
import logo from "../img/logo.jpg";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import logo_cropped from "../img/logo_cropped.png";
import bc_logo from "../img/icons bc.png";
import ig_logo from "../img/icons-insta-01.png";
import spotify_logo from "../img/icons-spotify-01.png";
import soundcloud_logo from "../img/icons-soundcloud-01.png";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto px-3">
        <div>
          <img
            src={logo_cropped}
            alt="Logo"
            className="can-hover:hover:shadow-inner can-hover:hover:blur-sm transition duration-200 max-w-lg m-auto"
            width="240"
            height="240"
          />
        </div>
        <br></br>
        <div className="flex justify-center max-w-lg m-auto ">
          <div className="px-2">
            <a href="https://soundcloud.com/perfectdark909" target="_blank">
              <img
                src={soundcloud_logo}
                alt="Logo"
                className="max-w-lg m-auto"
                width="40"
                height="40"
              />
            </a>
          </div>
          <div className="px-2">
            <a href="https://perfectdark909.bandcamp.com" target="_blank">
              <img
                src={bc_logo}
                alt="Logo"
                className="max-w-lg m-auto"
                width="40"
                height="40"
              />
            </a>
          </div>
          <div className="px-2">
            <a href="https://instagram.com/perfectdark909" target="_blank">
              <img
                src={ig_logo}
                alt="Logo"
                className="max-w-lg m-auto"
                width="40"
                height="40"
              />
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://open.spotify.com/playlist/7wC505QRPfL4imOZcGrJTe?si=570f1ceee6094d42"
              target="_blank"
            >
              <img
                src={spotify_logo}
                alt="Logo"
                className="max-w-lg m-auto"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
        <br></br>
        {/* <div className="text-4xl font-bold can-hover:hover:underline decoration-violet-600	">
          LATEST
        </div> */}
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600 can-hover:hover:line-through">
          <a href="https://perfectdark909.bandcamp.com/" target="_blank">
            TRACKS FOR TREES
          </a>
        </div>
        {/* <div className="text-2xl p-2 font-bold  can-hover:hover:bg-violet-600 can-hover:hover:line-through can-hover:hover:-rotate-[10deg]">
          <a
            href=""
            target="_blank"
          >
            Perfect Dark Selects Spotify Playlist
          </a>
        </div> */}
        <br></br>
        <div className="text-2xl p-2 font-bold  can-hover:hover:bg-violet-600 can-hover:hover:line-through">
          <a
            href="https://open.spotify.com/album/35HoZzRuVcIJVuRPJFdNNZ?si=ddardGGnQIas_-gz6TLozQ"
            target="_blank"
          >
            Dilate - Forgotten Places EP
          </a>
        </div>
      </div>
      <div className="flex justify-center py-4 inset-x-0 bottom-5 max-w-lg m-auto">
        <div>
          <img
            src={pd_heart_logo}
            alt="Logo"
            className="max-w-lg m-auto"
            width="50"
            height="50"
          />
        </div>
        <div>
          <img
            src={pd_90_logo}
            alt="Logo"
            className="max-w-lg m-auto"
            width="50"
            height="50 "
          />
        </div>
        <div>
          <img
            src={pd_spiral_logo}
            alt="Logo"
            className="max-w-lg m-auto"
            width="50"
            height="50"
          />
        </div>
      </div>
    </Container>
  );
};
