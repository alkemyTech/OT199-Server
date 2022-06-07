const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');
const AuthUser = require('../middlewares/authUser');
const CheckRole = require('../middlewares/checkRole');
const { check } = require('express-validator');
const Validator = require('../helpers/validator');

router.get('/', CheckRole.isAdmin, ContactController.getAllContacts);

router.post('/', AuthUser, [
    check('name', 'must have a full name').notEmpty().isString(),
    check('email', 'Must contain a valid email').notEmpty().isEmail(),
    Validator.validateFields
], ContactController.createContact);



module.exports = router;