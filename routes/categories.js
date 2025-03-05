const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories); // ✅ 200 OK au lieu de 201
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({ message: "Erreur serveur, impossible de récupérer les catégories." });
  }
});

module.exports = router;
