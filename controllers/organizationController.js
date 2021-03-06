const { Organization, Slide } = require('../models');
const orgConstant = require('../constants/organizationConstant');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class OrganizationController {

  static async getPublicData(req, res) {

    const wherename = orgConstant.getOrganizationName();
    let data = null;

    try {
      data = await Organization.findOne({
        where: {
          name: wherename
        },
        attributes: ['name', 'image', 'phone', 'address', 'facebookUrl', 'instagramUrl', 'linkedinUrl'],
        include: {
          model: Slide,
          attributes: ['text', 'imageUrl', 'order'],
        },
        order: [[Slide, 'order', 'ASC']]
      });
    } catch (error) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    }
    res
      .status(httpStatus.OK)
      .json({data});
  }

  static async getData() {

    const wherename = orgConstant.getOrganizationName();

    try {
      const data = Organization.findOne({
        where: {
          name: wherename
        }
      });
      return data;

    } catch (error) {
      return null;
    }
  }

  static async updatePublicData(req, res) {
    let idParam = req.params.id

    try {
      let resolve = await Organization.update({ ...req.body }, { where: { id: idParam } });
      if (resolve.includes(1)) {
        res.status(httpStatus.OK).json({
          msg: 'Successful registry update'
        })

      } else {
        res.status(httpStatus.NOT_FOUND).json({
          msg: 'A record with the set parameter was not found'
        })
      }

    }
    catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      })

    }
  }
}
module.exports = OrganizationController;