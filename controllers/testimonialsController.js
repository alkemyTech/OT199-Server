const { Testimonials } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class TestimonialsController {
    static async getTestimonials(req, res) {
        let testimonials = null;
        try {
            testimonials = await Testimonials.findAll();
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        }
        return res.status(httpStatus.OK).json({ testimonials });

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
        return res.status(httpStatus.OK).json({ oneTestimonial });
    }
}

module.exports = TestimonialsController;