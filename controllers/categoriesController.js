const httpStatus = require('../helpers/httpStatus');
const { Categorie } = require('../models');

class CategorieController {
  static async getAllCategories(req, res) {
    let categories = [];
    
    try {
      categories = await Categorie.findAll({ attributes: ['name'] });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error
      });
    };

    res.status(httpStatus.OK).json({
      categories
    });
  };
};

module.exports =  CategorieController;