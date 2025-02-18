// routes/films.js
const express = require("express");
const Film  = require("../models/Film");
const router = express.Router();

router.get("/", async (req, res) => {
  const film = await Film.findAll();
  res.status(201).json(film);
});


router.post("/create", async (req, res) => {
  const film = await Film.create(req.body);
  res.status(201).json(film);
});

router.put("/:id", async (req, res) => {
  await Film.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Film mis à jour" });
});

router.delete("/:id", async (req, res) => {
  await Film.destroy({ where: { id: req.params.id } });
  res.json({ message: "Film supprimé" });
});

module.exports = router;
