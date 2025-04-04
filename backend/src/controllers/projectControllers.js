/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const path = require("path");
const fs = require("fs");
const models = require("../models");

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.project
    .findById(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  let { name, description, technologyIds, link } = req.body;

  if (typeof technologyIds === "string") {
    technologyIds = JSON.parse(technologyIds);
  }

  // Assurer que technologyIds est bien un tableau d'entiers
  const validTechnologyIds = Array.isArray(technologyIds)
    ? technologyIds.map(Number)
    : [];
  // Vérifier les technologies validées

  // eslint-disable-next-line camelcase
  const image_1 = req.files?.image_1 ? req.files.image_1[0].filename : null;
  const image_2 = req.files?.image_2 ? req.files.image_2[0].filename : null;

  const project = { name, description, image_1, image_2, link };

  models.project
    .insert(project)
    .then((insertId) => {
      if (validTechnologyIds.length > 0) {
        return models.project.linkTechnologies(insertId, validTechnologyIds);
      }
      return insertId;
    })
    .then((projectId) => {
      res.status(201).json({
        success: "✅ Projet et technologies ajoutés avec succès !",
        projectId,
      });
    })
    .catch((err) => {
      console.error("❌ Erreur lors de l'ajout du projet : ", err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const projectId = req.params.id;

  // Étape 1: Récupérer le projet pour obtenir les images
  models.project
    .find(projectId)
    .then((project) => {
      // Étape 2: Supprimer les images du projet si elles existent
      if (project.image_1) {
        const imagePath1 = path.join(__dirname, "uploads", project.image_1);
        if (fs.existsSync(imagePath1)) {
          fs.unlinkSync(imagePath1); // Supprimer image 1
        }
      }

      if (project.image_2) {
        const imagePath2 = path.join(__dirname, "uploads", project.image_2);
        if (fs.existsSync(imagePath2)) {
          fs.unlinkSync(imagePath2); // Supprimer image 2
        }
      }

      // Étape 3: Supprimer les technologies associées au projet
      return models.project.deleteTechnologies(projectId);
    })
    .then(() => {
      // Étape 4: Supprimer le projet de la base de données
      return models.project.delete(projectId);
    })
    .then(([result]) => {
      // Étape 5: Vérifier si la suppression a été effectuée avec succès
      if (result.affectedRows === 0) {
        res.sendStatus(404); // Projet non trouvé
      } else {
        res.sendStatus(204); // Projet supprimé avec succès
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la suppression du projet:", err);
      res.sendStatus(500); // Erreur interne du serveur
    });
};

module.exports = {
  browse,
  read,
  add,
  destroy,
};
