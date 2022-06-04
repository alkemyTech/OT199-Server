'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Organizations', 'facebookUrl', {
          type: Sequelize.DataTypes.STRING
        }, {
          transaction: t
        }),
        queryInterface.addColumn('Organizations', 'instagramUrl', {
          type: Sequelize.DataTypes.STRING
        }, {
          transaction: t
        }),
        queryInterface.addColumn('Organizations', 'linkedinUrl', {
          type: Sequelize.DataTypes.STRING
        }, {
          transaction: t
        })
      ]);
    });
  },  
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Organizations', 'facebookUrl', {
          transaction: t
        }),
        queryInterface.removeColumn('Organizations', 'instagramUrl', {
          transaction: t
        }),
        queryInterface.removeColumn('Organizations', 'linkedinUrl', {
          transaction: t
        })
      ]);
    });
  }
};