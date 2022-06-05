const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middlewares/checkRole');
const TestimonialsController = require('../controllers/testimonialsController');

router.post('/',[
  CheckRoleId.isAdmin,
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  Validator.validateFields
], TestimonialsController.createTestimonial);

module.exports = router;