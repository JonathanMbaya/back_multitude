// server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");
const filmRoutes = require("./routes/films");
const livreRoutes = require("./routes/livres");
const db = require('./models');  // Assure-toi que c'est bien './models'

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/auth", authRoutes);
app.use("/articles", articleRoutes);
app.use("/films", filmRoutes);
app.use("/livres", livreRoutes);

db.sequelize.sync()  // Remplace `sequelize.sync()` par `db.sequelize.sync()`
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });

app.listen(5000, () => console.log("Serveur démarré sur le port 5000"));