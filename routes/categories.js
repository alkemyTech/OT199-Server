let express = require('express');
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
let router = express.Router();

router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);
router.delete('/:id', CheckRoleId.isAdmin, Categories.deleteCategorie);

module.exports = router;