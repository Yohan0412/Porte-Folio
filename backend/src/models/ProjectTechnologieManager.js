const AbstractManager = require("./AbstractManager");

class ProjectTechnologieManager extends AbstractManager {
  constructor() {
    super({ table: "projet_technologie" });
  }

  technofindById(id) {
    return this.connection.query(
      `select id_project, id_technologie from ${this.table} where id = ?`,
      [id]
    );
  }
}

module.exports = ProjectTechnologieManager;
