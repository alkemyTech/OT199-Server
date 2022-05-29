const express = require('express');
const router = express.Router();
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
let {AuthUser} = require("../middlewares/authUser")
const Validator = require('../helpers/validator');
const { check } = require('express-validator');



router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);

router.post('/create',CheckRoleId.isAdmin,[
    check('name', 'Name is requried').not().isEmpty(),
    Validator.validateFields
], Categories.createCategories)

module.exports = router;