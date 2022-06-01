const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const UserController = require('../controllers/userController');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);


// Delete user for ID
router.delete('/:id',CheckRoleId.isUserLoggedIn ,UserController.deleteUser)
/**
 * PATCH Update user
 * @param {number} id - The id of user
 * @param {string} firstName - User first Name
 * @param {string} lastName - User last Name
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} image - User image
 * @returns {number} status - Http Status Code
 * @returns {string} msg - Message response
 */
router.patch('/:id', CheckRoleId.isUserLoggedIn, [
    check('firstName', 'First name is required').optional().not().isEmpty(),
    check('lastName', 'Last name is required').optional().not().isEmpty(),
    check('email', 'Email is not valid').optional().isEmail(),
    check('image', 'Image is required').optional().not().isEmpty(),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').optional().isStrongPassword({
        minSymbols: 0
    }), Validator.validateFields
], UserController.updateDataUser);


module.exports = router;
