const express = require("express");
const Livre = require("../models/Livre");
const router = express.Router();

// 🔹 Récupérer tous les livres
router.get("/", async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).json(livres);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des livres", error });
  }
});

// 🔹 Ajouter un livre
router.post("/create", async (req, res) => {
  try {
    const { titre, description, datePublication, type, auteur, cover } = req.body;
    if (!titre || !description || !datePublication || !type || !auteur) {
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis." });
    }

    const livre = await Livre.create(req.body);
    res.status(201).json(livre);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du livre", error });
  }
});

// 🔹 Modifier un livre
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const livre = await Livre.findByPk(id);

    if (!livre) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    await Livre.update(req.body, { where: { id } });
    const updatedLivre = await Livre.findByPk(id);

    res.json({ message: "Livre mis à jour", livre: updatedLivre });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du livre", error });
  }
});

// 🔹 Supprimer un livre
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const livre = await Livre.findByPk(id);

    if (!livre) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    await Livre.destroy({ where: { id } });
    res.json({ message: `Livre avec l'ID ${id} supprimé.` });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du livre", error });
  }
});

module.exports = router;
