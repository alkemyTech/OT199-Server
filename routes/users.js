var express = require('express');
var router = express.Router();
var { check } = require('express-validator');
var validateFields = require('../helpers/validateFields');
var { UserController } = require('../controllers/user.controller')


router.post('auth/login', [
    check('password').notEmpty().isString(),
    check('email').notEmpty().isEmail(),
    validateFields
], UserController.logIn)

module.exports = router;