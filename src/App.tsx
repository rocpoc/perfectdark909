import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Music, Merch } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
        <Route path="merch" element={<Merch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
