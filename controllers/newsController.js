const httpStatus = require('../helpers/httpStatus');
const { News } = require('../models');

class NewsController {

    static async createNews(req, res) {
        
        let news = {};
        const { name, image, content, categoryId } = req.body;

        try {
            news = await News.create({ name, image, content, categoryId });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            });
        };

        res.status(httpStatus.OK).json({
            msg: '',
            data: news
        });
    };
};

module.exports = NewsController;
