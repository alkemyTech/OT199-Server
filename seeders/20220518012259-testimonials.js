'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', [{
        name: 'Cecilia',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'Somos un grupo de jóvenes que buscan ofrecer una respuesta a todas aquellas personas que quieren hacer algo por los demás pero la falta de tiempo se los impide. Facilitamos los lazos de ayuda mutua entre los que tienen alguna necesidad y los que desean ayudar. Trabajamos sobre las necesidades actuales y futuras.',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Gustavo',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'Somos un grupo de jóvenes que buscan ofrecer una respuesta a todas aquellas personas que quieren hacer algo por los demás pero la falta de tiempo se los impide. Facilitamos los lazos de ayuda mutua entre los que tienen alguna necesidad y los que desean ayudar. Trabajamos sobre las necesidades actuales y futuras.',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Manuel',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'Somos un grupo de jóvenes que buscan ofrecer una respuesta a todas aquellas personas que quieren hacer algo por los demás pero la falta de tiempo se los impide. Facilitamos los lazos de ayuda mutua entre los que tienen alguna necesidad y los que desean ayudar. Trabajamos sobre las necesidades actuales y futuras.',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};