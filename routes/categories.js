let express = require('express');
const Categories = require('../controllers/categorieController');
let router = express.Router();


router.get('/', Categories.getAllCategories);


module.exports = router;