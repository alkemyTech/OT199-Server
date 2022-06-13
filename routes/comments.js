const express = require ('express');
const router = express.Router();
const Comments = require('../controllers/commentsController')

router.post('/create', Comments.createComments);

module.exports = router;

