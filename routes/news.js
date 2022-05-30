const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');
const Validator = require('../helpers/validator');

const newsController = require('../controllers/newsController');
const CheckRoleId = require('../middlewares/checkRole');


/**
 * PATCH Update user
 * @param {number} id - The id of news
 * @param {string} name - News name
 * @param {string} content - News content
 * @param {string} image - News image
 * @returns {number} status - Http Status Code
 * @returns {string} msg - Message response
 * @returns {object} data - Object news updated
 */
//  CheckRoleId.isAdmin,
router.put('/:id',  [
        check('name', 'Name is required').optional().not().isEmpty(),
        check('content', 'Content is required').optional().not().isEmpty(),
        check('image', 'Image is required').optional().not().isEmpty(),
        Validator.validateFields
    ],
    newsController.updateNews);

module.exports = router;

