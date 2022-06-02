const { Member } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');

class MemberController {

  static async deleteMember(req, res) {

    let memberDeleted = {};
    const { id } = req.params;

    try {
      memberDeleted = await Member.destroy({ where: { id }});
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    if (!memberDeleted) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Member does not exist'
      });
    };

    res.status(httpStatus.OK).json({
      msg: 'Member was deleted successfully',
    });
  };
} 

module.exports = MemberController;