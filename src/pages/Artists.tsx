import { Container } from "../components/Container";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col justify-center max-w-2xl m-auto pt-8">
        <div className="px-11 grow flex justify-center gap-2">
          <span className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
            ARTIST ROSTER
          </span>
        </div>
        <br></br>
        {artistList.map((artist) => (
          <div className="px-11 grow flex justify-center gap-2" key={artist.id}>
            <Link
              to={`/artists/${artist.id}`}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold can-hover:hover:text-emerald-300"
            >
              {artist.name}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
