var express = require('express');
var router = express.Router();
var { check } = require('express-validator');
var validateFields = require('../helpers/validateFields');
const UserController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
})

// Delete user for ID
router.delete('/users/:id', UserController.deleteUser)

router.post('/auth/login', [
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password is not valid').not().isEmpty().isString(),
    validateFields
], UserController.logIn)

module.exports = router;
