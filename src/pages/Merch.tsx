import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Merch: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex text-white p-4 sticky top-0 bg-black">
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            MERCH
          </span>
        </div>
      </div>
      <br></br>
      <div className="text-2xl">
        CLICK
        <a
          className="className=text-4xl font-bold italic can-hover:hover:bg-gradient-to-bl from-violet-600 to-violet-800"
          href="https://perfectdark909.bandcamp.com/"
        >
          {" "}
          HERE{" "}
        </a>
        TO VISIT OUR BANDCAMP STORE
      </div>
      <div className="flex justify-center absolute inset-x-0 bottom-4 max-w-lg m-auto">
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
            height="50 "
          />
        </div>
      </div>
    </Container>
  );
};
