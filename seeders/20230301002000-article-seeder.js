'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Récupérer toutes les catégories pour obtenir leurs IDs
    const categories = await queryInterface.sequelize.query(
      `SELECT id, name FROM "Category";`, 
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Fonction pour trouver l'ID d'une catégorie à partir de son nom
    const getCategoryID = (categoryName) => {
      const category = categories.find(cat => cat.name === categoryName);
      return category ? category.id : null;
    };

    // Insérer les articles avec les IDs des catégories récupérés
    await queryInterface.bulkInsert('Article', [
      {
        titre: "La révolution du streaming musical",
        extrait: "Analyse de l'évolution du streaming musical.",
        description: "Contenu complet sur l'impact du streaming musical sur l'industrie.",
        image: "https://example.com/image1.jpg",
        video: "https://example.com/video1.mp4",
        trend: false,
        datePublication: new Date(),
        category: getCategoryID("Musique"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs films de 2024",
        extrait: "Sélection des films incontournables de l'année.",
        description: "Analyse et critique des films marquants.",
        image: "https://example.com/image2.jpg",
        video: "https://example.com/video2.mp4",
        trend: false,
        datePublication: new Date(),
        category: getCategoryID("Cinéma"),
        published_by: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: "Les meilleurs livres de 2024",
        extrait: "Sélection des livres incontournables de cette année.",
        description: "Critiques et recommandations littéraires.",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4",
        trend: true,
        datePublication: new Date(),
        category: getCategoryID("Littérature"),
        published_by: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Article', null, {});
  }
};
