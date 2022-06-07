const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController {
  static async getDetail(req, res) {
    let idParam = req.params.id;
    let detail = undefined;
    try {
      detail = await Slide.findByPk(idParam);
    }
    catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
      res.send({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
      return;
    }
    if (!detail) {
      res
        .status(httpStatus.NOT_FOUND)
        .send({
          msg: 'Slide not found'
        });
      return;
    }
    res
      .status(httpStatus.OK)
      .send({
        msg: 'Slide found succesfully',
        detail
      });
  }
  static async getAll(req, res) {

    let SlideList;
    try {
      SlideList = await Slide.findAll({
        attributes: ['imageUrl', 'text', 'order']
      });
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    }
    return res
      .status(httpStatus.OK)
      .json(SlideList);
  }

  static async delete(req, res) {
    const { id } = req.params
    let destroyedSlide = undefined;

    try {
      destroyedSlide = await Slide.destroy({ where: { id } });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.INTERNAL_SERVER_ERROR
      });
    }

    if (!destroyedSlide) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Slide not found'
      });
    }

    res.status(httpStatus.OK).json({
      msg: 'Succesfully slide delete'
    });
  }
};

module.exports = SlideController;
