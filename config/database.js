const { Sequelize } = require('sequelize');

// Connexion à PostgreSQL
const sequelize = new Sequelize(
  'postgres',
  'postgres', 
  'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false, // Désactive les logs SQL (optionnel)
  }
);

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
