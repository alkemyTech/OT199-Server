const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateFields = require('../helpers/validateFields');
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);


/* POST users login. */
router.post('/auth/login', [
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password is not valid').not().isEmpty().isString(),
    validateFields
], UserController.logIn)

module.exports = router;