import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/Scroll";
import ArtistRedirect from "./ArtistRedirect";
import RedirectToExternalUrl from "./RedirectToExternalUrl";
import SmsOptIn from "./pages/sms-opt-in";
import EmailSignup from "./pages/email-signup";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home").then(({ Home }) => ({ default: Home })));
const Info = lazy(() => import("./pages/info").then(({ Info }) => ({ default: Info })));
const Contact = lazy(() =>
  import("./pages/Contact").then(({ Contact }) => ({ default: Contact }))
);
const Music = lazy(() => import("./pages/Music").then(({ Music }) => ({ default: Music })));
const Artists = lazy(() =>
  import("./pages/Artists").then(({ Artists }) => ({ default: Artists }))
);
const ArtistDetail = lazy(() =>
  import("./pages/ArtistDetail").then(({ ArtistDetail }) => ({
    default: ArtistDetail,
  }))
);
const ArtistCards = lazy(() =>
  import("./pages/ArtistCards").then(({ ArtistCards }) => ({
    default: ArtistCards,
  }))
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="pd-page min-h-screen" />}>
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
            <Route path="artists/:artistId" element={<ArtistDetail />} />
            <Route path="artists/:artistId/epk" element={<ArtistRedirect />} />
            <Route path="sms-opt-in" element={<SmsOptIn />} />
            <Route path="subscribe" element={<EmailSignup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
