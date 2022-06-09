const {
  Member
} = require('../models');
const PaginationConstant = require('../constants/pagination');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const urlUtils = require('../utils/url');

class MemberController {

  static async deleteMember(req, res) {

    let memberDeleted = {};
    const {
      id
    } = req.params;

    try {
      memberDeleted = await Member.destroy({
        where: {
          id
        }
      });
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

  static async createMember(req, res) {
    const {
      name,
      email,
      facebookUrl = null,
      instagramUrl = null,
      linkedinUrl = null,
      image = null,
      description = null
    } = req.body;

    const contact = Member.build({
      name,
      email,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      image,
      description
    })

    try {
      await contact.save()
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(httpResponses.RESPONSE_INTERNAL_SERVER_ERROR)
    }
    res.status(httpStatus.CREATED).json({
      msg: 'Member has been created'
    })
  }
  static async getMember(req, res) {
    const {
      id
    } = req.params;
    let member = {};

    try {
      member = await Member.findOne({
        where: {
          id
        },
        attributes: ['name', 'image']
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
        error
      });
    };

    if (!member) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'member was not found'
      });
    };

    res.status(httpStatus.OK).json({
      member
    });
  };

  static async getAllMembers(req, res) {
    const {
      page = 1
    } = req.query;
    const limit = PaginationConstant.getRowsPerPage();
    const offset = (page - 1) * limit;

    let members = {
      rows: [],
      count: 0
    };

    try {
      members = await Member.findAndCountAll({
        attributes: ['name', 'description'],
        offset,
        limit
      })
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };
    let result = {
      data: members.rows
    }
    if (members.rows.length > 0) {
      const allPages = ((limit > 0) ? Math.ceil(members.count / limit) : 0);
      
      if (page < allPages) {
        const nextquery = `page=${Number(page)+1}`;
        result.next = urlUtils(req, nextquery);
      }
      if (page > 1) {
        const prevquery = `page=${Number(page)-1}`;
        result.prev = urlUtils(req, prevquery);
      }
    }
    return res.status(httpStatus.OK).json(result);
  };
}

module.exports = MemberController;