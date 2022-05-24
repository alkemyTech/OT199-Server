'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      imageUrl: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      text: 'Demo',
      order: '1234',
      organizationId: 1,
      createdAt: new Date,
      updatedAt: new Date
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Slides', null, {});
     
  }
};
