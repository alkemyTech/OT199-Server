let express = require('express');
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
let router = express.Router();


router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);
router.put('/:id', CheckRoleId.isAdmin, Categories.updateCategories);
router.delete('/:id', Categories.deleteCategorie);


module.exports = router;