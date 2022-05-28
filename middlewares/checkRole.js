const jwt = require('jsonwebtoken');
const rolesUser = require('../constants/rolesUser');
const httpStatus = require('../helpers/httpStatus');
require('dotenv').config()


class CheckRoleId {
  static async isAdmin(req, res, next) {

    const user = await getDataBearer(req.headers.authorization);

    if (!user) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({
          meta: {
            response: false
          },
          msg: 'Access denied, token expire or incorrect',
        });
    } else {
      if (user.role !== rolesUser.Roles.adminId) {
        res
          .status(httpStatus.UNAUTHORIZED)
          .json({
            meta: {
              response: false,
            },
            msg: 'Access denied, you do not have authorization to enter',
          });
      } else {
        next();
      }
    }
  }

  static async isUserLoggedIn(req, res, next) {

    const id = Number.parseInt(req.params.id);

    const user = await getDataBearer(req.headers.authorization);
console.log(user);

    if (!user) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({
          meta: {
            response: false
          },
          msg: 'Access denied, token expire or incorrect',
        });
    } else {
      if (user.id !== id) {
        res.status(httpStatus.UNAUTHORIZED)
          .json({
            meta: {
              response: false,
            },
            msg: 'Access denied, you do not have authorization to enter',
          });
      } else {
        next();
      }
    }
  }
}
async function getDataBearer(bearer) {
  const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');

  try {
    // valida token y deja en user si tuvo exito
    const data = await jwt.verify(accessToken, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return null;
  }
}

module.exports = CheckRoleId