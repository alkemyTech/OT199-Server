"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Organizations",
      [
        {
          name: "Somos Mas",
          image: "https://i.ibb.co/dgchjd3/LOGO-SOMOS-MAS.png",
          email: "somosfundacionmas@gmail.com",
          welcomeText: "Bienvenidos a Somos Más",
          phone: 1160112988,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Organizations", null, {});
  },
};
