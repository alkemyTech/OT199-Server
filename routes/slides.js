const express = require('express');
const SlidesController = require('../controllers/slidesController');
const { check, oneOf, sanitizeBody, body } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();

router.put('/:id', [
  oneOf([
    check('imageUrl').notEmpty(),
    check('text').notEmpty(),
    check('order').notEmpty(),
    check('organizationId').notEmpty(),
  ],('Image, text ,order or organizationId is required')),
  Validator.validateFields,
  CheckRoleId.isAdmin
], SlidesController.update);

module.exports = router;