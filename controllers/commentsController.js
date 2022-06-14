const { Comment } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class CommentsController {

  static async createComments(req, res) {
    const { userId, body, newsId } = req.body;
    try {





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

  static async update(req, res) {
    const { id } = req.params;
    const { body } = req.body;

    let comment;
    try {
      comment = await Comment.update({ body }, { where: { id } });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    if (!comment[0]) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Comment does not exist'
      });
    };

    res.status(httpStatus.OK).json({
      msg: 'Comment was updated successfully',
    });
  }
};

module.exports = CommentsController;