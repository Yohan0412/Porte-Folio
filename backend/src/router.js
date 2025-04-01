const express = require("express");
const upload = require("./Tools/upload");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const itemControllers = require("./controllers/itemControllers");
const technologieControllers = require("./controllers/technologieControllers");
const hashPassword = require("./middlewares/hashPassword");
const projetControllers = require("./controllers/projectControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post(
  "/addproject",
  upload.fields([
    { name: "image_1", maxCount: 1 },
    { name: "image_2", maxCount: 1 },
  ]),
  projetControllers.add
);

router.get("/technologie", technologieControllers.browsetech);
router.get("/projets", projetControllers.browse);
router.get("/technologie/:id", technologieControllers.getTech);
router.get("/projet/:id", projetControllers.read);
router.delete("/supprprojet", projetControllers.destroy);
router.post("/login", userControllers.log);
router.get("/admin", userControllers.brows);
router.post("/newadmin", hashPassword, userControllers.add);
module.exports = router;
