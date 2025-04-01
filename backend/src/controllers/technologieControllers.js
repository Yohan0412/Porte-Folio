const models = require("../models");

const getTech = (req, res) => {
  // eslint-disable-next-line camelcase
  const id_project = req.params.id;

  models.technologie
    .findNameTechnoByid(id_project)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

const browsetech = (req, res) => {
  models.technologie
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getTech,
  browsetech,
};
