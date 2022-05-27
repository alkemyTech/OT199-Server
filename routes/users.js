const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);

/**
 * PATCH Update user
 * @param {number} id - The id of user
 * @param {string} firstName - User first Name
 * @param {string} lastName - User last Name
 * @param {string} email - User email
 * @param {string} password - User password
 */
router.patch('/:id', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({
        minSymbols: 0
    }), Validator.validateFields
], CheckRoleId.isUserLoggedIn, UserController.updateDataUser);

module.exports = router;