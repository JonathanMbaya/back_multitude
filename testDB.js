require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion réussie à PostgreSQL !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
