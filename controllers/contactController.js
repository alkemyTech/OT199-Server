const { Contact } = require("../models");
const httpStatus = require("../helpers/httpStatus");
const httpResponses = require("../constants/httpResponses");

class ContactController {
  static async getAllContacts(req, res) {

    const getAllContact = await Contact.findAll();
    res.status(httpStatus.OK).json(getAllContact);
    
    try {
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
  }
}

module.exports = ContactController;
