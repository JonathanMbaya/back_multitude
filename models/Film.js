// models/Film.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Film = sequelize.define("Film", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, // L'ID est la clé primaire
    unique: true, // S'assurer que chaque ID est unique
  },
  titre: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  dateSortie: { type: DataTypes.DATE, allowNull: false },
  bandeAnnonce: { type: DataTypes.STRING },
}, {
  freezeTableName: true, // La table sera nommée exactement "Film"
});

module.exports = Film;
