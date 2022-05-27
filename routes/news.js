const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/newsController');

router.post('/', NewsController.createNews);

module.exports = router;
