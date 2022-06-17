const { Slide } = require("../models");
const httpStatus = require("../helpers/httpStatus");
const httpResponses = require("../constants/httpResponses");
const QueryHelper = require("../helpers/queryHelper");
const DecodeImage = require("../helpers/decodeImage");
const Uploader = require("../services/uploader");

class SlideController {
  static async getDetail(req, res) {
    let idParam = req.params.id;
    let detail = undefined;
    try {
      detail = await Slide.findByPk(idParam);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
      res.send({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
      return;
    }
    if (!detail) {
      res.status(httpStatus.NOT_FOUND).send({
        msg: "Slide not found",
      });
      return;
    }
    res.status(httpStatus.OK).send({
      msg: "Slide found succesfully",
      detail,
    });
  }
  static async getAll(req, res) {
    let SlideList;
    try {
      SlideList = await Slide.findAll({
        attributes: ["imageUrl", "text", "order"],
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
    return res.status(httpStatus.OK).json(SlideList);
  }

  static async delete(req, res) {
    const { id } = req.params;
    let destroyedSlide = undefined;

    try {
      destroyedSlide = await Slide.destroy({ where: { id } });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.INTERNAL_SERVER_ERROR,
      });
    }

    if (!destroyedSlide) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "Slide not found",
      });
    }

    res.status(httpStatus.OK).json({
      msg: "Succesfully slide delete",
    });
  }

  static async update(req, res) {
    const allowedParameters = ["imageUrl", "text", "organizationId", "order"];
    const { id } = req.params;
    const query = QueryHelper.filterBody(allowedParameters, req.body);

    let slide;
    try {
      slide = await Slide.update(query, { where: { id } });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }

    if (!slide[0]) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: "Slide does not exist",
      });
    }

    res.status(httpStatus.OK).json({
      msg: "Slide was updated successfully",
    });
  }

  static async createSlide(req, res) {
    const { imageUrl, text, order, organizationId } = req.body;
    let slide;

    try {
      const data = await DecodeImage.getImageDecoded(imageUrl, text);
      if (data === null) {
        return res.status(httpStatus.NOT_MODIFIED).json({
          msg: "Not Modified",
        });
      }
      const { pathImage, nameFile } = data;
      const urlLocation = await Uploader.imgUploadAWS(pathImage, nameFile);

      if (!order) {
        const lastOrder = await Slide.findOne({
          order: [["order", "DESC"]],
          attributes: ["order"],
        });
        const { order } = lastOrder;
        slide = Slide.build({
          ...req.body,
          imageUrl: urlLocation,
          order: order+1,
        });

        await slide.save();
      }

      if (typeof order === "number") {
        const findOrder = await Slide.findOne({
          where: {
            order: order,
          },
          attributes: ["id", "order"],
        });
        if (findOrder !== null) {
          return res.status(httpStatus.NOT_MODIFIED).json({
            msg: "Not Modified, The order exist ",
          });
        }

        slide = Slide.build({ ...req.body, imageUrl: urlLocation });
        await slide.save();
      }
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }

    return res.status(httpStatus.OK).json({
      msg: "Slide has been successful",
    });
  }
}

module.exports = SlideController;
