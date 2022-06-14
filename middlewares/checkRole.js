const jwt = require('jsonwebtoken');
const rolesUser = require('../constants/rolesUser');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const generaToken = require('../helpers/generateToken');
const { Comment } = require('../models');
require('dotenv').config();

class CheckRoleId {
  static async isAdmin(req, res, next) {

    const user = await getDataBearer(req.headers.authorization);

    if (!user) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({
          msg: 'Access denied, token expire or incorrect',
        });
    } else {
      if (user.role !== rolesUser.Roles.Admin) {
        res
          .status(httpStatus.UNAUTHORIZED)
          .json({
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

    if (!user) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({
          msg: 'Access denied, token expire or incorrect',
        });
    } else {
      if (user.id !== id) {
        res.status(httpStatus.UNAUTHORIZED)
          .json({
            msg: 'Access denied, you do not have authorization to enter',
          });
      } else {
        next();
      }
    }
  }

  static async isOwnerComment(req, res, next){
    const user = await getDataBearer(req.headers.authorization);
    let ownerComment;

    if(!user){
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          msg: 'Access denied, token expire or incorrect',
        });
    }

    try{
      ownerComment = await Comment.findOne({where:{userId: user.id}});
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    }
  
    if(ownerComment.userId === user.id || user.role === 1){
      next();
    } else {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({
          msg: 'Access denied, you do not have authorization to enter',
        });
    }
  }
  
}
async function getDataBearer(bearer) {
  const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');

  const data = generaToken.verifyToken(accessToken);

  return data
}

module.exports = CheckRoleId