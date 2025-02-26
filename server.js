require("dotenv").config(); // Charge les variables d’environnement

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");
const filmRoutes = require("./routes/films");
const livreRoutes = require("./routes/livres");
const categoriesRoutes = require("./routes/categories");
const db = require("./models"); // Vérifie bien que le fichier `models/index.js` est correct

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// Définition des routes
app.use("/auth", authRoutes);
app.use("/articles", articleRoutes);
app.use("/films", filmRoutes);
app.use("/livres", livreRoutes);
app.use("/categories", categoriesRoutes);

// 🔥 Synchronisation de la base de données
db.sequelize
  .authenticate() // Vérifie d’abord la connexion
  .then(() => {
    console.log("✅ Connexion réussie à PostgreSQL");
    return db.sequelize.sync();
  })
  .then(() => {
    console.log("✅ Base de données synchronisée.");
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion à la base :", err);
  });

// 🚀 Utilisation de `process.env.PORT` pour Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
