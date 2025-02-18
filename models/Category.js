const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("Category", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, // L'ID est la clé primaire
    unique: true, // S'assurer que chaque ID est unique
  },
  name: { 
    type: DataTypes.STRING, // Utilisation de STRING pour la validation de la longueur
    allowNull: false, // Le nom est obligatoire
    validate: {
      len: [3, 100], // Validation de la longueur du nom de la catégorie
    },
  },
}, {
  freezeTableName: true, // La table sera nommée exactement "Category"
  timestamps: true, // Ajoute `createdAt` et `updatedAt` automatiquement
});

module.exports = Category;
