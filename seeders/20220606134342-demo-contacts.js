'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [{
        name: 'John Doe',
        phone: '55512345',
        email: 'john@mail.com',
        message: 'Me gustaría conocer mejor la propuesta, y por favor les pido me envíen información a mi mail. En caso de podear llamarme, me encuentro disponible todos los días despues de las 20hs. Gracias',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Alex Doe',
        phone: '55554321',
        email: 'alex@mail.com',
        message: 'Me gustaría conocer mejor la propuesta, y por favor les pido me envíen información a mi mail. En caso de podear llamarme, me encuentro disponible todos los días despues de las 20hs. Gracias',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};