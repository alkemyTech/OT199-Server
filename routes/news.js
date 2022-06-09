const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const NewsController = require('../controllers/newsController');
const CheckRole = require('../middlewares/checkRole');

// GET news
router.get('/', CheckRole.isAdmin, NewsController.getAllNews);

// GET news details 
router.get('/:id',CheckRole.isAdmin, NewsController.getDetail);

// POST create news
router.post('/', [
    CheckRole.isAdmin,
    check('name', 'Name is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('categoryId', 'CategoryId is required').not().isEmpty(),
    Validator.validateFields
], NewsController.createNews);

/**
 * PATCH Update user
 * @param {number} id - The id of news
 * @param {string} name - News name
 * @param {string} content - News content
 * @param {string} image - News image
 * @returns {number} status - Http Status Code
 * @returns {string} msg - Message response
 * @returns { "id": number, "name": string, "image": string, "content": string, "categoryId": number, "categories": {"id": number, "name": string, "description": string, "image": string} }
 */

router.put('/:id', CheckRole.isAdmin, [
        check('name', 'Name is required').optional().not().isEmpty(),
        check('content', 'Content is required').optional().not().isEmpty(),
        check('image', 'Image is required').optional().not().isEmpty(),
        Validator.validateFields
    ], NewsController.updateNews);
/* elimina una news. */
router.delete('/:id',CheckRole.isAdmin,NewsController.deleteNews);
module.exports = router;
