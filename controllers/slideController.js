const { Slide } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const QueryHelper = require('../helpers/queryHelper');

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
};

module.exports = SlideController;