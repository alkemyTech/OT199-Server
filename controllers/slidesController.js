const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController { 
  static async update(req,res){

    const allowedParameters = ['imageUrl','text','organizationId','order'];
    const { id } = req.params;
    const query = {};
      
    Object.keys(req.body).map(key => {
      if(key && allowedParameters.includes(key)){
          query[key] = req.body[key];
      }
    });

    let slide = undefined;
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