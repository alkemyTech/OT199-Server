const { News } = require("../models");
const httpStatus = require("../helpers/httpStatus");

class NewsController {
  static async deleteNews(req, res) {
    try {
      const { id } = req.params;
      const findNew = await News.findByPk(+id);
      if(findNew === null){
        res.status(httpStatus.NOT_FOUND).json({ msg: `NOT FOUND NEWS` });       
      }else{
        const deleteNew = await News.destroy({ where: { id: +id } });   
        res.status(httpStatus.OK).json({ msg: `the New was deleted` });
      }
    } catch (error) {
        res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ msg: "Something went wrong" });
    }
  }
}

module.exports = NewsController;
