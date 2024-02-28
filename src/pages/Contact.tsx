import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Contact: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto">
        <div className="px-11 grow flex justify-center gap-1">
          <span className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
            CONTACT
          </span>
        </div>
        <br></br>
        {/* <div className="text-2xl font-bold px-8 "> */}
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-8">
          For booking inquries and demo submissions, please email us at:{" "}
          <br></br>
          <br></br>
          <a
            className="font-bold italic bg-white text-black can-hover:hover:bg-emerald-300 active:bg-emerald-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-2"
            href="mailto:info@perfectdark909.com"
          >
            {" "}
            info@perfectdark909.com
          </a>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-8">
            Please leave your name, contact info, and a brief description of
            your request. <br></br>
            <br></br> Thank you!
            <br></br>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 inset-x- bottom-4 max-w-lg m-auto">
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
