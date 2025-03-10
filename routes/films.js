const express = require("express");
const Film = require("../models/Film");
const router = express.Router();

// 🔹 Récupérer tous les films
router.get("/", async (req, res) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des films", error });
  }
});

// 🔹 Ajouter un film
router.post("/create", async (req, res) => {
  try {
    const { titre, description, dateSortie, type, cover, trailer } = req.body;
    if (!titre || !description || !dateSortie || !type) {
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis." });
    }
    
    const film = await Film.create(req.body);
    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du film", error });
  }
});

// 🔹 Modifier un film
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const film = await Film.findByPk(id);

    if (!film) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    await Film.update(req.body, { where: { id } });
    const updatedFilm = await Film.findByPk(id);
    
    res.json({ message: "Film mis à jour", film: updatedFilm });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du film", error });
  }
});

// 🔹 Supprimer un film
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const film = await Film.findByPk(id);

    if (!film) {
      return res.status(404).json({ message: "Film non trouvé" });
    }

    await Film.destroy({ where: { id } });
    res.json({ message: `Film avec l'ID ${id} supprimé.` });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du film", error });
  }
});

module.exports = router;
