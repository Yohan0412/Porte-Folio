import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../../instance";
import "./Projectsmore.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ProjectsMore() {
  const [technofront, setTechnofront] = useState([]);
  const [technoback, setTechnoBack] = useState([]);
  const [technobdd, setTechnobdd] = useState([]);
  const { id } = useParams();
  const [projetcompl, setprojetcompl] = useState([]);

  useEffect(() => {
    instance.get(`/technologie/${id}`).then((result) => {
      const technologies = result.data;
      setTechnofront(technologies.filter((tech) => tech.type === "Frontend"));
      setTechnoBack(technologies.filter((tech) => tech.type === "Backend"));
      setTechnobdd(technologies.filter((tech) => tech.type === "BDD"));
    });
  }, []);

  useEffect(() => {
    instance
      .get(`/projet/${id}`)
      .then((result) => {
        setprojetcompl(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="projects-more">
      <Header />
      <div className="box-project-balisage">
        <div className="projet-box-more">
          <div className="projet-data">
            <h2 className="title-project">{projetcompl.name}</h2>
            <h3 className="descriptions"> Description:</h3>
            <p className="projet-description">{projetcompl.description}</p>

            <h3 className="title-front">Technologies Front:</h3>

            <div className="techno-back">
              {technofront.map((techFront) => (
                <p className="techno-front-here">{techFront.nom}</p>
              ))}
            </div>

            <h3 className="title-back">Technologies Back:</h3>

            <div className="techno-back">
              {technoback.map((techBack) => (
                <p className="techno-back-here">{techBack.nom}</p>
              ))}
            </div>

            <h3 className="title-back">Base de Données:</h3>
            <div className="techno-back">
              {technobdd.map((techBDD) => (
                <p className="techno-back-here">{techBDD.nom}</p>
              ))}
            </div>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={projetcompl.link}
            >
              <button type="button" className="btn-git-projet">
                Liens GitHub
              </button>
            </a>
          </div>

          <div className="projet-image-box">
            <img
              src={`http://localhost:5000/uploads/${projetcompl.image_1}`}
              alt="gfgggf"
              className="image-projet-all"
            />
            <img
              src={`http://localhost:5000/uploads/${projetcompl.image_2}`}
              alt="gfgggf"
              className="image-projet-all"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
