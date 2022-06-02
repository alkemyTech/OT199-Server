const express = require('express');
const router = express.Router();
const CheckRole = require('../middlewares/checkRole');
const TestimonialsController = require('../controllers/testimonialsController');


router.get('/all', CheckRole.isAdmin, TestimonialsController.getTestimonials);

router.get('/:name', CheckRole.isAdmin, TestimonialsController.getOneTestimonial);

module.exports = router;
