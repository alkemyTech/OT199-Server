const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);



/**
 * PATCH Update user
 * @param {number} id - The id of user
 */
router.patch('/:id', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({
        minSymbols: 0
    }), Validator.validateFields
], UserController.updateDataUser);

module.exports = router;