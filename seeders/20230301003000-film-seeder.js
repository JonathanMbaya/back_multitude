'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Film', [
      {
        titre: "Inception",
        description: "Film de Christopher Nolan sur les rêves et la réalité.",
        type: "Science-fiction",
        dateSortie: new Date('2010-07-16'),
        bandeAnnonce: "https://www.youtube.com/embed/YoHD9XEInc0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Parasite",
        description: "Un thriller captivant de Bong Joon-ho.",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        bandeAnnonce: "https://www.youtube.com/embed/SEUXfv87Wpk",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Film', null, {});
  }
};
