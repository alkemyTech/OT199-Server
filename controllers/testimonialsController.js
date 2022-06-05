const httpStatus = require('../helpers/httpStatus');
const { Testimonials } = require('../models');

class TestimonialController {
  static async createTestimonial(req,res){
    const {name, content} = req.body;
    let newTestimonial = undefined;
    
    try{
    newTestimonial = await Testimonials.create({name, content});
    res.status(httpStatus.CREATED).send({
      msg: "Testimonial created",
      newTestimonial
    });

    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        msg: error
      });
    }
  }
} 

module.exports = TestimonialController;