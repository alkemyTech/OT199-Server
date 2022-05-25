<<<<<<< HEAD
const express = require('express');
const router = express.Router();
=======
var express = require('express');
var router = express.Router();
var { check } = require('express-validator');
var validateFields = require('../helpers/validateFields');
>>>>>>> 2ffecef7042717d7c9381d8e30373b5cb639a140
const UserController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
})

<<<<<<< HEAD
// Delete user for ID
router.delete('/users/:id', UserController.deleteUser)

module.exports = router;
=======
router.post('/auth/login', [
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password is not valid').not().isEmpty().isString(),
    validateFields
], UserController.logIn)

module.exports = router;
>>>>>>> 2ffecef7042717d7c9381d8e30373b5cb639a140
