import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Contact, Music, Merch, Links, Artists } from "./pages";
import { useEffect } from "react";
import ScrollToTop from "./components/Scroll";

function redirectToExternalUrl(url: string) {
  window.location.href = url;
}

interface RedirectToExternalUrlProps {
  url: string;
}

function RedirectToExternalUrl({ url }: RedirectToExternalUrlProps) {
  useEffect(() => {
    redirectToExternalUrl(url);
  }, [url]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
        <Route path="artists" element={<Artists />} />
        <Route
          path="merch"
          element={
            <RedirectToExternalUrl url="https://perfectdark909.bandcamp.com/merch" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
