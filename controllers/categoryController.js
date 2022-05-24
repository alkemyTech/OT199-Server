const {Categorie} = require('../models');
const httpStatus = require('../helpers/httpStatus');

class Categories{
  static async getAllCategories( req, res ){

    try {
      let resolve = await Categorie.findAll();
      res.status(httpStatus.OK).json({
        meta : {
          resposne : true
        },
        data : resolve
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        meta : {
          resposne : false
        },
        error
      });
    }
  };
  
};

module.exports =  Categories