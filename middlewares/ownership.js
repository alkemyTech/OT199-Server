const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatus');
const rolesUser = require('../constants/rolesUser');


class Ownership {

    static myOwnOwner(req, res, next) {
        const { headers } = req;

        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(headers['users-token'], { complete: true });

        const userId = resolveToken.id;

        try {
            const findUserId = await User.findByPk(userId);
            if (!findUserId) {
                res.status(httpStatus.NOT_FOUND).json({ msg: 'Error in the DB' });
            } else {
                next();
            }
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error.array);
        }


    }

    static ownershipGetMethod(req, res, next) {
        const { headers } = req;

        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(headers['users-token'], { complete: true })

        const userRoleId = resolveToken.roleId;

        if (userRoleId === 1) {
            next()
        } else {
            res.status(httpStatus.UNAUTHORIZED).json({ msg: 'You don\'t have access in this site' })
        }
    }

    static ownershipPostMethod(req, res, next) {

        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(headers['users-token'], { complete: true })

        const userRoleId = resolveToken.roleId;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_POST.includes(userRoleId)
        }

        if (userRoleId === 1) {
            next()
        } else if (getPermissions == false) {
            res.status(httpStatus.UNAUTHORIZED).json({ msg: 'You don\'t have access in this site' })
        } else if (getPermissions == true) {
            next()
        }
    }


    static ownershipUpdateMethod(req, res, next) {

        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(headers['users-token'], { complete: true })

        const userRoleId = resolveToken.roleId;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_UPDATE.includes(userRoleId)
        }

        if (userRoleId === 1) {
            next()
        } else if (getPermissions == false) {
            res.status(httpStatus.UNAUTHORIZED).json({ msg: 'You don\'t have access in this site' })
        } else if (getPermissions == true) {
            next()
        }
    }

    static ownershipDeleteMethod(req, res, next) {

        if (!headers['users-token']) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'You must be logged in' })
        }
        const resolveToken = jwt.decode(headers['users-token'], { complete: true })

        const userRoleId = resolveToken.roleId;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_DELETE.includes(userRoleId)
        }

        if (userRoleId === 1) {
            next()
        } else if (getPermissions == false) {
            res.status(httpStatus.UNAUTHORIZED).json({ msg: 'You don\'t have access in this site' })
        } else if (getPermissions == true) {
            next()
        }
    }
};

module.exports = Ownership;