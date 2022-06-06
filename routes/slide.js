const express = require('express');
const router = express.Router();
const CheckRoleId = require('../middlewares/checkRole');
const SlideController = require('../controllers/slideController');

router.get('/:id',CheckRoleId.isAdmin, SlideController.getDetail);

module.exports = router;