const { Organization } = require('../models');
const orgConstant = require('../constants/organization.constant');
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
        .send('Internal server error');
    }
    res
    .status(httpStatus.OK)
    .send(data);
  }
}

module.exports = OrganizationController;