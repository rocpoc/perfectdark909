import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Music,
  Merch,
  Links,
  Artists,
  Environment,
} from "./pages";
import ScrollToTop from "./components/Scroll";
import ArtistRedirect from "./ArtistRedirect";
import RedirectToExternalUrl from "./RedirectToExternalUrl";
import SmsOptIn from "./pages/sms-opt-in";
import SecretVenue from "./pages/SecretVenue";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
        <Route
          path="merch"
          element={
            <RedirectToExternalUrl url="https://perfectdark909.myshopify.com/" />
          }
        />
        <Route path="artists" element={<Artists />} />
        <Route path="artists/:artistId" element={<ArtistRedirect />} />
        <Route path="environment" element={<Environment />} />
        <Route path="damage" element={<SecretVenue />} />
        <Route path="sms-opt-in" element={<SmsOptIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
