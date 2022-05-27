const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateFields = require('../helpers/validateFields');
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);


<<<<<<< HEAD
// Delete user for ID
router.delete('/users/:id', UserController.deleteUser)

router.post('/auth/login', [
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password is not valid').not().isEmpty().isString(),
    validateFields
], UserController.logIn)
=======
>>>>>>> bf69180396469c636cd554c2cd52fdf3a38c7fa5

module.exports = router;
