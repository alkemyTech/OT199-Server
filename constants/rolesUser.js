class RolesUser {
  static Roles = {
    Admin: 1,
    Estudiante: 2,
    Docente: 3,
    Voluntario: 4,
    Tutor: 5,
    Colaborador: 6,
    Visitante: 7
  }

  static RolesPermissions_GET = {
    ApoyoEscolarNivelPrimaria: [1, 2, 3, 4, 5, 6, 7],
    ApoyoEscolarNivelSecundaria: [1, 2, 3, 4, 5, 6, 7],
    Tutorias: [1, 2, 3, 4, 5, 6, 7]
  }

  static RolesPermissions_POST = {
    ApoyoEscolarNivelPrimaria: [1, 3],
    ApoyoEscolarNivelSecundaria: [1, 3],
    Tutorias: [1, 3, 5]
  }

  static RolesPermissions_UPDATE = {
    ApoyoEscolarNivelPrimaria: [1, 2, 3],
    ApoyoEscolarNivelSecundaria: [1, 2, 3],
    Tutorias: [1, 2, 3, 5]
  }

  static RolesPermissions_DELETE = {
    ApoyoEscolarNivelPrimaria: [1],
    ApoyoEscolarNivelSecundaria: [1],
    Tutorias: [1, 5]
  }


}

module.exports = RolesUser;