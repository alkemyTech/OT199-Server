'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      id:{
        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER,
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
      deletedAt: {
        type: Sequelize.DATE,
      },
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
