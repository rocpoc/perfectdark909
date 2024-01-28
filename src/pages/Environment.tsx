import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import earth_first from "../img/earth-first.png"; // Imported image for the Earth First event
import tracks_for_trees from "../img/tracks-for-trees.png"; // Imported image for the Tracks for Trees initiative

export const Environment: React.FC<{}> = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-lg m-auto">
        <div className="px-11 grow flex justify-center gap-1">
          <span className="text-4xl font-bold can-hover:hover:bg-violet-600">
            ENVIRONMENT
          </span>
        </div>
        <div className="text-xl p-8">
          {/* Section for Tracks for Trees */}
          <div>
            <p>
              At Perfect Dark, every Bandcamp Friday becomes an opportunity to
              aid reforestation through our "Tracks for Trees" initiative. Every
              track purchase directly translates into a tree planted, allowing
              our fans to be part of a collective effort for a greener future.
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
              Our commitment extends into the local community with "EARTH
              FIRST," an event supporting the Stop Valley’s Edge cause. By
              joining us on February 10th at Duff's in Chico, you contribute to
              sustainable housing efforts, with 40% of earnings going to the
              cause.
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
            Every action, every ticket, every track, contributes to a more
            sustainable world. Join Perfect Dark in making a tangible impact.
          </p>
          <br></br>
          <p className="text-2xl font-bold text-emerald-300">#RaveForAReason</p>
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
  );
};
