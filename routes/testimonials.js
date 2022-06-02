const express = require('express');
const TestimonialsController = require('../controllers/testimonialsController');
const router = express.Router();

router.delete('/:id', TestimonialsController.deleteTestimonial);

module.exports = router;