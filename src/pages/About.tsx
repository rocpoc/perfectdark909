import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const About: React.FC<{}> = () => {
  return (
    <>
      <Container showToolbar={true}>
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

      {/* Footer should not overlap content; show after scrolling */}
      <footer className="mt-8 bg-[#f6f6f2] border-t border-gray-300 z-40 text-black">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-3">
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="https://perfect-dark.kit.com/044179ba9e"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-black rounded text-sm text-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                Subscribe
              </a>
            </div>
            <div className="text-center md:text-right text-xs text-gray-900 space-x-6 md:space-x-6">
              <a href="/about" className="hover:text-black">
                ABOUT
              </a>
              <a href="/contact" className="hover:text-black">
                CONTACT
              </a>
              <a
                href="https://instagram.com/perfectdark909"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
