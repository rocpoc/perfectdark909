import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Environment: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-1">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            ENVIRONMENT
          </span>
        </div>
        <div className="text-xl p-8">
          Perfect Dark is pretty down with the environment.
          <br></br>
        </div>
        <div className="flex justify-center py-4 inset-x-0 bottom-4 max-w-lg m-auto">
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
      </div>
    </Container>
  );
};
