"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Article", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      extrait: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
      },
      trend: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      datePublication: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      published_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Article");
  },
};
