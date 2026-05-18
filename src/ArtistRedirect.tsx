import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtistById } from "./data/artists";

const ArtistRedirect = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const artist = artistId ? getArtistById(artistId) : undefined;

    if (artist?.epk) {
      window.location.replace(artist.epk);
    } else {
      navigate("/artists");
    }
  }, [artistId, navigate]);

  return null;
};

export default ArtistRedirect;
