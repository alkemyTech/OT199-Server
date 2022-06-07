const httpResponses = require("../constants/httpResponses");
const httpStatus = require("../helpers/httpStatus");
const ContactController = require('./contactController');

class BackofficeController {

    static async getContacts(req, res) {
                
        await ContactController.getAllContacts(req, res);
    }
};

module.exports = BackofficeController;