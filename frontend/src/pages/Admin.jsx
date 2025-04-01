import React, { useState, useEffect, useRef } from "react";
import "./Admin.css";
import instance from "../../instance";
import Header from "../components/Header/Header";

export default function Admin() {
  const [technofront, setTechnofront] = useState([]);
  const [technoback, setTechnoBack] = useState([]);
  const [technobdd, setTechnobdd] = useState([]);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [projet, setProjet] = useState({ name: "", description: "", link: "" });
  // eslint-disable-next-line no-unused-vars
  const [idprojet, setIdprojet] = useState();

  const image1 = useRef(null);
  const image2 = useRef(null);

  useEffect(() => {
    instance.get(`/technologie`).then((result) => {
      const technologies = result.data;
      setTechnofront(technologies.filter((tech) => tech.type === "Frontend"));
      setTechnoBack(technologies.filter((tech) => tech.type === "Backend"));
      setTechnobdd(technologies.filter((tech) => tech.type === "BDD"));
    });
  }, []);

  // Gestion de la sélection des technologies
  const handleTechSelection = (e) => {
    const { value, checked } = e.target;
    setSelectedTechs((prev) =>
      checked ? [...prev, value] : prev.filter((techId) => techId !== value)
    );
  };

  // Gestion du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedTechsNumbers = selectedTechs.map(Number);

    const formData = new FormData();
    formData.append("name", projet.name);
    formData.append("description", projet.description);
    formData.append("link", projet.link);
    formData.append("technologyIds", JSON.stringify(selectedTechsNumbers)); // Assure-toi que selectedTechs est un tableau d'IDs
    if (image1.current?.files.length > 0) {
      formData.append("image_1", image1.current.files[0]);
    }
    if (image2.current?.files.length > 0) {
      formData.append("image_2", image2.current.files[0]);
    }

    // console.log("Données envoyées :", {
    //   name: projet.name,
    //   description: projet.description,
    //   link: projet.link,
    //   technologyIds: selectedTechsNumbers,
    //   selectedTechsNumbers,
    // });

    try {
      const response = await instance.post("/addproject", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { projectId } = response.data;
      // console.log("ID du projet créé :", projectId);

      // Mettre à jour l'ID du projet et réinitialiser
      setIdprojet(projectId);
      setProjet({ name: "", description: "", link: "" });
      setSelectedTechs([]); // Réinitialiser les technologies sélectionnées
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du projet :",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="admin">
      <Header />
      <h1 className="title-admin">Page Administrateur</h1>
      <form className="form-add-projet" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setProjet({ ...projet, name: e.target.value })}
          type="text"
          name="name"
          value={projet.name}
        />
        <textarea
          onChange={(e) =>
            setProjet({ ...projet, description: e.target.value })
          }
          name="description"
          value={projet.description}
        />

        <input type="file" ref={image1} required />
        <input type="file" ref={image2} required />

        <h3>Technologies</h3>
        {[...technofront, ...technoback, ...technobdd].map((tech) => (
          <label key={tech.id}>
            <input
              name="technologyIds"
              type="checkbox"
              value={tech.id}
              onChange={handleTechSelection}
            />{" "}
            {tech.nom}
          </label>
        ))}
        <h3>Liens Linkedin</h3>
        <input
          onChange={(e) => setProjet({ ...projet, link: e.target.value })}
          name="link"
          value={projet.link}
        />
        <button type="submit">Ajouter le projet</button>
      </form>
    </div>
  );
}
