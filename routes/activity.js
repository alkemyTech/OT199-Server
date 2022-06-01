const express = require('express')
const router = express.Router()
let activityController = require('../controllers/activityController')
let { validateFields } = require('../helpers/validator')
const { check } = require('express-validator');


router.post('/', [
    check('name')
      .notEmpty()
      .withMessage('The name field must not be empty'),

    check('content')
      .notEmpty()
      .withMessage('The content field must not be empty')
  ], validateFields ,activityController.createActivity)


module.exports = router