const { Member } = require('../models');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses');
const PagesHelper = require('../helpers/pagesHelper');
const QueryHelper = require('../helpers/queryHelper');

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
    res.status(httpStatus.CREATED).json({ msg: 'Member has been created' })
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
    let result = [];
    let {
      page
    } = req.query;
    let offset;
    let limit;
    let pagesHelper;

    if (page) {
      result = {};
      const numPage = parseInt(page);
      pagesHelper = new PagesHelper(req, numPage);
      offset = (numPage - 1) * pagesHelper.getLimit();
      limit = pagesHelper.getLimit();
    }

    try {
      result = await Member.findAndCountAll({
        attributes: ['name', 'description'],
        limit,
        offset,
      });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    };

    if (page) {
      if (!pagesHelper.isValidPage(result.count)) {
        return res.status(httpStatus.BAD_REQUEST).json({
          msg: `Page ${ page } does not exists`
        });
      };
      const response = pagesHelper.getResponse(result);
      return res.status(httpStatus.OK).json({
        ...response
      });
    } else {
      return res.status(httpStatus.OK).json(result.rows);
    }
  };

  static async updateMembers(req, res) {

    const { id } = req.params;

    const allowedParameters = [
      "name",
      "facebookUrl",
      "instagramUrl",
      "linkedinUrl",
      "image",
      "description"];

    const query = QueryHelper.filterBody(allowedParameters, req.body);

    let updMember;

    try {
      updMember = await Member.update(query, { where: { id } });
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
      });
    }
    if (!updMember[0]) {
      return res.status(httpStatus.NOT_FOUND).json({
        msg: 'Member was not found'
      })
    }
    return res.status(httpStatus.OK).json({
      msg: 'Member was updated successfully'
    })

  }


}


module.exports = MemberController;