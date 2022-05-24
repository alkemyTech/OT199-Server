'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Demo 1',
        description: 'DESCRIPCION 1',
        image: 'image_1.png',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Demo 2',
        description: 'DESCRIPCION 2',
        image: 'image_2.png',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: 'Demo 3',
        description: 'DESCRIPCION 3',
        image: 'image_3.png',
        createdAt: new Date,
        updatedAt: new Date,
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});

  }
};
