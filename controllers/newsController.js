const { News, Comment } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const PagesHelper = require('../helpers/pagesHelper');

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
            .json({ msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR });
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
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
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
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
                });
            return;
        }

        if (!detail) {
            res
                .status(httpStatus.NOT_FOUND)
                .send({
                    msg: 'New not found'
                });
            return;
        }

        res
            .status(httpStatus.OK)
            .send({
                msg: 'New found succesfully',
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
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
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
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
                });
        };

        res.status(httpStatus.OK).json({
            msg: 'Updated successfully',
            news
        });
    };

    static async getCommentsByNews(req,res) {
        const id = req.params.id;
        try {

            const getAll = await Comment.findAll({

                where: { newsId:id }
            });
            res.status(httpStatus.OK).json(getAll);

        }
        catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR });
        }

    }; 

    static async getAllNews(req, res) {

        let result = {};
        let { page } = req.query;

        if (!page) {
            try {
                result = await News.findAll({ 
                    attributes: ['name', 'image', 'content', 'categoryId', 'type']
                });
            } catch (error) {
                console.log(error);
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
                });
            };

            return res.status(httpStatus.OK).json({
                news: result
            });
        };

        page = parseInt(page);
        
        const pagesHelper = new PagesHelper(req, page);
        const offset = (page - 1) * pagesHelper.getLimit();

        try {
            result = await News.findAndCountAll({
                attributes: ['name', 'image', 'content', 'categoryId', 'type'],
                limit: pagesHelper.getLimit(),
                offset,
            });
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        };

        if (result.count === 0) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg: 'News not founds'
            });
        };

        if (!pagesHelper.isValidPage(result.count)) {
            return res.status(httpStatus.BAD_REQUEST).json({
                msg: `Page ${ page } does not exists`
            });
        };

        const response = pagesHelper.getResponse(result);

        res.status(httpStatus.OK).json({
            ...response
        });
    };
}
module.exports = NewsController;
