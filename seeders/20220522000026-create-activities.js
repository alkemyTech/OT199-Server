'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Activities', [{
      name: 'Activity',
      content: 'Example text here',
      image: 'https://drive.google.com/drive/u/2/folders/15S0mymkTX2Tg_dIbAwDmosm-6xc4E95f',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
  }
};
