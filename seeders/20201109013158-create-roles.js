'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador, permiso CRUD en todas las areas de la organizacion',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Estudiante',
        description: 'Usuario regular del programa educativo, ya sea del primario, secundario o tutorias',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Docente',
        description: 'Puede hacer crear, modificar y leer todas las actividades de los niveles primarios y secundarios. Tambien tener acceso a los estudiantes registrados en el-los nivel-es que participen',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Voluntario',
        description: 'Pueden sumarse a las actividades propuestas en la organizacion, solo pueden leer e inscribirse en ellas',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Tutor',
        description: 'Pueden asociarse a los estudiantes que posean una beca, solo pueden tener acceso a los datos de los estudiantes a cargo y los cursos en los que participan',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Colaborador',
        description: 'Miembros de la organizacion, pueden modificar y leer las actividades de la organizacion',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Visitante',
        description: 'Usuario no logueado, puede leer index, testimonios, news y enviar consultas',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {})

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Roles', null, {});
    }
  }
};
