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

    static async createTestimonial(req,res){
      const {name, content} = req.body;
      let newTestimonial = undefined;
      
      try{
      newTestimonial = await Testimonials.create({name, content});
      res.status(httpStatus.CREATED).send({
        msg: 'Testimonial created succesfully'
      });
  
      } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
      }
    }
}

module.exports = TestimonialsController;