require("dotenv").config(); // Charge les variables d'environnement

module.exports = {
  development: {
    username: process.env.DB_USER || "my_database_i0jd_user",
    password: process.env.DB_PASSWORD || "RH31PCqU7hExC5Kc0aKBrOgJg8rPYc5Z",
    database: process.env.DB_NAME || "my_database_i0jd",
    host: process.env.DB_HOST || "dpg-cus0no3v2p9s73aqk7jg-a",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Utile pour Render
      }
    }
  }
};
