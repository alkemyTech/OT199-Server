const { Testimonials } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class TestimonialController {

  static async deleteTestimonial(req, res) {

    let testimonialDeleted = {};
    const { id } = req.params;

    try {
      testimonialDeleted = await Testimonials.destroy({ where: { id }});
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    if (!testimonialDeleted) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Testimonial does not exist'
      });
    };

    res.status(httpStatus.OK).json({
      msg: 'Testimonial was deleted successfully',
    });
  };
} 

module.exports = TestimonialController;