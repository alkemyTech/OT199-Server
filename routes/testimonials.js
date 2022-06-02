const express = require('express');
const router = express.Router();
const owner = require('../middlewares/ownership');
const TestimonialsController = require('../controllers/testimonialsController');


router.get('/all', owner.ownershipGetMethod, TestimonialsController.getTestimonials);

router.get('/:id', owner.ownershipGetMethod, TestimonialsController.getOneTestimonial);

module.exports = router;
