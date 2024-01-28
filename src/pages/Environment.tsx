import { Container } from "../components/Container";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";
import earth_first from "../img/earth-first.png";
import tracks_for_trees from "../img/tracks_for_trees.png";

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
          At Perfect Dark, our passion for techno is paralleled by our
          dedication to environmental stewardship. Through our "Tracks for
          Trees" initiative, we plant a tree for every track purchased on select
          Bandcamp Friday. It's a direct way for our fans to engage in
          environmental action—turning their music collection into a growing
          forest.
          <br />
          <br />
          We're also committed to local causes like Stop Valley’s Edge, actively
          opposing unsustainable development through benefit events like{" "}
          <em>EARTH FIRST</em>. Join us on February 10th at Duffy's in Chico,
          where 40% of earnings will support sustainable housing solutions. By
          attending, you're not just part of an event; you're part of the change
          towards a more sustainable community.
          <br />
          <br />
          Every ticket, every track, contributes to a greener tomorrow. Join
          Perfect Dark in making a difference. #RaveForAReason
        </div>
        <div className="flex justify-center py-4 inset-x-0 bottom-4 max-w-lg m-auto">
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
