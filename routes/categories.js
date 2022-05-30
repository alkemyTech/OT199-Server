const express = require('express');
const router = express.Router();
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');




router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);
router.put('/:id', CheckRoleId.isAdmin, Categories.updateCategories);




module.exports = router;