let express = require('express');
const Categories = require('../controllers/categoriesController');
let router = express.Router();


router.get('/', Categories.getAllCategories);
router.put('/:id', Categories.updateCategories);


module.exports = router;