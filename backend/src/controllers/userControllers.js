const { verify } = require("argon2");
const models = require("../models");
require("argon2");
const { generateToken } = require("../jwt/jwt");

const add = (req, res) => {
  const user = req.body;

  models.admin
    .insert(user)
    .then(() => {
      res.status(201).json({ success: "User saved" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const brows = (req, res) => {
  models.admin
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

const log = async (req, res) => {
  const { pseudo, password } = req.body;

  models.admin
    .findByName(pseudo)
    .then(([[admin]]) => {
      if (!admin) {
        return res.status(404).json({ error: "User not found" });
      }

      return verify(admin.password, password).then((match) => {
        if (match) {
          const token = generateToken({
            id: admin.id,
            pseudo: admin.pseudo,
          });

          return res
            .cookie("user_auth", token, { httpOnly: true, secure: false })
            .status(200)
            .json({ token, success: "User logged" });
        }
        return res.status(403).json({ error: "Password incorrect" });
      });
    })
    .catch((err) => {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = {
  add,
  brows,
  log,
};
