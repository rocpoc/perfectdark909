import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { FooterSubscribe } from "../components/FooterSubscribe";
import brickPdf from "../img/artists/brick/brick-epk.pdf";

const ArtistDetail = () => {
  const { artistId } = useParams<{ artistId: string }>();

  const artistData = fetchArtistData(artistId!);

  if (!artistData) {
    return <div className="artist-page">Artist not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Container
        showToolbar={true}
        showMarquee={false}
        fullHeight={false}
        padBottom={false}
      >
        <div className="flex flex-col justify-center max-w-2xl m-auto">
          <div className="px-11 grow flex justify-center gap-1">
            <span className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
              {artistData.name}
            </span>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl p-8">
            {artistData.epk.bio}
          </div>
          <div className="flex justify-center py-4 inset-x-0 bottom-4 max-w-lg m-auto">
            <a
              href={brickPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 can-hover:hover:text-emerald-400"
            >
              View EPK (PDF)
            </a>
          </div>
        </div>
      </Container>
      <footer className="mt-auto bg-black border-t border-white/20 text-white">
        <FooterSubscribe />
      </footer>
    </div>
  );
};

// Mock function to simulate fetching artist data
const fetchArtistData = (artistId: string) => {
  const artists: Record<
    string,
    {
      name: string;
      bio: string;
      epk: { bio: string; links: string[]; image: string };
    }
  > = {
    brick: {
      name: "BRICK",
      bio: "Brick (@brick.909) is a San Francisco-based producer and DJ known for his unique sound that’s both nostalgic and forward-thinking.",
      epk: {
        bio: "Brick (@brick.909) is a San Francisco-based producer and DJ known for his unique sound that’s both nostalgic and forward-thinking. Originally from Northern California, he is a co-founder of Perfect Dark (@perfectdark909), a record label and artist collective dedicated to fostering communities united by a passion for dance music and ecological awareness. He is also a co-founder of the San Francisco-based label and studio, Capp Street Project. Drawing inspiration from 90s rave culture, Brick infuses his sets with a diverse spectrum of underground electronic music. His sets, whether live hardware performances or DJ mixes, are filled with unfiltered grooves and flawlessly executed blends that transport listeners across genre lines. Expect stripped-down, tooly techno paired with groovy, soulful rhythms that captivate audiences. Brick's commitment to creating immersive musical experiences and his ability to seamlessly weave diverse strands of underground electronic music into his performances make him a standout artist in the electronic music scene.",
        links: [
          "https://www.instagram.com/brick.909/",
          "https://soundcloud.com/brick909",
          "https://brick.bandcamp.com/",
          "https://ra.co/dj/brickus",
          "https://open.spotify.com/artist/3hA5ZrOPV9bemqxzKxHufr?si=QHU3LDHsTqSLPUwmaffiCA",
        ],
        image: "/path/to/brick-image.jpg", // Placeholder for the image if needed
      },
    },
    freeman713: {
      name: "FREEMAN 713",
      bio: "Bio for Freeman 713",
      epk: {
        bio: "Detailed bio for Freeman 713.",
        links: ["https://link1.com", "https://link2.com"],
        image: "/path/to/freeman713-image.jpg", // Adjust path as needed
      },
    },
    // Add more artist data here
  };

  return artists[artistId];
};

export default ArtistDetail;
