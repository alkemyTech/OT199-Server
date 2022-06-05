const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonialsController');
const CheckRoleId = require('../middlewares/checkRole');

router.get('/all', CheckRoleId.isAdmin, TestimonialsController.getTestimonials);
router.get('/:id', CheckRoleId.isAdmin, TestimonialsController.getOneTestimonial);
router.put('/:id', CheckRoleId.isAdmin, TestimonialsController.updateTestimonial);
router.delete('/:id',CheckRoleId.isAdmin, TestimonialsController.deleteTestimonial);

module.exports = router;
