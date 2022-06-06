'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [{
        id: 1,
        facebookUrl: 'Somos_Más',
        instagramUrl: 'SomosMás',
        linkedinUrl: '',
        updatedAt: new Date(),
      }, ], { updateOnDuplicate: ['facebookUrl', 'instagramUrl', 'linkedinUrl'] }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {});
  },
};