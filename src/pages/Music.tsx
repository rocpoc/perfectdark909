import { Container } from "../components/Container";
import Discography from "../components/Discography";
import "../App.css";

export const Music: React.FC = () => {
  return (
    <Container showToolbar={true}>
      <div className="flex flex-col justify-center max-w-2xl m-auto px-3">
        <span className="text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold can-hover:hover:text-emerald-300">
          MUSIC
        </span>
        <br />

        {/* Spotify Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">PERFECT DARK ORIGINALS</h2>
          <div className="w-full aspect-[4/5] sm:aspect-[3/2] md:aspect-square lg:aspect-[3/2] xl:aspect-[3/2]">
            <iframe
              src="https://open.spotify.com/embed/playlist/4qiTCCPzzGZfU2r4CvqHDi?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Perfect Dark Originals Playlist"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Bandcamp Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DISCOGRAPHY</h2>
          <Discography />
        </div>
      </div>
    </Container>
  );
};
