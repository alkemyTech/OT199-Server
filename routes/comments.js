const express = require ('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');
const checkRole = require('../middlewares/checkRole');

router.post('/create',[
  check('newsId', 'news_id is required').notEmpty(),
  check('userId', 'user_id is required').notEmpty(),
  check('body', 'body is required').notEmpty(),
  Validator.validateFields], CommentsController.createComments);

router.put('/:id',[
  check('body', 'Body is required').notEmpty(),
  checkRole.isOwnerComment,
  Validator.validateFields,
], CommentsController.update);

/**
 * GET comments
 * @returns {number} status - Http Status Code
 * @returns {"msg": string}
 * @returns { "createdAt": string, "body": string }
 */
 router.get('/', checkRole.isAdmin, CommentsController.getAll);

/**
 * GET member details 
 * @property {number} id - The id of comment
 * @returns {number} status - Http Status Code
 * @returns {"msg": string}
 */
 router.delete('/:id', checkRole.isOwnerComment, CommentsController.delete);

 module.exports = router;
