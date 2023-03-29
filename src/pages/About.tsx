import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const About: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto">
        {/* <div className="text-4xl font-bold">ABOUT US</div> */}
        <div className="px-11 grow flex justify-center gap-1">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            ABOUT US
          </span>
        </div>
        <div className="text-xl p-8">
          Perfect Dark is a California based record label known for throwing
          high energy underground parties and releasing a variety of electronic
          music. Not bound by genre but unified by feeling.
          <br></br>
          <br></br>
          We are a collective of friends. We're interested in cultivating a
          community that shares our love for eclectic dance music, ecological
          awareness, and aesthetic cohesion. We want to bring people together
          through inclusive events that celebrate life, friendship, mother
          earth, and music with soul.
        </div>
        <div className="px-11 grow flex justify-center gap-2 py-3">
          <span className="text-xl ">
            You can check out our artists{" "}
            <a
              href="/artists"
              className="can-hover:hover: underline bg-violet-600 "
            >
              here.
            </a>
          </span>
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
