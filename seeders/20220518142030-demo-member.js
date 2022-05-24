'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name: 'Maria Irola',
      description: 'Fundadora',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Marita Gomez',
      description: 'Fundadora',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Miriam Rodriguez',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Cecilia Mendez',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Mario Fuentes',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Rodrigo Fuente',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Maria Garcia',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Marco Fernandez',
      description: 'Colaborador',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Members", null, {});
  }
};
