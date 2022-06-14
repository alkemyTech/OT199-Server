const { Categories } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const PagesHelper = require('../helpers/pagesHelper');
/**
 * @class
 * This class contain the methods used in the Categories router
 */
class CategorieController {
  /**
   * Method to list all the created categories 
   * @async
   * @returns {number} - Http Satus Code = 200
   * @returns {array} - Array of Json Objects with the categories names
   * @returns {number} - Http Status Code = 500
   * @returns {object} - Json object ref:'/constants/httpResponses'
   */
  static async getAllCategories(req, res) {
    let categories = {}
    let { page } = req.query;

    if (!page) {
      try {
        categories = await Categories.findAll({ attributes: ['id', 'name']});
      } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
      };

      return res.status(httpStatus.OK).json({
        categories,
      });
    }
    
    page = parseInt(page);
    const pagesHelper = new PagesHelper(req, page);
    const offset = (page - 1) * pagesHelper.getLimit();

    try {
      categories = await Categories.findAndCountAll({ 
        attributes: ['id', 'name'],
        limit: pagesHelper.getLimit(),
        offset,
      });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    };

    if (categories.count === 0) {
      return res.status(httpStatus.NOT_FOUND).json({
          msg: 'Categories not founds'
      });
    };

    if (!pagesHelper.isValidPage(categories.count)) {
      return res.status(httpStatus.BAD_REQUEST).json({
          msg: `Page ${ page } does not exists`
      });
    };

    const response = pagesHelper.getResponse(categories);

    res.status(httpStatus.OK).json({
        ...response
    });
  };
  /**
   * Method to get a category name by ID
   * @async
   * @param {number} req - id of the category
   * @returns {number} - Http Satus Code = 200
   * @returns {object} - Json Object with the category name
   * @returns {number} - Http Status Code = 500
   * @returns {object} - Json object ref:'/constants/httpResponses'
   * @returns {number} - Http Status Code = 404
   * @returns {object} - Json object with message 
   */
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

  /** 
   * Method to update a category name by ID
   * @async
   * @param {number} req - id of the category
   * @param {name} - Name of the category
   * @param {description} - Description of the category
   * @param {image} - URL of the image source
   * @returns {number} - Http Satus Code = 200
   * @returns {object} - Json Object with message
   * @returns {number} - Http Status Code = 500
   * @returns {object} - Json object ref:'/constants/httpResponses'
   * @returns {number} - Http Status Code = 404
   * @returns {object} - Json object with message  
   * */

  static async updateCategories(req, res) {
    let idParams = req.params.id

    try {
      let resolve = await Categories.update({ ...req.body }, { where: { id: idParams } });
      if (resolve.includes(1)) {
        res.status(httpStatus.OK).json({
          msg: 'Successful registry update'
        })
      } else {
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

  /**  
   * Method to delete a category by ID
   * @async
   * @param {number} req - id of the category
   * @returns {number} - Http Satus Code = 200
   * @returns {object} - Json Object with message
   * @returns {number} - Http Status Code = 500
   * @returns {object} - Json object ref:'/constants/httpResponses'
   * @returns {number} - Http Status Code = 404
   * @returns {object} - Json object with message  
   * */
  static async deleteCategorie(req, res) {
    let idParams = req.params.id;
    try {
      let resolve = await Categories.destroy({ where: { id: idParams } });
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

  /**
  *  Method to create a category
  * @async
  * @param {name} req - Name of the category
  * @param {description} - Description of the category
  * @param {image} - URL of the image source
  * @returns {number} - Http Satus Code = 200
  * @returns {object} - Json Object with message
  * @returns {number} - Http Status Code = 500
  * @returns {object} - Json object ref:'/constants/httpResponses'
  * @returns {number} - Http Status Code = 404
  * @returns {object} - Json object with message 
  */

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
