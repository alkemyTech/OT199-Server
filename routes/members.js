const express = require('express');
const MemberController = require('../controllers/memberController');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();

router.delete('/:id',CheckRoleId.isAdmin, MemberController.deleteMember);

module.exports = router;
