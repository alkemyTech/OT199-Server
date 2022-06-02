const Testimonials = require('../models/testimonials');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class TestimonialsController {
    static async getTestimonials(req, res) {
        let testimonials = [];
        try {
            let test = await Testimonials.findAll();
            testimonials.push(test);
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
            oneTestimonial = await Testimonials.findByPk(id)
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        }
        res.status(httpStatus.OK).json({ oneTestimonial });
    }
}

module.exports = TestimonialsController;