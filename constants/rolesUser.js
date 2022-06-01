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

  static RolesPermissions_GET = [1, 2, 3, 4, 5, 6, 7]

  static RolesPermissions_POST = [1, 3, 5]

  static RolesPermissions_PUT = [1, 3]

  static RolesPermissions_PATCH = [1, 2, 3]

  static RolesPermissions_DELETE = [1]
}

module.exports = RolesUser;