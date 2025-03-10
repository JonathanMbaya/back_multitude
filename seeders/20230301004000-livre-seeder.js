'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Livre', [
      {
        auteur: "George Orwell",
        titre: "1984",
        description: "Un roman dystopique sur un futur totalitaire.",
        type: "Dystopie",
        datePublication: new Date('1949-06-08'),
        cover: "https://www.youtube.com/embed/example1984",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        auteur: "J.R.R. Tolkien",
        titre: "Le Seigneur des Anneaux",
        description: "L'épopée fantastique de Tolkien.",
        type: "Fantasy",
        datePublication: new Date('1954-07-29'),
        cover: "https://www.youtube.com/embed/exampleLOTR",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Livre', null, {});
  }
};
