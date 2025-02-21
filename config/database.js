const { Sequelize } = require('sequelize');

// Connexion à PostgreSQL
const sequelize = new Sequelize(
  'my_database_i0jd',
  'my_database_i0jd_user', 
  'RH31PCqU7hExC5Kc0aKBrOgJg8rPYc5Z', {
  host: 'dpg-cus0no3v2p9s73aqk7jg-a',
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
