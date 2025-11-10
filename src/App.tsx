import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Info, Contact, Music, Links, Artists, ArtistCards, Environment, Mixer } from "./pages";
import ScrollToTop from "./components/Scroll";
import ArtistRedirect from "./ArtistRedirect";
import RedirectToExternalUrl from "./RedirectToExternalUrl";
import SmsOptIn from "./pages/sms-opt-in";
import NotFound from "./pages/NotFound";
import { BPMProvider } from "./contexts/BPMContext";

function App() {
  return (
    <BPMProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
          <Route path="music" element={<Music />} />
          <Route
            path="shop"
            element={
              <RedirectToExternalUrl url="https://shop.perfectdark909.com" />
            }
          />
          <Route path="artists" element={<Artists />} />
          <Route path="artist-cards" element={<ArtistCards />} />
          <Route path="artists/:artistId" element={<ArtistRedirect />} />
          <Route path="environment" element={<Environment />} />
          <Route path="mixer" element={<Mixer />} />
          <Route path="sms-opt-in" element={<SmsOptIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BPMProvider>
  );
}

export default App;
