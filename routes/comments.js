const express = require ('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');
const checkRole = require('../middlewares/checkRole');

router.post('/create',[
  check('news_id', 'news_id is required').notEmpty(),
  check('user_id', 'user_id is required').notEmpty(),
  check('body', 'body is required').notEmpty(),
  Validator.validateFields], CommentsController.createComments);

router.put('/:id',[
  check('body', 'Body is required').notEmpty(),
  checkRole.isOwnerComment,
  Validator.validateFields,
], CommentsController.update);

module.exports = router;
