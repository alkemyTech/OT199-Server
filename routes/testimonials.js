const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const TestimonialsController = require('../controllers/testimonialsController');
const CheckRoleId = require('../middlewares/checkRole');

router.get('/all', CheckRoleId.isAdmin, TestimonialsController.getTestimonials);
router.get('/:id', CheckRoleId.isAdmin, TestimonialsController.getOneTestimonial);
router.put('/:id', CheckRoleId.isAdmin, TestimonialsController.updateTestimonial);
router.delete('/:id',CheckRoleId.isAdmin, TestimonialsController.deleteTestimonial);
router.post('/',[
  CheckRoleId.isAdmin,
  check('name', 'Name is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  Validator.validateFields
], TestimonialsController.createTestimonial);

module.exports = router;
