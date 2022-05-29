'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Activities', [{
      name: 'Apoyo Escolar para el nivel Primario',
      content: 'Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.',
      image: 'https://drive.google.com/file/d/1ileZuq6dMphx9i-aFtz95iSDRsRVZgLj/view',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Apoyo Escolar Nivel Secundaria',
      content: 'Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos y la institución.',
      image: 'https://drive.google.com/file/d/1tBkFZIYz2Y1Tc1WIqKXS_H3YpZOSYDQJ/view',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Tutorías',
      content: 'El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de la articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan.',
      image: 'https://drive.google.com/file/d/1EfWmYnA2R49ZW8anbMT9Hg2J02pVT5D9/view',
      createdAt: new Date,
      updatedAt: new Date
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
  }
};
