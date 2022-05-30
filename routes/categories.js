const express = require('express');
const router = express.Router();
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
const Validator = require('../helpers/validator');
const { check } = require('express-validator');




router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);
router.get('/:id', CheckRoleId.isAdmin, Categories.getCategory);
router.put('/:id', CheckRoleId.isAdmin, Categories.updateCategories);
router.delete('/:id', CheckRoleId.isAdmin, Categories.deleteCategorie);


router.post('/create',CheckRoleId.isAdmin,[
    check('name', 'Name is requried').not().isEmpty(),
    Validator.validateFields
], Categories.createCategories)

module.exports = router;