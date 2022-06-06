const express = require('express');
const SlidesController = require('../controllers/slidesController');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();

router.delete('/:id', CheckRoleId.isAdmin, SlidesController.delete);

module.exports = router;