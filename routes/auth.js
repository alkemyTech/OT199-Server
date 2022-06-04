const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const UserController = require('../controllers/userController');

router.post('/register', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({ minSymbols: 0 }),
    Validator.validateFields
], UserController.register);


router.post('/login', [
    check('email', 'Email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password is not valid').not().isEmpty().isString(),
    Validator.validateFields
], UserController.logIn)

router.get('/me',UserController.getProfile)
module.exports = router;
