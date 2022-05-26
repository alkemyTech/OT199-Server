require('dotenv').config();
const jwt = require('jsonwebtoken');
const rolesUser = require('../constants/rolesUser');

class CheckRoleId {
  static isAdmin(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.token || req.params.token
    jwt.verify(accessToken, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        res.status(400).json({
          meta: {
            response: false
          },
          msg: 'Access denied, token expire or incorrect',
        });
      };

      if (user.role !== rolesUser.Roles.adminId) {
        res.status(401).json({
          meta: {
            response: false,
          },
          msg: 'Access denied, you do not have authorization to enter',
        });
      };
    });

    next();
  };
};

module.exports = CheckRoleId