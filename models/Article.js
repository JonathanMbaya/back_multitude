const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Category = require("./Category");

const Article = sequelize.define("Article", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true, // L'ID est la clé primaire
    unique: true, // S'assurer que chaque ID est unique
  },
  titre: { type: DataTypes.STRING, allowNull: false },
  extrait: { type: DataTypes.TEXT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  image: { type: DataTypes.STRING },
  video: { type: DataTypes.STRING },
  trend: { type: DataTypes.BOOLEAN, defaultValue: false },
  datePublication: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  published_by: { type: DataTypes.INTEGER, allowNull: false },
}, {
  freezeTableName: true,
});

// La bonne relation entre Article et Category
Article.belongsTo(Category, { foreignKey: 'category' });  // Un article appartient à une catégorie

// Relation entre Article et User
Article.belongsTo(User, { foreignKey: "published_by" });  // Un article est publié par un utilisateur

// Ajout de la relation inverse
Category.hasMany(Article, { foreignKey: 'category' });  // Une catégorie a plusieurs articles

// Relation entre Article et User
User.hasMany(Article, {foreignKey: 'published_by'})

module.exports = Article;
