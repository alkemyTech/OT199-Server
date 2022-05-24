const { validationResult } = require('express-validator');
const httpStatus = require('../helpers/httpStatus')

function validateFields(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() })
    } else {
        next()
    }
}

module.exports = validateFields;