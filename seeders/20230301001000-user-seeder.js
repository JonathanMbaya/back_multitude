'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password', 10);
    await queryInterface.bulkInsert('User', [
      {
        nom: 'Doe',
        prenom: 'John',
        email: 'john.do@example.com',
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Smith',
        prenom: 'Jane',
        email: 'jane.smi@example.com',
        password: hashedPassword,
        role: 'editeur',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
