import React, { useState, useEffect } from "react";
import "./Admin.css";
import instance from "../../instance";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Admin() {
  const [technofront, setTechnofront] = useState([]);
  const [technoback, setTechnoBack] = useState([]);
  const [technobdd, setTechnobdd] = useState([]);
  const [projet, setProjet] = useState({
    nom: "",
    desciption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjet({ ...projet, [name]: value });
  };

  useEffect(() => {
    instance
      .get(`/technologie`)
      .then((result) => {
        const technologies = result.data;
        setTechnofront(technologies.filter((tech) => tech.type === "Frontend"));
        setTechnoBack(technologies.filter((tech) => tech.type === "Backend"));
        setTechnobdd(technologies.filter((tech) => tech.type === "BDD"));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="admin">
      <Header />
      <h1 className="title-admin">Page Administrateur</h1>
      <div className="box-admin">
        <div className="box-form-admin">
          <h2 className="title-add-projet">Ajouter un projet</h2>
          <form className="form-add-projet">
            <h3 className="title-selection">Nom du projet</h3>
            <input onChange={handleChange} type="text" name="nom" />

            <h3 className="title-selection">Description</h3>
            <textarea
              onChange={handleChange}
              name="description"
              className="text-description"
            />

            <h3 className="title-selection">Chemin de l'image</h3>
            <input className="path" type="text" />

            <h3 className="title-selection">
              Sélectionner les technologies Front
            </h3>
            <div className="checkbox-style">
              {technofront.map((tech) => (
                <label>
                  <input className="test" type="checkbox" /> {tech.nom}
                </label>
              ))}
            </div>
            <h3 className="title-selection">
              Sélectionner les technologies Back
            </h3>
            <div className="checkbox-style">
              {technoback.map((tech) => (
                <label>
                  <input type="checkbox" /> {tech.nom}
                </label>
              ))}
            </div>
            <h3 className="title-selection">
              Sélectionner les technologies BDD
            </h3>
            <div className="checkbox-style">
              {technobdd.map((tech) => (
                <label>
                  <input type="checkbox" /> {tech.nom}
                </label>
              ))}
            </div>
            <button className="btn-add-projet" type="submit">
              Ajouter le projet
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
