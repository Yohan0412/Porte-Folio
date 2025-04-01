import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import instance from "../../instance";
import Header from "../components/Header/Header";
import img from "../assets/dev.json";

export default function Projects() {
  const [projet, setProjet] = useState([]);

  useEffect(() => {
    instance
      .get(`/projets`)
      .then((result) => {
        setProjet(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="projects">
      <Header />
      <h1 className="title-projects">Mes Projets</h1>
      <div className="balisage">
        {projet.map((proj) => (
          <div className="projet-box">
            <Lottie style={{ width: 350, height: 150 }} animationData={img} />

            <h2>{proj.name}</h2>
            <p className="projet-description">{proj.description}</p>
            <div className="button-liens">
              <Link to={`/projetsMore/${proj.id}`}>
                <button type="button" className="btn-projet">
                  Plus de détails
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
