'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      facebookUrl: Sequelize.STRING,
      instagramUrl: Sequelize.STRING,
      linkedinUrl: Sequelize.STRING,
      image: Sequelize.STRING,
      description: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Members');
  }
};
