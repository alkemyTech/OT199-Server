const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const NewsController = require('../controllers/newsController');
const Validator = require('../helpers/validator');

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('categoryId', 'CategoryId is required').not().isEmpty(),
    check('categoryId').custom(Validator.validateCategoryId),
    Validator.validateFields
], NewsController.createNews);

module.exports = router;
