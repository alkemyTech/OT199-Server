'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Public',
        description: 'Usuario regular',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
