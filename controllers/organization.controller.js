const {
  Organization
} = require('../models');
const orgConstant = require('../constants/organization.constant');

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
        .status(500)
        .send('Internal server error');
    }
    res
    .status(200)
    .send(data);
  }
}

module.exports = OrganizationController;