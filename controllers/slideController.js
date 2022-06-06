const {
    Slide
} = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController {

    static async getAll(req, res) {

        let SlideList;
        try {
            SlideList = await Slide.findAll({
                attributes: ['imageUrl', 'text', 'order']
            });
        } catch (error) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
                });
        }
        return res
            .status(httpStatus.OK)
            .json(SlideList);
    }
};

module.exports = SlideController;