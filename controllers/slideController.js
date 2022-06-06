const {Slide} = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController {
    static async getDetail(req,res) {

        let idParam = req.params.id;
        let detail = undefined;

        try{
        detail = await Slide.findByPk(idParam);
        }
        catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR);
            res.send({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
            return;

        }
        if (!detail) {
            res
                .status(httpStatus.NOT_FOUND)
                .send({
                    msg: 'Slide not found'
                });
            return;
        }

        res
            .status(httpStatus.OK)
            .send({
                msg: 'Slide found succesfully',
                detail
            });

        

    }
}

module.exports = SlideController;
