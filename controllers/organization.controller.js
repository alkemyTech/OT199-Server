const {
  Organization
} = require('../models');
const generalOrganization = require('../helper/general');

class OrganizationController {

  static async getPublicData(req, res) {

    const wherename = generalOrganization.NAME;

    try {
      Organization.findOne({
          where: {
            name: wherename
          },
          attributes: ['name', 'image', 'phone', 'address'],
        })
        .then(data => {
          res
            .status(200)
            .send(data);
        });

    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send('Internal server error');
    }
  }
}

module.exports = OrganizationController;