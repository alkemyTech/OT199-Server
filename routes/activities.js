const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middlewares/checkRole');
const ActivityController = require('../controllers/activityController');

router.get('/all', ActivityController.getActivities);

router.get('/:name', CheckRoleId.isAdmin, [
    check('name', 'Must be indicated the activity name').notEmpty().isString(),
    Validator.validateFields
], ActivityController.getOneActivity);

router.post('/', [
    CheckRoleId.isAdmin,
    check('name')
        .notEmpty()
        .withMessage('The name field must not be empty'),

    check('content')
        .notEmpty()
        .withMessage('The content field must not be empty')
], Validator.validateFields, CheckRoleId.isAdmin, ActivityController.createActivity)

router.put('/:id', [
    CheckRoleId.isAdmin,
    check('name', 'Name is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    Validator.validateFields
], ActivityController.updateActivity);

router.delete('/:name', CheckRoleId.isAdmin, [
    check('name', 'Must be indicated the activity name').notEmpty().isString(),
    Validator.validateFields
], ActivityController.deleteActivities);


module.exports = router;
