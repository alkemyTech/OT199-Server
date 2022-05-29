const express = require('express')
const router = express.Router()
let activityController = require('../controllers/activityController')
let validateCreated = require('../validator/createActivity')
let Validator = require('../helpers/validator')


router.post('/', validateCreated, Validator.validateFields ,activityController.createActivity)


module.exports = router