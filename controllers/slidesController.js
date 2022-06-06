const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController {

    static async createSlide(req, res) {

        const {
            imageUrl,
            text,
            order,
            organizationId
        } = req.body;
        
        try {
            return res.json(req.body)
            
        } catch (error) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
                });
        }
        
    }
};

module.exports = SlideController;