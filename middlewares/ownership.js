const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatus');
const User = require('../models/user');
const CheckRoleId = require('./checkRole');
const rolesUser = require('../constants/rolesUser');


class Ownership {

    static async classified(req, res, next) {
        const { headers } = req;
        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(token, { complete: true })

        const userRoleId = resolveToken.payload.roleId;

        if (userRoleId === 1) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You don\'t have access in this site' })
        }
    }
};

module.exports = Ownership;