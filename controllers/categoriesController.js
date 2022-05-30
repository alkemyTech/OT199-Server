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

  static async updateCategories(req, res) {
    let idParams = req.params.id

    try {
        let resolve = await Categorie.update({ ...req.body }, { where: { id: idParams } });
        if (resolve.includes(1)) {
          res.status(httpStatus.OK).json({
            msg: "Successful registry update"
          })
        } else{
          res.status(httpStatus.NOT_FOUND).json({
            msg: "A record with the set parameter was not found"
          })
        }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        error
      })
    }
  }

  static async deleteCategorie(req, res){
    let idParams = req.params.id;
    try {
      let resolve = await Categorie.destroy({ where : { id : idParams }});
      if (resolve) {
        return res.status(httpStatus.OK).json({
          msg: "successful removal"
        });
      } 
      res.status(httpStatus.NOT_FOUND).json({
        msg: "the record to delete was not found"
      });
      
        
      
      
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: error
      });
    }
    
  }

};

module.exports = CategorieController
