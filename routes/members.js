const express = require('express');
const MemberController = require('../controllers/memberController');
const router = express.Router();

router.delete('/:id', MemberController.deleteMember);

module.exports = router;
