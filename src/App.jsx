import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Skills } from "./pages/skills/Skills";
import { Proyects } from "./pages/proyects/Proyects";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Proyects" element={<Proyects />} />
      </Routes>
    </Router>
  );
};
