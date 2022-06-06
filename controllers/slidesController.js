const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class SlideController { 
  static async delete(req,res){
    const {id} = req.params
    let destroyedSlide = undefined;

    try{
        destroyedSlide = await Slide.destroy({where: {id}});
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: httpResponses.INTERNAL_SERVER_ERROR
        });
    }

    if(!destroyedSlide){
        return res.status(httpStatus.NOT_FOUND).json({
            msg: 'Slide not found'
        });
    }

    res.status(httpStatus.OK).json({
        msg: 'Succesfully slide delete'
    });
  }
}

module.exports = SlideController;