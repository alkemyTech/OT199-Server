<<<<<<< HEAD
const {
    Organization
} = require('../models');
const generalOrganization = require('../helpers/general');

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

    static async getData() {

        const wherename = generalOrganization.NAME;
        console.log(`ongname: ${wherename}`);

        try {
            const data = Organization.findOne({
                where: {
                    name: wherename
                }
            });
            return data;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
=======
const Organization = require('../models/organization');

class OrganizationController {

} 
>>>>>>> development

module.exports = OrganizationController;