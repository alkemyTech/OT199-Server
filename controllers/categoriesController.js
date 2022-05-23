const {Categorie} = require('../models')

class Categories{
  static async getAllCategories( req, res ){

    try {
      let resolve = await Categorie.findAll();
      res.status(200).json({
        meta : {
          resposne : true
        },
        data : resolve
      });
    } catch (error) {
      res.status(500).json({
        meta : {
          resposne : false
        },
        error
      });
    }
  };
  
};

module.exports =  Categories