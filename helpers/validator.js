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

    static async validateCategoryId(id) {
        
        const category = await Categorie.findByPk(id);
    
        if (!category) {
            throw new Error(`CategoryId is not valid`);
        };
    };
}

module.exports = Validator;