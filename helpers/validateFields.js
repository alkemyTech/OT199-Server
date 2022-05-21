const { validationResult } = require('express-validator');
const httpStatus = require('../helpers/httpStatus')

function validateFields(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(httpStatus[400]).json({ errors: errors.array() })
    } else {
        next()
    }
}

exports.module = validateFields;