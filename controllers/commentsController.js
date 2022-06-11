const { Comment } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const QueryHelper = require('../helpers/queryHelper');

class CommentsController{
  static async update(req,res){
    const { id } = req.params;
    const allowedParameters = ['body'];
    const query = QueryHelper.filterBody(allowedParameters, req.body);

    let comment;
    try {
      comment = await Comment.update(query,{where:{id}});
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
        });
    };

    if (!commnet[0]) {
        return res.status(httpStatus.NOT_FOUND).json({
            msg: 'Comment does not exist'
        });
    };

    res.status(httpStatus.OK).json({
        msg: 'Comment was updated successfully',
    });
  }
}

module.exports = CommentsController;