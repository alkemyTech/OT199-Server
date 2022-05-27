const express = require('express');
const router = express.Router();
const CheckRoleId = require('../middlewares/checkRole');
const ActivityController = require('../controllers/activity.controller');

router.get('/', ActivityController.getActivities);

router.get('/:id', CheckRoleId.isAdmin, ActivityController.getOneActivity);

router.delete('/:id', CheckRoleId.isAdmin, ActivityController.deleteActivities);

module.exports = router;