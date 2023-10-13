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
        <div className="text-4xl font-bold">UPCOMING</div>
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://ra.co/events/1777394" target="_blank">
            10.20: Perfect Dark at Underground SF
          </a>
        </div>
        {/* <br></br>
        {/* <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://ra.co/events/1722060" target="_blank">
            SuperSecret x Perfect Dark present Silent Servant
          </a>
        </div>
        <br></br> */}
        {/* <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://perfectdark909.bandcamp.com/merch" target="_blank">
            Summer 2023 Merch Drop
          </a>
        </div> */}
        {/* <br></br> */}
        {/* add a link to the img */}
        {/* <a href="https://perfectdark909.bandcamp.com/merch">
          <img
            src={sticker_pack}
            alt="Sticker Pack"
            className="max-w-xs max-h-xs justify-center m-auto"
          />
        </a> */}
        <br></br>
        {/* <br></br> */}
        <div className="text-4xl font-bold">RELEASES</div>
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a
            href="https://fanlink.to/five-year-flight           "
            target="_blank"
          >
            Realize - Five Year Flight EP
          </a>
        </div>
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://fanlink.to/dont-trip           " target="_blank">
            Brick x Zero Idea - Don't Trip EP
          </a>
        </div>
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://fanlink.to/jfbD           " target="_blank">
            Brick x Luvr Boy - Pole Shift
          </a>
        </div>
        <br></br>
        <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://fanlink.to/i6Dy            " target="_blank">
            Luvr Boy - Lifeforce EP
          </a>
        </div>
        {/* <br></br> */}
        {/* <div className="text-2xl font-bold  can-hover:hover:bg-violet-600 can-hover:hover:line-through">
          <a
            href="https://open.spotify.com/album/4jyBP9vkUF4WuQQ1mDWtpp?si=E_7C07aaTiqnCaJeTM0pbQ"
            target="_blank"
          >
            Luvr Boy - Lifeforce EP (Streaming)
          </a>
        </div> */}
        <br></br>
        {/* <div className="text-2xl font-bold  can-hover:hover:bg-violet-600">
          <a href="https://on.soundcloud.com/up9mKLAizhxsuNUJ9" target="_blank">
            Freeman 713 x Barbosa - Whetstone
          </a>
        </div> */}
        {/* <br></br> */}
        <div className="text-2xl font-bold can-hover:hover:bg-violet-600">
          <a href="https://fanlink.to/i6DB" target="_blank">
            Dilate - Forgotten Places EP
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
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
