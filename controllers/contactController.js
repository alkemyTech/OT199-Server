const { Contact } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class ContactController {
    static async storeContact(req, res) {
        const {
            name,
            email,
            phone = null,
            message = null
        } = req.body;

        const contact = Contact.build({
            name,
            email,
            phone,
            message
        });

        try {
            await contact.save()
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            })
        }
        res.status(httpStatus.CREATED).json({ msg: 'Contact has been saved' })
    }
}

module.exports = ContactController;