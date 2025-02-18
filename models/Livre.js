// models/Livre.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Livre = sequelize.define("Livre", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, // L'ID est la clé primaire
    unique: true, // S'assurer que chaque ID est unique
  },
  auteur: { type: DataTypes.STRING, allowNull: false },
  titre: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  datePublication: { type: DataTypes.DATE, allowNull: false },
  bandeAnnonce: { type: DataTypes.STRING },
}, {
  freezeTableName: true  // La table sera nommée "Livre" exactement
});

module.exports = Livre;
