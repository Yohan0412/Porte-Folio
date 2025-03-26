const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, password) values (?,?)`,
      [admin.pseudo, admin.password]
    );
  }

  findByName(id) {
    return this.connection.query(
      `select id, pseudo, password from ${this.table} where pseudo = ?`,
      [id]
    );
  }

  findByid(id) {
    return this.connection.query(
      `select id, pseudo, password from ${this.table} where id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
