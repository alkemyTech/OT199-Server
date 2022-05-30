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

  static RolesPermissions = {
    ApoyoEscolarNivelPrimaria: 1,
    ApoyoEscolarNivelSecundaria: 2,
    Tutorias: 3
  }
}

module.exports = RolesUser;