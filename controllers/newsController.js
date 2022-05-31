const httpStatus = require('../helpers/httpStatus');
const {
    News
} = require('../models');

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
    static async createNews(req, res) {

        let news = {};
        const {
            name,
            image,
            content,
            categoryId
        } = req.body;

        try {
            news = await News.create({
                name,
                image,
                content,
                categoryId,
                type: 'news'
            });
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

    static async getDetail(req, res) {
        const {
            id
        } = req.params;
        let detail = undefined;

        try {
            detail = await News.findByPk(id);
        } catch (error) {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({
                    msg: "Error",
                    error
                });
            return;
        }

        if (!detail) {
            res
                .status(httpStatus.NOT_FOUND)
                .send({
                    msg: "New not found"
                });
            return;
        }

        res
            .status(httpStatus.OK)
            .send({
                msg: "New found succesfully",
                detail
            });
    }

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
                include: 'categories'
            });
        } catch (error) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    msg: 'Something went wrong',
                    error,
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
