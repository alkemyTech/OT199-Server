'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('News', [{
      name: 'John Doe',
      image:"/fgwegerg" ,
      content:"Lorem ismy" ,
      categoryId: 1,
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('News', null, {});

  }
};
