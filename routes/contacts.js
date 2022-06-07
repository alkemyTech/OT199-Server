const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRole = require('../middlewares/checkRole');
const AuthUser = require('../middlewares/authUser');

router.post('/', [
    check('name', 'Field must be complete with your fullname').notEmpty().isString(),
    check('email', 'Must have a valid email').notEmpty().isEmail(),
    Validator.validateFields
], AuthUser, ContactController.createContact);

router.get('/', CheckRole.isAdmin, ContactController.getAllContacts)



module.exports = router;