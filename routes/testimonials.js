const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonialsController');
const CheckRole = require('../middlewares/checkRole');

router.delete('/:id',CheckRole.isAdmin, TestimonialsController.deleteTestimonial);

module.exports = router;