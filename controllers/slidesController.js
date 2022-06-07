const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const QueryHelper = require('../helpers/queryHelper');

class SlideController { 
  static async update(req,res){

    const allowedParameters = ['imageUrl','text','organizationId','order'];
    const { id } = req.params;
    const query = QueryHelper.filterBody(allowedParameters, req.body);

    let slide;
    try {
      slide = await Slide.update(query,{where:{id}});
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

    res.status(httpStatus.OK).json({
        msg: 'Slide was updated successfully',
    });
  };

}

module.exports = SlideController;