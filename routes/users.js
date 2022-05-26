const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validateFields = require('../helpers/validateFields');
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);



module.exports = router;