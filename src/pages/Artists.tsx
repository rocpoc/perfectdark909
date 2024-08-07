import { Container } from "../components/Container";
import { Link } from "react-router-dom";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Artists: React.FC<{}> = () => {
  const artistList = [
    { id: "brick", name: "BRICK" },
    { id: "freeman-713", name: "FREEMAN 713" },
    { id: "provider", name: "PROVIDER" },
    { id: "fauna", name: "FAUNA" },
    { id: "carmine", name: "CARMINE" },
    { id: "dogtooth", name: "DOGTOOTH" },
    { id: "disfu", name: "DISFU" },
    { id: "lavender-persuasion", name: "LAVENDER PERSUASION" },
  ];

  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
        <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
          ARTISTS
        </span>
        <br></br>
        {artistList.map((artist) => (
          <div className="px-11 grow flex justify-center gap-2" key={artist.id}>
            <Link
              to={`/artists/${artist.id}`}
              className="py-2 text-2xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold can-hover:hover:text-emerald-300"
            >
              {artist.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4 inset-x- bottom-4 max-w-lg m-auto">
        <br></br>
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
