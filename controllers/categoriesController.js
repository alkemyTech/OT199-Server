const { Categorie } = require('../models')
const httpStatus = require('../helpers/httpStatus')
class Categories {
  static async getAllCategories(req, res) {
    try {
      let resolve = await Categorie.findAll();
      res.status(httpStatus.OK).json({
        data: resolve
      });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        error
      });
    }
  };

  static async updateCategories(req, res) {
    let idParams = req.params.id
    try {
      let response = await Categorie.findByPk(idParams)
      if (response) {
        let resolve = await Categorie.update({ ...req.body }, { where: { id: idParams } });
        res.status(httpStatus.OK).json({
          msg: "Successful registry update"
        })

      }
      res.status(httpStatus.NOT_FOUND).json({
        msg: "A record with the set parameter was not found"
      })


    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        error
      })
    }
  }

};

module.exports = Categories