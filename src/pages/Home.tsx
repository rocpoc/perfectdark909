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
import sticker_pack from "../img/sticker-pack.png";
import special from "../img/eseip.png";

export const Home: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
        <br></br>
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
          LATEST RELEASES
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a href="https://fanlink.to/pd038" target="_blank">
            Brick x Provider x Fauna - Can't Explain
          </a>
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a href="https://tr.ee/JUCy7vUK1h" target="_blank">
            Provider - Uncanny Valley EP
          </a>
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a href="https://fanlink.to/tiktaalik" target="_blank">
            Fauna - Tiktaalik EP
          </a>
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a href="https://fanlink.to/dialogue-ep" target="_blank">
            Dara Ashrafi - Dialogue EP
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold can-hover:hover:text-emerald-300 can-hover:hover:line-through">
          PITCH+
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a
            href="https://youtu.be/CJROp5r5HPY?si=x6L2IBVDVtb1jxFY"
            target="_blank"
          >
            Episode 1: hearthealer | Pitch+
          </a>
        </div>
        <br></br>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold  can-hover:hover:text-emerald-300">
          <a href="https://www.youtube.com/watch?v=BaZ7X8BFYyY" target="_blank">
            Episode 2: CRTR | Pitch+
          </a>
        </div>
        <br></br>
      </div>
      <br></br>
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
