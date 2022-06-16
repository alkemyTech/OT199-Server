"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 2,
          body: "Muy buena la noticia, es bueno saber un poco más del tema. Espero sigan adelante!!",
          newsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          body: "Genial todo, Gracias!!!!",
          newsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          body: "Una buena novedad, estaría bueno tener más datos al respecto!!!",
          newsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
