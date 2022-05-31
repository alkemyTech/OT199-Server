const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middlewares/checkRole');
const ActivityController = require('../controllers/activityController');

router.put('/:id', [
    CheckRoleId.isAdmin,
    check('name', 'Name is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    Validator.validateFields
], ActivityController.updateActivity);

module.exports = router;
