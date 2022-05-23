"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Organizations",
      [
        {
          name: "Ong-example",
          image:
            "https://www.computerstechdesign.com/images/diseno-web-ong-barato.png",
          address: "example address 111",
          email: "ong@example.com",
          welcomeText: "Example welcome text",
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
