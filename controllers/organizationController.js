const { Organization } = require('../models');
const orgConstant = require('../constants/organizationConstant');
const httpStatus = require('../helpers/httpStatus');

class OrganizationController {

  static async getPublicData(req, res) {

    const wherename = orgConstant.getOrganizationName();
    let data = null;

    try {
      data = await Organization.findOne({
        where: {
          name: wherename
        },
        attributes: ['name', 'image', 'phone', 'address'],
      });
    } catch (error) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({
          msg: 'Something went wrong, the server was unable to complete your request'
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
        msg: 'Something went wrong, the server was unable to complete your request'
      })

    }
  }
}
module.exports = OrganizationController;