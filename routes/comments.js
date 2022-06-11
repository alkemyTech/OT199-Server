const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');

router.put('/:id',[
  check('body').notEmpty,
  Validator.validateFields,
], CommentsController.update);

module.exports = router;