const { Contact } = require("../models");
const httpStatus = require("../helpers/httpStatus");
const httpResponses = require("../constants/httpResponses");

class ContactController {
  static async getAllContacts(req, res) {  
    let getAllContact=[]; 
    try {
      getAllContact = await Contact.findAll({ attributes: ['name', 'phone', 'email', 'message', 'createdAt'] });
      
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
      });
    }
    return res.status(httpStatus.OK).json(getAllContact);
  }
}

module.exports = ContactController;
