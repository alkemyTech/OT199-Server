let express = require('express');
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
let router = express.Router();


router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);
router.get('/:id', CheckRoleId.isAdmin, Categories.getCategory);
router.put('/:id', CheckRoleId.isAdmin, Categories.updateCategories);


module.exports = router;