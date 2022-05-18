// services
const organizationsSrv = require('../services/organizations.js');


const getPublic = async (req, res, next) => {

    const idOrganization = null;
    
    try {
        const orgData = await organizationsSrv.getPublic(idOrganization);
        res.status(200).json(orgData);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPublic,
};