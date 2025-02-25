const express = require("express");
const Joi = require("joi");
const Article = require("../models/Article");
const Category = require("../models/Category");

const router = express.Router();

// Schéma de validation Joi
const articleSchema = Joi.object({
  titre: Joi.string().min(3).max(255).required(),
  extrait: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  video: Joi.string().uri().allow(""),
  trend: Joi.boolean().required(),
  datePublication: Joi.date().required(),
  category: Joi.number().integer().required(),
  published_by: Joi.number().integer().required(),
});

// Récupérer tous les articles avec catégorie
router.get("/all", async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [{ model: Category, attributes: ["name"] }],
    });
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des articles");
  }
});

// Récupérer un article par son ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ["name"] }],
    });
    if (!article) return res.status(404).send("Article non trouvé");
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération de l'article");
  }
});

// Récupérer les articles tendance
router.get("/trend/trending", async (req, res) => {
  try {
    const trendingArticles = await Article.findAll({
      where: { trend: true },
      limit: 3,
    });
    res.json(trendingArticles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des articles tendance");
  }
});

// Récupérer les derniers articles
router.get("/last/latest", async (req, res) => {
  try {
    const latestArticles = await Article.findAll({
      order: [["datePublication", "DESC"]],
      limit: 5,
    });
    res.json(latestArticles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des derniers articles");
  }
});

// Récupérer un article par catégorie (ID)
router.get("/category/:category", async (req, res) => {
  try {
    const categoryId = parseInt(req.params.category, 10);
    if (isNaN(categoryId)) {
      return res.status(400).send("L'ID de la catégorie n'est pas valide");
    }
    
    const articles = await Article.findAll({
      where: { category: categoryId },
      include: [{ model: Category, attributes: ["name"] }],
    });

    if (articles.length === 0) {
      return res.status(404).send("Aucun article trouvé pour cette catégorie");
    }

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des articles par catégorie");
  }
});

// Créer un article
router.post("/", async (req, res) => {
  try {
    const {titre, extrait, description, text, readTime, datePublication, category, image, video, trend, published_by,} = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const article = await Article.create({
      titre,
      extrait,
      description,
      text,
      readTime,
      datePublication,
      category,
      image,
      video,
      trend,
      published_by,
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de l'article" });
  }
});

// Mettre à jour un article
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).send("L'ID fourni n'est pas valide");
  }

  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).send("Article non trouvé");
    }

    await article.update(req.body);
    res.json({ message: "Article mis à jour avec succès", article });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la mise à jour de l'article");
  }
});


// Supprimer un article
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).send("L'ID fourni n'est pas valide");
  }

  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).send("Article non trouvé");
    }

    await article.destroy();
    res.json({ message: "Article supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la suppression de l'article");
  }
});

module.exports = router;
