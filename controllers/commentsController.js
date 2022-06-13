const { Comment } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class CommentsController {

    static async createComments(req, res) {

        try {

            const { userId, body, newsId } = req.body;



            await Comment.create({
                userId,
                body,
                newsId

            })

        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
            });
        };
        res.status(httpStatus.OK).json({
            msg: 'Creation has been successful'
        });

    }
};

module.exports = CommentsController;