import React, { useState, useEffect, useRef } from "react";
import "./Admin.css";
import instance from "../../instance";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Admin() {
  const [technofront, setTechnofront] = useState([]);
  const [technoback, setTechnoBack] = useState([]);
  const [technobdd, setTechnobdd] = useState([]);
  const [projet, setProjet] = useState({
    name: "",
    description: "",
  });

  const image1 = useRef(null);
  const image2 = useRef(null);

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

  // Gestion des changements dans les champs de texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjet({ ...projet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", projet.name);
    formData.append("description", projet.description);

    // Vérification si l'élément input file existe et si un fichier est sélectionné
    if (
      image1.current &&
      image1.current.files &&
      image1.current.files.length > 0
    ) {
      formData.append("image_1", image1.current.files[0]);
    } else {
      console.error("Aucune image 1 sélectionnée");
    }

    if (
      image2.current &&
      image2.current.files &&
      image2.current.files.length > 0
    ) {
      formData.append("image_2", image2.current.files[0]);
    } else {
      console.error("Aucune image 2 sélectionnée");
    }

    // Envoi de la requête POST au backend
    instance
      .post("/addproject", formData)
      .then(() => {
        setProjet({ name: "", description: "" });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du projet:", error);
        // Afficher l'erreur 500 dans la console pour mieux comprendre
        if (error.response) {
          console.error("Réponse du serveur:", error.response);
        } else {
          console.error("Erreur de réseau ou autre:", error);
        }
      });
  };

  return (
    <div className="admin">
      <Header />
      <h1 className="title-admin">Page Administrateur</h1>
      <div className="box-admin">
        <div className="box-form-admin">
          <h2 className="title-add-projet">Ajouter un projet</h2>
          <form className="form-add-projet" onSubmit={handleSubmit}>
            <h3 className="title-selection">Nom du projet</h3>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={projet.name}
            />

            <h3 className="title-selection">Description</h3>
            <textarea
              onChange={handleChange}
              name="description"
              className="text-description"
              value={projet.description}
            />

            <h3 className="title-selection">Chemin de l'image 1</h3>
            <input
              type="file"
              name="image_1"
              accept="image/*"
              ref={image1}
              required
            />
            <h3 className="title-selection">Chemin de l'image 2</h3>
            <input
              type="file"
              name="image_2"
              accept="image/*"
              ref={image2}
              required
            />

            <h3 className="title-selection">
              Sélectionner les technologies Front
            </h3>
            <div className="checkbox-style">
              {technofront.map((tech) => (
                <label>
                  <input className="test" type="checkbox" value={tech.id} />{" "}
                  {tech.nom}
                </label>
              ))}
            </div>
            <h3 className="title-selection">
              Sélectionner les technologies Back
            </h3>
            <div className="checkbox-style">
              {technoback.map((tech) => (
                <label>
                  <input type="checkbox" value={tech.id} /> {tech.nom}
                </label>
              ))}
            </div>
            <h3 className="title-selection">
              Sélectionner les technologies BDD
            </h3>
            <div className="checkbox-style">
              {technobdd.map((tech) => (
                <label>
                  <input type="checkbox" value={tech.id} /> {tech.nom}
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
