'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name: 'Demo-member',
      facebookUrl: 'www.facebook.com/demo.member',
      instagramUrl: 'www.instagram.com/demo_member',
      linkedinUrl: 'www.linkedin.com/in/demo-member',
      image: 'https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1708/lightfieldstudios170801600/83495240-hombre-sonriente-mirando-a-c%C3%A1mara-aislada-en-blanco.jpg?fj=1',
      description: 'Demo member to test database',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Members", null, {});
  }
};
