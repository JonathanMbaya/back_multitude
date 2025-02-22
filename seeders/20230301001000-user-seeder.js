'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {
        nom: 'Doe',
        prenom: 'John',
        email: 'john.do@example.com',
        password: bcrypt.hashSync("password", 10),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Smith',
        prenom: 'Jane',
        email: 'jane.smi@example.com',
        password: bcrypt.hashSync("password", 10),
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
