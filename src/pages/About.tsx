import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const About: React.FC<{}> = () => {
  return (
    <>
      <Container showToolbar={true} showMarquee={false}>
        <div className="flex flex-col justify-center max-w-2xl m-auto">
          <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
              ABOUT
            </span>
          </div>
          {/* <div className="text-xl p-8"> */}
          <div className="text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl p-8">
            {/* <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-8"> */}
            Perfect Dark is a California based record label known for throwing
            high energy underground parties and releasing a variety of
            electronic music. Not bound by genre but unified by feeling.
            <br></br>
            <br></br>
            We are a collective of friends. We're interested in cultivating a
            community that shares our love for eclectic dance music, ecological
            awareness, and aesthetic cohesion. We want to bring people together
            through inclusive events that celebrate life, friendship, mother
            earth, and music with soul.
          </div>
          <div className="px-11 grow flex justify-center">
            <span className="text-sm xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
              You can check out our artists{" "}
              <a
                href="/artists"
                className="text-emerald-300 can-hover:hover:text-emerald-400"
              >
                here.
              </a>
            </span>
          </div>
        </div>
      </Container>

      <footer className="bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </>
  );
};
