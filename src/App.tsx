import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Container showToolbar>Perfect Dark</Container>}
        />
        <Route
          path="about"
          element={<Container showToolbar>About</Container>}
        />
        <Route
          path="contact"
          element={<Container showToolbar>Contact</Container>}
        />
        <Route
          path="music"
          element={<Container showToolbar>Music</Container>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
