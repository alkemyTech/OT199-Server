const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateFields = require('../helpers/validateFields');
const UserController = require('../controllers/user.controller');
const DBValidators = require('../helpers/dbValidators');

router.post('/register', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('email').custom( DBValidators.emailExists ),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({ minSymbols: 0 }),
    validateFields
], UserController.register);

module.exports = router;
