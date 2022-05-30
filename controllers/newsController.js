const { News } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class NewsController {
  static async createNews(req, res) {
        
    let news = {};
    const { name, image, content, categoryId } = req.body;

    try {
        news = await News.create({ name, image, content, categoryId, type: 'news' });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: error
        });
    };

    res.status(httpStatus.OK).json({
        msg: 'News was created succesfully',
        news
    });
  };

  static async getDetail(req, res){
    const { id } = req.params;
    let detail = undefined;

    try {
      detail = await News.findByPk(id);
    } catch (error){
      res  
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({msg: "Error", error});
      return;
    }
    
    if(!detail){
      res
        .status(httpStatus.NOT_FOUND)
        .send({msg: "New not found"});
      return;
    }

    res
      .status(httpStatus.OK)
      .send({msg: "New found succesfully", detail});
  }
}

module.exports = NewsController;
