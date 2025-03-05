'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Film', [
      {
        titre: "La Plus Précieuse des marchandises",
        description: "Un film d'animation poignant de Michel Hazanavicius sur l'Holocauste, basé sur le livre de Jean-Claude Grumberg.",
        cover: "https://fr.web.img6.acsta.net/img/6b/bf/6bbf674e166f0f6e921298bd13280381.jpg",
        trailer: "https://www.youtube.com/watch?v=example1",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Direct Action",
        description: "Un documentaire fascinant de Guillaume Cailleau et Ben Russell, capturant la vie quotidienne dans la ZAD de Notre-Dame-des-Landes après l'abandon du projet d'aéroport en 2018.",
        cover: "https://shellacfilms.com/wp-content/uploads/2024/01/Affiche-DIRECT-ACTION-HD-scaled.jpg",
        trailer: "https://www.youtube.com/watch?v=example2",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Diamant brut",
        description: "Un long-métrage d'Agathe Riedinger qui explore l'obsession d'une jeune femme de 19 ans pour l'apparence et la reconnaissance.",
        cover: "https://fr.web.img6.acsta.net/img/13/6a/136a83527c596c81fdb74c8b81ec057a.jpg",
        trailer: "https://www.youtube.com/watch?v=example3",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "La Passion selon Béatrice",
        description: "Un road-movie en noir et blanc de Fabrice du Welz avec Béatrice Dalle sur les traces de Pasolini en Italie.",
        cover: "https://carlottafilms.com/wp-content/uploads/2024/08/AFF-LA-PASSION-SELON-B%C3%89ATRICE-HD-scaled.jpg",
        trailer: "https://www.youtube.com/watch?v=example4",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Le Choix",
        description: "Un film de Dania Reymond-Boughenou sur des tempêtes de poussière en Algérie.",
        cover: "https://fr.web.img6.acsta.net/img/3e/10/3e10a9866861fc64911fb0acc34c3a3d.jpg",
        trailer: "https://www.youtube.com/watch?v=example5",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Ni Chaînes Ni Maîtres",
        description: "1759. Isle de France (actuelle île Maurice). ​Massamba et Mati, esclaves dans la plantation d’Eugène Larcenet, vivent dans la peur et le labeur. Lui rêve que sa fille soit affranchie, elle de quitter l’enfer vert de la canne à sucre. Une nuit, elle s’enfuit",
        cover: "https://fr.web.img4.acsta.net/img/06/b4/06b4917de6c12c2daef10902a7495909.jpg",
        trailer: "https://www.youtube.com/embed/Rr3QFNoLXuo?si=YP0qD6OCT6ax15Ij",
        type: "Thriller",
        dateSortie: new Date('2019-05-30'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Film', null, {});
  }
};
