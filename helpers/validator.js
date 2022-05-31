const { validationResult } = require('express-validator');
const httpStatus = require('./httpStatus');
const { Categorie } = require('../models');

class Validator {

  static validateFields(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json(errors);
    };

    next();
  };
}

module.exports = Validator;