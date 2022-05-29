const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/newsController');
const CheckRole = require('../middlewares/checkRole');

/* elimina una news. */
router.delete('/:id',CheckRole.isAdmin,NewsController.deleteNews);

module.exports = router;