const httpStatus = require('../helpers/httpStatus');
const {
    News,
    Categorie
} = require('../models');

class NewsController {
    static async updateNews(req, res) {

        const id = req.params.id;
        const {
            name,
            content,
            image
        } = req.body;
        let news = {};

        try {
            news = await News.findOne({
                where: {
                    id
                },
                include: Categorie
            });
        } catch (error) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: 'Something went wrong',
                });
        };

        if (!news) {
            return res
                .status(httpStatus.NOT_FOUND)
                .json({
                    msg: 'News not found'
                });
        }
        if (name) {
            news.name = name;
        }
        if (content) {
            news.content = content;
        }
        if (image) {
            news.image = image;
        }
        try {
            await news.save();
        } catch (error) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: 'Something went wrong',
                });
        };

        res.status(httpStatus.OK).json({
            msg: 'Updated successfully',
            news
        });
    };
}
module.exports = NewsController;