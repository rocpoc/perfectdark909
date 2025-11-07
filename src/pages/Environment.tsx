import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import earth_first from "../img/earth-first.png"; // Imported image for the Earth First event
import tracks_for_trees from "../img/tracks-4-trees.jpeg"; // Imported image for the Tracks for Trees initiative

export const Environment: React.FC<{}> = () => {
  return (
    <>
      <Container showToolbar={true} showMarquee={false}>
        <div className="flex flex-col justify-center max-w-2xl m-auto">
          <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
            <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
              EARTH
            </span>
          </div>
          <div className="text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl p-8">
            {/* Section for Tracks for Trees */}
            <div>
              <p>
                In January of 2023, Perfect Dark saw an opportunity for Bandcamp
                Fridays to make a positive, measurable impact on our shared
                environment. On the first Friday of the month, Perfect Dark
                track purchases aid in reforestation efforts through our "Tracks
                for Trees" initiative.
              </p>{" "}
              <br></br>
              <p>
                By partnering with{" "}
                <a
                  href="https://onetreeplanted.org"
                  className="text-emerald-300  can-hover:hover:text-emerald-400"
                >
                  One Tree Planted
                </a>
                , one track purchase = one tree planted. "Tracks for Trees"
                allows our supporters to join in on a collective effort to
                co-create a more regeneratively-minded tomorrow.
              </p>
              <br></br>
              <img
                src={tracks_for_trees}
                alt="Tracks for Trees initiative"
                className="w-full h-auto mb-4"
              />
            </div>
            <br />

            {/* Section for Earth First event */}
            <div>
              <p>
                Our commitment to regenerative future extends into local
                communities that our members are part of. Perfect Dark has
                partnered with Chico’s{" "}
                <a
                  href="https://www.stopvalleysedge.org/"
                  className="text-emerald-300 hover:text-emerald-400"
                >
                  Stop Valley’s Edge
                </a>{" "}
                initiative to host a benefit show intended to raise money and
                bring awareness to the issues surrounding continued residential
                development into the Sierra Nevadas foothills.
              </p>
              <br></br>
              <img
                src={earth_first}
                alt="Earth First Event"
                className="w-full h-auto mb-4"
              />
            </div>
            <br />

            <p>
              How you do anything is how you do everything. We want to help
              create a scene where actions, tickets, and tracks purchased
              contribute to a more regenerative future. Join us on our journey!
            </p>
            <br></br>
            <p>
              <em>
                "Individually, we are one drop. Together, we are an ocean." —
                Ryunosuke Satoro
              </em>
            </p>
            <br></br>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-4 font-bold text-emerald-300">
              #RaveForAReason
            </p>
          </div>
          <div className="flex justify-center py-4 inset-x-0 bottom-4 max-w-lg m-auto">
            {/* Logo Images */}
            <img
              src={pd_heart_logo}
              alt="Perfect Dark Special Heart Logo"
              className="max-w-lg m-auto"
              width="50"
              height="50"
            />
            <img
              src={pd_90_logo}
              alt="Perfect Dark 90's Type Logo"
              className="max-w-lg m-auto"
              width="50"
              height="50 "
            />
            <img
              src={pd_spiral_logo}
              alt="Perfect Dark Spiral Logo"
              className="max-w-lg m-auto"
              width="50"
              height="50"
            />
          </div>
        </div>
      </Container>

      <footer className="bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </>
  );
};
