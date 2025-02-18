'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ajouter une colonne 'category' de type INTEGER à la table 'Article'
    await queryInterface.addColumn('Article', 'category', {
      type: Sequelize.INTEGER,
    });
    
    // Ajouter une contrainte de clé étrangère sur 'category' qui référence 'id' de la table 'Category'
    await queryInterface.addConstraint('Article', {
      fields: ['category'],
      type: 'foreign key',
      references: {
        table: 'Category', // Table référencée
        field: 'id',       // Clé primaire de la table 'Category'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Supprimer la contrainte de clé étrangère 'category' de la table 'Article'
    await queryInterface.removeConstraint('Article', 'Article_category_fkey');
    
    // Supprimer la colonne 'category' de la table 'Article'
    await queryInterface.removeColumn('Article', 'category');
  }
};
