const models = require("../models");

const browse = (req, res) => {
  models.technologie
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

module.exports = {
  browse,
};
