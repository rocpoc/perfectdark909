import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Music } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
