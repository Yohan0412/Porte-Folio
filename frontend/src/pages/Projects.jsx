import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import img from "../assets/dev.json";
import Lottie from "lottie-react";

export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <h1 className="title-projects">Mes Projets</h1>
      <div className="balisage">
        <div className="projet-box">
        <Lottie style={{ width: 350, height: 150 }} animationData={img} />
          <h2>Stat'Hockey</h2>
          <p className="projet-description">
            C'est un site web qui relativise les projets du hockey sur glace au
            USA
          </p>
          <div className="button-liens">
            <Link to="/projetsMore">
              <button type="button" className="btn-projet">
                Plus de détails
              </button>
            </Link>
          </div>
        </div>
        <div className="projet-box" />
        <div className="projet-box" />
        <div className="projet-box" />
      </div>
    </div>
  );
}
