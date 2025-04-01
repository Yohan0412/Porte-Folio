const models = require("../models");

const readtechno = (req, res) => {
  models.projet_technologie
    .technotechnofindById(req.params.id)
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

module.exports = {
  readtechno,
};
