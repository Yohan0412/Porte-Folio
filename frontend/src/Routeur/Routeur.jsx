import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Competences from "../pages/Competences";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ProjectsMore from "../pages/Projetctmore";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projetsMore" element={<ProjectsMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
