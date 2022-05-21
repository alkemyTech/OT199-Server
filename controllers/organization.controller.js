const {
  Organization
} = require('../models');

class OrganizationContorller {

  static async getPublicData(req, res, next) {

    const wherename = process.env.ORGANIZATION_NAME;

    Organization.findOne({
        where: {
          name: wherename,
        },
        attributes: ['name','image','phone','address'],
      })
      .then(data => {
        res.status(200).send(data)
      })
      .catch(error => res.send(error))
  }
}

module.exports = OrganizationContorller;