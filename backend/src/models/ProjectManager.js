const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection
      .query(
        `INSERT INTO ${this.table} (name, description, image_1, image_2) VALUES (?, ?, ?, ?)`,
        [project.name, project.description, project.image_1, project.image_2]
      )
      .then(([result]) => result.insertId);
  }

  linkTechnologies(projectId, technologyIds) {
    if (!technologyIds || technologyIds.length === 0) return Promise.resolve();

    const values = technologyIds.map((techId) => [projectId, techId]);
    return this.connection.query(
      `INSERT INTO projet_technologie (id_project, id_technologie) VALUES ?`,
      [values]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  deleteTechnologies(projectId) {
    return this.connection.query(
      `DELETE FROM projet_technologie WHERE id_project = ?`,
      [projectId]
    );
  }

  // Supprimer un projet
  delete(projectId) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      projectId,
    ]);
  }

  // Supprimer le projet et ses technologies associées
  deleteProjectAndTechnologies(projectId) {
    return this.deleteTechnologies(projectId)
      .then(() => {
        return this.delete(projectId);
      })
      .then(() => {
        return { message: "✅ Projet et technologies supprimés avec succès !" };
      });
  }
}
module.exports = ProjectManager;
