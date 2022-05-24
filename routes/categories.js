let express = require('express');
const Categories = require('../controllers/categoriesController');
let router = express.Router();


router.get('/', Categories.getAllCategories);


module.exports = router;