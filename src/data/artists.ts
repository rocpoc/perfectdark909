import type { ArtistData } from "../types/artist";
import brickHeadshot from "../img/artists/headshots/optimized/brick-headshot@1200.jpg";
import brickHeadshot600 from "../img/artists/headshots/optimized/brick-headshot@600.jpg";
import freemanHeadshot from "../img/artists/headshots/optimized/freeman-headshot@1200.jpg";
import freemanHeadshot600 from "../img/artists/headshots/optimized/freeman-headshot@600.jpg";
import providerHeadshot from "../img/artists/headshots/optimized/provider-headshot@1200.jpg";
import providerHeadshot600 from "../img/artists/headshots/optimized/provider-headshot@600.jpg";
import faunaHeadshot from "../img/artists/headshots/optimized/fauna-headshot@1200.jpg";
import faunaHeadshot600 from "../img/artists/headshots/optimized/fauna-headshot@600.jpg";
import carmineHeadshot from "../img/artists/headshots/optimized/carmine-headshot@1200.jpg";
import carmineHeadshot600 from "../img/artists/headshots/optimized/carmine-headshot@600.jpg";
import dogtoothHeadshot from "../img/artists/headshots/optimized/dogtooth-headshot@1200.jpg";
import dogtoothHeadshot600 from "../img/artists/headshots/optimized/dogtooth-headshot@600.jpg";
import disfuHeadshot from "../img/artists/headshots/optimized/disfu-headshot@1200.jpg";
import disfuHeadshot600 from "../img/artists/headshots/optimized/disfu-headshot@600.jpg";
import lavenderPersuasionHeadshot from "../img/artists/headshots/optimized/lavender-persuasion-headshot@1200.jpg";
import lavenderPersuasionHeadshot600 from "../img/artists/headshots/optimized/lavender-persuasion-headshot@600.jpg";
import brickPdf from "../img/artists/brick/brick-epk.pdf";
import carminePdf from "../img/artists/carmine/carmine-epk.pdf";
import disfuPdf from "../img/artists/disfu/disfu-epk.pdf";
import dogtoothPdf from "../img/artists/dogtooth/dogtooth-epk.pdf";
import faunaPdf from "../img/artists/fauna/fauna-epk.pdf";
import freeman713Pdf from "../img/artists/freeman-713/freeman-713.pdf";
import lavenderPersuasionPdf from "../img/artists/lavender-persuasion/lavender-persuasion-epk.pdf";
import providerPdf from "../img/artists/provider/provider-epk.pdf";

const artistImageSizes = "(max-width: 1023px) calc(100vw - 48px), 340px";
const makeSrcSet = (small: string, large: string) => `${small} 600w, ${large} 1200w`;

export const artistData: ArtistData[] = [
  {
    id: "brick",
    name: "Brick",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ + Live",
    bio: "Brick is a producer and DJ based in San Francisco. His sound blends techno, dub, and tribal influences into stripped-back, driving rhythms built around movement and groove. Drawing inspiration from 90s rave culture, his performances balance precision, emotion, and flow. As a co-founder of Perfect Dark and Capp Street Project, Brick has become a central figure in the West Coast scene, shaping its sound through events, releases, and collaborations.",
    image: brickHeadshot,
    imageSrcSet: makeSrcSet(brickHeadshot600, brickHeadshot),
    imageSizes: artistImageSizes,
    epk: brickPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/brick.909/" },
      { platform: "Bandcamp", url: "https://brick.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/3hA5ZrOPV9bemqxzKxHufr?si=V5KRP2iQSaKKMS_mdvEOYw",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/brick909" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/brickus" },
    ],
  },
  {
    id: "freeman-713",
    name: "Freeman 713",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Los Angeles, US",
    setType: "DJ + Live",
    bio: "Freeman 713 is a Los Angeles-based DJ and producer fusing tribal grooves with high-energy techno, with performances spanning the US underground and a 2024 debut at Berlin's RSO. Their productions have earned international support from artists including Anetha, D.Dan, LSDXOXO, VTSS, and Daria Kolosova.",
    image: freemanHeadshot,
    imageSrcSet: makeSrcSet(freemanHeadshot600, freemanHeadshot),
    imageSizes: artistImageSizes,
    epk: freeman713Pdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/Freeman_713/" },
      { platform: "Bandcamp", url: "https://freeman713.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/6boig61fpWOOmraTJ5M945?si=MEb5SmiLQ8G-5GqCunJ0VQ",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/freeman713" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/freeman713" },
    ],
  },
  {
    id: "provider",
    name: "Provider",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Austin, Texas, US",
    setType: "DJ + Live",
    bio: "Provider's sound takes inspiration from ambient, textural, and dubbed out electronic music and presents it in the dancefloor friendly form of groove focused techno, breaks, and electro. Expect atmospheric soundscapes and cutting edge sound design that transports you across genre lines.",
    image: providerHeadshot,
    imageSrcSet: makeSrcSet(providerHeadshot600, providerHeadshot),
    imageSizes: artistImageSizes,
    epk: providerPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/provider.999/" },
      { platform: "Bandcamp", url: "http://provider999.bandcamp.com/" },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/artist/7bYkaqLLuw9UqVuVyTH4OS?si=R8EFRV7BRM6VzhltZvTlvQ",
      },
      { platform: "SoundCloud", url: "https://soundcloud.com/provider999" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/provider" },
    ],
  },
  {
    id: "fauna",
    name: "Fauna",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Hailing from the mountains of Northern California, Perfect Dark's Fauna is a dynamic DJ and producer known for her electrifying sets. Drawing inspiration from the harder styles of techno, Fauna's music is a blend of heavy bass kicks, trance-like breakdowns, and trippy, ethereal vocals. Her performances are a journey through sound, creating an atmosphere of raw intensity and emotional depth. Each set is meticulously crafted to keep the energy levels soaring, captivating audiences with a relentless drive and a unique touch that stands out in the techno scene.",
    image: faunaHeadshot,
    imageSrcSet: makeSrcSet(faunaHeadshot600, faunaHeadshot),
    imageSizes: artistImageSizes,
    epk: faunaPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/fauna.999/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/fauna" },
      { platform: "SoundCloud", url: "https://soundcloud.com/fauna" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/fauna" },
    ],
  },
  {
    id: "dogtooth",
    name: "Dogtooth",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Dogtooth is an SF based DJ. Reigning as a DJ for four years, she has continuously explored new sounds, often switching genres mid-set. They are attracted to music that is high energy, dark, and groovy. Genres they play but are not limited to are: techno, dark groove, acid, UKG, and house. She is always trying to push the limit of her artistic abilities and grow their skills. They are a resident DJ of Perfect Dark. Perfect Dark is a record label and collective dedicated to nurturing connections through a shared passion for electronic music",
    image: dogtoothHeadshot,
    imageSrcSet: makeSrcSet(dogtoothHeadshot600, dogtoothHeadshot),
    imageSizes: artistImageSizes,
    epk: dogtoothPdf,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
  {
    id: "disfu",
    name: "Disfu",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Los Angeles, US",
    setType: "DJ",
    bio: "LA-born Disfu blends futuristic rave sounds, alternative influences, and the infectious rhythms of Latin music. His innovative fusion of Latin club styles with hard-edged techno creates a fresh, high-energy sound that's both nostalgic and forward-looking.",
    image: disfuHeadshot,
    imageSrcSet: makeSrcSet(disfuHeadshot600, disfuHeadshot),
    imageSizes: artistImageSizes,
    epk: disfuPdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/disfu96/" },
      { platform: "Bandcamp", url: "https://disfu96.bandcamp.com/" },
      { platform: "Spotify", url: "https://open.spotify.com/artist/disfu" },
      { platform: "SoundCloud", url: "https://soundcloud.com/disfu" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/disfu" },
    ],
  },
  {
    id: "carmine",
    name: "Carmine",
    agents: ["mila@perfectdark909.com"],
    basedIn: "San Francisco, US",
    setType: "DJ",
    bio: "Carmine is a San Francisco-based DJ who's known for his dynamic blend of eclectic and underground influences that resonate across a spectrum of house and techno. Carmine's sets effortlessly traverse these genres and styles, which has earned him a reputation as a versatile and skilled DJ.",
    image: carmineHeadshot,
    imageSrcSet: makeSrcSet(carmineHeadshot600, carmineHeadshot),
    imageSizes: artistImageSizes,
    epk: carminePdf,
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/carmine__909/" },
      { platform: "SoundCloud", url: "https://soundcloud.com/carmine" },
      { platform: "Resident Advisor", url: "https://ra.co/dj/carmine" },
    ],
  },
  {
    id: "lavender-persuasion",
    name: "Lavender Persuasion",
    agents: ["mila@perfectdark909.com"],
    basedIn: "Northern California, US",
    setType: "DJ",
    bio: "Lavender Persuasion joined forces with record label Perfect Dark in 2018 after showcasing his unique, enchanted style as a special guest during the late-night slots of Perfect Dark's initial DIY events. His free-spirited track selection ranges from whimsical progressive house, to sassy, tongue-and cheek-techno, eccentric, lush breakbeats, and deep, dubby electronica. Lavender Persuasion has a reputation for refusing to conform to a specific genre and regularly excites crowds across Northern California through deranged, energetic, deeply compassionate and nuanced track selection.",
    image: lavenderPersuasionHeadshot,
    imageSrcSet: makeSrcSet(
      lavenderPersuasionHeadshot600,
      lavenderPersuasionHeadshot
    ),
    imageSizes: artistImageSizes,
    imageClassName: "pd-artist-image-lavender",
    epk: lavenderPersuasionPdf,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "SoundCloud", url: "#" },
    ],
  },
];

export const getArtistById = (artistId: string): ArtistData | undefined =>
  artistData.find((artist) => artist.id === artistId);
