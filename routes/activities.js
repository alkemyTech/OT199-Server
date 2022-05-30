const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validator = require('../helpers/validator');
const CheckRoleId = require('../middlewares/checkRole');
const ActivityController = require('../controllers/activity.controller');

router.get('/all', ActivityController.getActivities);

router.get('/:name', CheckRoleId.isAdmin, [
    check('name', 'Must be indicated the activity name').notEmpty().isString(),
    validator.validateFields
], ActivityController.getOneActivity);

router.delete('/:name', CheckRoleId.isAdmin, [
    check('name', 'Must be indicated the activity name').notEmpty().isString(),
    validator.validateFields
], ActivityController.deleteActivities);

module.exports = router;