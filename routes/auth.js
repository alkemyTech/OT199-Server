const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateFields = require('../helpers/validateFields');
const { register } = require('../controllers/user.controller');

router.post('/register', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain at least 8 characters, inlcuding uppercase, lowercase and numbers').isStrongPassword({ minSymbols: 0 }),
    validateFields
], register);

module.exports = router;
