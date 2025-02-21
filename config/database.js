const { Sequelize } = require('sequelize');
require("dotenv").config(); // Charge les variables d'environnement

// Connexion à PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // Désactiver les logs SQL
});

// Vérifier la connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie.');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error);
  }
};

testConnection();

module.exports = sequelize;
