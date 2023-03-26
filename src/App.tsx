import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Music, Merch, Links, DJs } from "./pages";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
        <Route path="merch" element={<Merch />} />
        <Route path="links" element={<Links />} />
        <Route path="djs" element={<DJs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
