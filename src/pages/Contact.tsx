import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Contact: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto pt-8">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-2 text-xl p-8">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            CONTACT
          </span>
        </div>
        <br></br>

        <div className="text-2xl font-bold px-8 ">
          For booking inquries and demo submissions, please email us at:{" "}
          <br></br>
          <br></br>
          <a
            className="className=text-4xl font-bold can-hover:hover:bg-violet-600 italic text-xl px-8"
            href="mailto:info@perfectdark909.com"
          >
            {" "}
            info@perfectdark909.com
          </a>
        </div>
        <br></br>
        <div className="text-xl font-bold px-8">
          Please leave your name, contact info, and a brief description of your
          request.
          <br></br>
        </div>
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
