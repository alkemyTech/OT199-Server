class RolesUser {
  static Roles = {
    Admin: 1,
    Standard: 2
  }

  static RolesPermissions_GET = [1, 2]

  static RolesPermissions_POST = [1]

  static RolesPermissions_PUT = [1]

  static RolesPermissions_PATCH = [1, 2]

  static RolesPermissions_DELETE = [1]
}

module.exports = RolesUser;