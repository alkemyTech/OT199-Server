const {
  Organization
} = require('../models');

class OrganizationController {

  static async getPublicData(req, res) {

    const wherename = process.env.ORGANIZATION_NAME;

    try {
      Organization.findAll({
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