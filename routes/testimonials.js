const express = require('express');
const router = express.Router();
const CheckRoleId = require('../middlewares/checkRole');
const TestimonialsController = require('../controllers/testimonialsController');


router.get('/all', CheckRoleId.isAdmin, TestimonialsController.getTestimonials);

router.get('/:id', CheckRoleId.isAdmin, TestimonialsController.getOneTestimonial);

module.exports = router;
