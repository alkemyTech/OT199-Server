const express = require('express');
const SlidesController = require('../controllers/slidesController');
const CheckRoleId = require('../middlewares/checkRole');
const { check, oneOf } = require('express-validator');
const Validator = require('../helpers/validator');
const router = express.Router();


/**
 * GET slide details 
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"text":string, "imageUrl": string, "order": integer} }
 */
router.get('/', CheckRoleId.isAdmin, Slides.getAll);

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