'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize;

sequelize = new Sequelize(
  'postgres',
  'postgres', 
  'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false, // Désactive les logs SQL (optionnel)
  }
);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const modelImport = require(path.join(__dirname, file));
    const model = new modelImport(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;  // Vérifie que cette ligne est bien présente
db.Sequelize = Sequelize;

module.exports = db;
