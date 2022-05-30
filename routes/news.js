const express = require('express');
const router = express.Router();

const newsController = require('../controllers/newsController');
const CheckRoleId = require('../middlewares/checkRole');

// GET news details 
router.get('/:id',CheckRoleId.isAdmin, newsController.getDetail);

module.exports = router;