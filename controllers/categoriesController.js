const { Categories } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class CategorieController {
  static async getAllCategories(req, res) {
    let categories = [];
    
    try {
      categories = await Categories.findAll({ attributes: ['name'] });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    res.status(httpStatus.OK).json({
      categories
    });
  };

  static async getCategory(req, res) {
    const { id } = req.params;
    let category = {};

    try {
      category = await Categories.findByPk(id);
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    if (!category) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Category was not found'
      });
    };

    res.status(httpStatus.OK).json({
      category
    });
  };

  static async updateCategories(req, res) {
    let idParams = req.params.id

    try {
        let resolve = await Categories.update({ ...req.body }, { where: { id: idParams } });
        if (resolve.includes(1)) {
          res.status(httpStatus.OK).json({
            msg: 'Successful registry update'
          })
        } else{
          res.status(httpStatus.NOT_FOUND).json({
            msg: 'A record with the set parameter was not found'
          })
        }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      })
    }
  }

  static async deleteCategorie(req, res){
    let idParams = req.params.id;
    try {
      let resolve = await Categories.destroy({ where : { id : idParams }});
      if (resolve) {
        return res.status(httpStatus.OK).json({
          msg: 'successful removal'
        });
      } 
      res.status(httpStatus.NOT_FOUND).json({
        msg: 'the record to delete was not found'
      });
      
        
      
      
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    }
    
  }

  static async createCategories(req, res) {
    try {
      const { name, image, description } = req.body;

        await Categories.create({
        name,
        image,
        description

      })
    }
    catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    res.status(httpStatus.OK).json({
      msg: 'Creation has been successful'
    });
  }

};

module.exports = CategorieController
