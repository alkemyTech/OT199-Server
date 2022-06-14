const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');
const checkRole = require('../middlewares/checkRole');

router.put('/:id',[
  check('body', 'Body is required').notEmpty(),
  checkRole.isOwnerComment,
  Validator.validateFields,
], CommentsController.update);

module.exports = router;