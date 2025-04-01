const AbstractManager = require("./AbstractManager");

class TechnologieManager extends AbstractManager {
  constructor() {
    super({ table: "technologie" });
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  findNameTechnoByid(id) {
    return this.connection.query(
      `SELECT t.nom, t.type 
FROM technologie t
JOIN projet_technologie pt ON t.id = pt.id_technologie
WHERE pt.id_project = ?; `,
      [id]
    );
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = TechnologieManager;
