// seeders/xxxxxx-demo-category.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insérer les catégories par défaut
    await queryInterface.bulkInsert('Category', [
      {
        name: 'Littérature',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Musique',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cinéma',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Culture & Société',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Annuler l'insertion des catégories en cas de rollback
    await queryInterface.bulkDelete('Category', null, {});
  }
};
