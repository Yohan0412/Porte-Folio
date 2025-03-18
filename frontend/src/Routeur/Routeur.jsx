import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Competences from "../pages/Competences";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competences" element={<Competences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
