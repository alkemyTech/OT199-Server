const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatus');
const User = require('../models/user');
const CheckRoleId = require('./checkRole');


class Ownership {

    static classified(req, res, next) {
        const resolveToken = jwt.decode(token, { complete: true })

        const userId = resolveToken.payload.userId;

        if (!userId === req.user.Id) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Forbidden access' });
        } else {
            next()
        }

        if (CheckRoleId.isAdmin) {
            next()
        }

    }
};

module.exports = Ownership;