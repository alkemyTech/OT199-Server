'use strict';
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Admin',
      lastName: '1',
      email: 'admin1@test.com',
      password: bcryptjs.hashSync('admin1pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '2',
      email: 'admin2@test.com',
      password: bcryptjs.hashSync('admin2pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '3',
      email: 'admin3@test.com',
      password: bcryptjs.hashSync('admin3pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '4',
      email: 'admin4@test.com',
      password: bcryptjs.hashSync('admin4pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '5',
      email: 'admin5@test.com',
      password: bcryptjs.hashSync('admin5pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '6',
      email: 'admin6@test.com',
      password: bcryptjs.hashSync('admin6pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '7',
      email: 'admin7@test.com',
      password: bcryptjs.hashSync('admin7pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '8',
      email: 'admin8@test.com',
      password: bcryptjs.hashSync('admin8pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '9',
      email: 'admin9@test.com',
      password: bcryptjs.hashSync('admin9pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'Admin',
      lastName: '10',
      email: 'admin10@test.com',
      password: bcryptjs.hashSync('admin10pass', salt),
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '1',
      email: 'no-admin1@test.com',
      password: bcryptjs.hashSync('noadmin1pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '2',
      email: 'no-admin2@test.com',
      password: bcryptjs.hashSync('noadmin2pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '3',
      email: 'no-admin3@test.com',
      password: bcryptjs.hashSync('noadmin3pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '4',
      email: 'no-admin4@test.com',
      password: bcryptjs.hashSync('noadmin4pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '5',
      email: 'no-admin5@test.com',
      password: bcryptjs.hashSync('noadmin5pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '6',
      email: 'no-admin6@test.com',
      password: bcryptjs.hashSync('noadmin6pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '7',
      email: 'no-admin7@test.com',
      password: bcryptjs.hashSync('noadmin7pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '8',
      email: 'no-admin8@test.com',
      password: bcryptjs.hashSync('noadmin8pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '9',
      email: 'no-admin9@test.com',
      password: bcryptjs.hashSync('noadmin9pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      firstName: 'No-Admin',
      lastName: '10',
      email: 'no-admin10@test.com',
      password: bcryptjs.hashSync('noadmin10pass', salt),
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
