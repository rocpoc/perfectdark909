import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Contact: React.FC<{}> = () => {
  return (
    <>
      <Container showToolbar={true} showMarquee={false}>
        <div className="flex flex-col justify-center max-w-2xl m-auto">
          <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
              CONTACT
            </span>
          </div>
          {/* <div className="text-2xl font-bold px-8 "> */}
          <div className="text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl p-4">
            For booking inquiries and demo submissions, please email us at:{" "}
            <br></br>
            <br></br>
            <a
              className="font-bold italic bg-white text-black can-hover:hover:bg-emerald-300 active:bg-emerald-300 text-lg xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl p-2"
              href="mailto:info@perfectdark909.com"
            >
              {" "}
              info@perfectdark909.com
            </a>
            <div className="text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl p-8">
              Please leave your name, contact info, and a brief description of
              your request. <br></br>
              <br></br> Thank you!
              <br></br>
            </div>
          </div>
        </div>
      </Container>

      <footer className="mt-24 bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </>
  );
};
