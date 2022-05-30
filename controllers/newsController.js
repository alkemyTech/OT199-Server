const { News } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class NewsController {
  static async getDetail(req, res){
    const { id } = req.params;
    let detail = null;

    try {
      detail = await News.findByPk(id);
    } catch (error){
      res  
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error);
      return;
    }
    
    if(!detail){
      res
        .status(httpStatus.NOT_FOUND)
        .send("New not found");
      return;
    }

    res
      .status(httpStatus.OK)
      .send(detail);
  }
}

module.exports = NewsController;
