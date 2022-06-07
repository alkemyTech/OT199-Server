const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/memberController');
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRole = require('../middlewares/checkRole');

router.post('/', [
  check('name', 'Field must be complete with your fullname').notEmpty().isString(),
  check('email', 'Must have a valid email').notEmpty().isEmail(),
  Validator.validateFields
], CheckRole.isUserLoggedIn, ContactController.storeContact);

router.get('/', CheckRole.isAdmin, ContactController.getAllContacts)



module.exports = router;