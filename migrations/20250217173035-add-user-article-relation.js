module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableInfo = await queryInterface.describeTable("Article");

    if (!tableInfo.published_by) {  // Vérifie si la colonne existe déjà
      await queryInterface.addColumn("Article", "published_by", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Article", "published_by");
  }
};
