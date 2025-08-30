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
  Archive,
} from "./pages";
import ScrollToTop from "./components/Scroll";
import ArtistRedirect from "./ArtistRedirect";
import RedirectToExternalUrl from "./RedirectToExternalUrl";
import SmsOptIn from "./pages/sms-opt-in";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/links" element={<Links />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/archive" element={<Archive />} />

        {/* keep your existing special routes */}
        <Route path="/artist" element={<ArtistRedirect />} />
        {/* <Route path="/go/:slug" element={<RedirectToExternalUrl />} /> */}
        <Route path="/sms-opt-in" element={<SmsOptIn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
