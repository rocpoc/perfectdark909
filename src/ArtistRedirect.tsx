import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import brickPdf from "./img/artists/brick/brick-epk.pdf";
import carminePdf from "./img/artists/carmine/carmine-epk.pdf";
import disfuPdf from "./img/artists/disfu/disfu-epk.pdf";
import dogtoothPdf from "./img/artists/dogtooth/dogtooth-epk.pdf";
import faunaPdf from "./img/artists/fauna/fauna-epk.pdf";
import freeman713Pdf from "./img/artists/freeman-713/freeman-713.pdf";
import lavenderPersuasionPdf from "./img/artists/lavender-persuasion/lavender-persuasion-epk.pdf";
import providerPdf from "./img/artists/provider/provider-epk.pdf";

const artistPdfs: Record<string, string> = {
  brick: brickPdf,
  carmine: carminePdf,
  disfu: disfuPdf,
  dogtooth: dogtoothPdf,
  fauna: faunaPdf,
  "freeman-713": freeman713Pdf,
  "lavender-persuasion": lavenderPersuasionPdf,
  provider: providerPdf,
};

const ArtistRedirect = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (artistId && artistPdfs[artistId]) {
      window.location.replace(artistPdfs[artistId]);
    } else {
      navigate("/artists");
    }
  }, [artistId, navigate]);

  return null;
};

export default ArtistRedirect;
