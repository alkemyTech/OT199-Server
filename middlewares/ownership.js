const jwt = require('jsonwebtoken');
const httpStatus = require('../helpers/httpStatus');
const rolesUser = require('../constants/rolesUser');
const { CheckRoleId } = require('./checkRole')


class Ownership {

    static async ownershipGetMethod(req, res, next) {

        const data = req.headers.authorization;

        if (!data) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
        const resolveToken = jwt.decode(data, { complete: true })

        const userRoleId = resolveToken.roleId;

        function getPermissions(userRoleId) {

            return rolesUser.RolesPermissions_POST.includes(userRoleId)
        }

        if (getPermissions === true) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
    }

    static ownershipPostMethod(req, res, next) {

        const data = req.headers.authorization.split(" ").pop();
        if (!data) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
        const resolveToken = jwt.decode(data, { complete: true });
        const userRoleId = resolveToken.payload.role;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_POST.includes(userRoleId)
        }

        if (getPermissions === true) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
    }


    static ownershipPutMethod(req, res, next) {


        const data = req.headers.authorization.split(" ").pop();
        if (!data) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
        const resolveToken = jwt.decode(data, { complete: true });
        const userRoleId = resolveToken.payload.role;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_PUT.includes(userRoleId)
        }

        if (getPermissions) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
    }

    static ownershipPatchMethod(req, res, next) {


        const data = req.headers.authorization.split(" ").pop();
        if (!data) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
        const resolveToken = jwt.decode(data, { complete: true });
        const userRoleId = resolveToken.payload.role;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_PATCH.includes(userRoleId)
        }

        if (getPermissions) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
    }

    static ownershipDeleteMethod(req, res, next) {


        const data = req.headers.authorization.split(" ").pop();
        if (!data) {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
        const resolveToken = jwt.decode(data, { complete: true });
        const userRoleId = resolveToken.payload.role;

        function getPermissions(userRoleId) {
            return rolesUser.RolesPermissions_DELETE.includes(userRoleId)
        }

        if (getPermissions) {
            next()
        } else {
            res.status(httpStatus.FORBIDDEN).json({ msg: 'Access denied, you do not have authorization to enter' })
        }
    }
};

module.exports = Ownership;