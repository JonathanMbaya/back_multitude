// routes/livres.js
const express = require("express");
const Livre = require("../models/Livre");
const router = express.Router();

router.get("/", async (req, res) => {
  const livre = await Livre.findAll();
  res.status(201).json(livre);
});

router.post("/create", async (req, res) => {
  const livre = await Livre.create(req.body);
  res.status(201).json(livre);
});

router.put("/:id", async (req, res) => {
  await Livre.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Livre mis à jour" });
});

router.delete("/:id", async (req, res) => {
  await Livre.destroy({ where: { id: req.params.id } });
  res.json({ message: "Livre supprimé" });
});

module.exports = router;
