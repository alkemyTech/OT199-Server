const { Testimonials } = require("../models");
const httpStatus = require("../helpers/httpStatus");
const httpResponses = require("../constants/httpResponses");
const PagesHelper = require("../helpers/pagesHelper");

class TestimonialsController {
  static async getTestimonials(req, res) {
    let testimonials = null;
    let { page } = req.query;
    if (!page) {
      try {
        testimonials = await Testimonials.findAll({
          attributes: ["name", "image", "content", "createdAt"],
        });
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
        });
      }
      return res.status(httpStatus.OK).json({ testimonials });
    }
    page = parseInt(page);

    const pagesHelper = new PagesHelper(req, page);
    const offset = (page - 1) * pagesHelper.getLimit();

    try {
      testimonials = await Testimonials.findAndCountAll({
        attributes: ["name", "image", "content", "createdAt"],
        limit: pagesHelper.getLimit(),
        offset,
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
    if (!pagesHelper.isValidPage(testimonials.count)) {
      return res.status(httpStatus.BAD_REQUEST).json({
        msg: `Page ${page} does not exists`,
      });
    }

    const response = pagesHelper.getResponse(testimonials);

    res.status(httpStatus.OK).json({
      ...response,
    });
  }
  static async getOneTestimonial(req, res) {
    const { id } = req.params;
    let oneTestimonial = {};
    try {
      oneTestimonial = await Testimonials.findByPk(id);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
    return res.status(httpStatus.OK).json({ oneTestimonial });
  }

  static async deleteTestimonial(req, res) {
    let testimonialDeleted = {};
    const { id } = req.params;

    try {
      testimonialDeleted = await Testimonials.destroy({ where: { id } });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }

    if (!testimonialDeleted) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "Testimonial does not exist",
      });
    }

    res.status(httpStatus.OK).json({
      msg: "Testimonial was deleted successfully",
    });
  }

  static async createTestimonial(req, res) {
    const { name, content } = req.body;
    let newTestimonial = undefined;

    try {
      newTestimonial = await Testimonials.create({ name, content });
      res.status(httpStatus.CREATED).send({
        msg: "Testimonial created succesfully",
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
  }

  static async updateTestimonial(req, res) {
    let { id } = req.params;
    let { name, image, content } = req.body;
    let testimonial;

    try {
      testimonial = await Testimonials.findByPk(id);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }

    if (!testimonial) {
      res.status(httpStatus.NOT_FOUND).json({
        msg: "A record with the set parameter was not found",
      });
    }

    testimonial.name = name ? name : testimonial.name;
    testimonial.image = image ? image : testimonial.image;
    testimonial.content = content ? content : testimonial.content;

    try {
      await testimonial.save();
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }

    res.status(httpStatus.OK).json({
      msg: "Activity was updated successfully",
      data: {
        name: testimonial.name,
        image: testimonial.image,
        content: testimonial.content,
      },
    });
  }
}
module.exports = TestimonialsController;
