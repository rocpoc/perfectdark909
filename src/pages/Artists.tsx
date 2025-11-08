import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import { Link } from "react-router-dom";
import pd_90_logo from "../img/PD - 90_s type-01.png";
import pd_spiral_logo from "../img/PD - Spiral-01.png";
import pd_heart_logo from "../img/PD_Special Heart-01.png";

export const Artists: React.FC<{}> = () => {
  const artistList = [
    { id: "brick", name: "Brick" },
    { id: "freeman-713", name: "Freeman 713" },
    { id: "provider", name: "Provider" },
    { id: "fauna", name: "Fauna" },
    { id: "carmine", name: "Carmine" },
    { id: "dogtooth", name: "Dogtooth" },
    { id: "disfu", name: "Disfu" },
    { id: "lavender-persuasion", name: "Lavender Persuasion" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
      >
        <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
          <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
            ARTISTS
          </span>
          <br></br>
          {artistList.map((artist) => (
            <div
              className="px-11 grow flex justify-center gap-2"
              key={artist.id}
            >
              <Link
                to={`/artists/${artist.id}`}
                className="py-2 text-xl xxs:text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold can-hover:hover:text-emerald-300"
              >
                {artist.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>

      <footer className="mt-auto bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};
