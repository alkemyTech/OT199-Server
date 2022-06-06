const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController { 
  static async update(req,res){

    let slide = undefined;
    const { id } = req.params;
    console.log(req.body);
    const { imageUrl, text, order, organizationId } = req.body;

    try {
      slide = await Slide.findByPk(id);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    };

    if (!slide) {
        return res.status(httpStatus.NOT_FOUND).json({
            msg: 'Slide does not exist'
        });
    };

    slide.imageUrl = imageUrl || slide.imageUrl;
    slide.text = text || slide.text;
    slide.order = order || slide.order;
    slide.organizationId = organizationId || slide.organizationId;

    try {
        await slide.save();
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    };

    res.status(httpStatus.OK).json({
        msg: 'Slide was updated successfully',
    });
  };

}

module.exports = SlideController;