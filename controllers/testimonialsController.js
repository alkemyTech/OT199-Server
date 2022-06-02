const Testimonial = require('../models/testimonials');

class TestimonialsController {
    static async getTestimonials(req, res) {
        let testimonials = {};
        try {
            testimonials = Testimonial.findAll();
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        }
        res.status(httpStatus.OK).json({ testimonials });
    }

    static async getOneTestimonial(req, res) {
        const { id } = req.params;
        let oneTestimonial = {};
        try {
            oneTestimonial = Testimonial.findByPk(id)
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        }
        res.status(httpStatus.OK).json({ oneTestimonial });
    }
}

module.exports = TestimonialsController;