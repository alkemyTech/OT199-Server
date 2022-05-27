const jwt = require('jsonwebtoken');
const {
  NUMERIC
} = require('sequelize');
const {
  NUMBER
} = require('sequelize');
const rolesUser = require('../constants/rolesUser');
const httpStatus = require('../helpers/httpStatus');
require('dotenv').config()


class CheckRoleId {
  static isAdmin(req, res, next) {

    // recupera token bearer
    const bearer = req.headers.authorization;
    const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');
    
    jwt.verify(accessToken, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        res.status(httpStatus.BAD_REQUEST).json({
          meta: {
            response: false
          },
          msg: 'Access denied, token expire or incorrect',
        })
      }

      if (user.role !== rolesUser.Roles.adminId) {
        res.status(httpStatus.UNAUTHORIZED).json({
          meta: {
            response: false,
          },
          msg: 'Access denied, you do not have authorization to enter',
        })
      }
    })
    next();
  }

  static isUserLoggedIn(req, res, next) {

    const id = Number.parseInt(req.params.id);

    // recupera token bearer
    const bearer = req.headers.authorization;
    const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');

    // valida token y deja en user si tuvo exito
    jwt.verify(accessToken, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        res.status(httpStatus.BAD_REQUEST).json({
          meta: {
            response: false
          },
          msg: 'Access denied, token expire or incorrect',
        })
      }

      if (user.id !== id) {
        res.status(httpStatus.UNAUTHORIZED).json({
          meta: {
            response: false,
          },
          msg: 'Access denied, you do not have authorization to enter',
        })
      }
    })
    next();
  }
}

module.exports = CheckRoleId