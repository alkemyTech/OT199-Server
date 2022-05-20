var express = require('express');
const CategoriesController = require('../controllers/categoriesController');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/categories', CategoriesController.getAllCategories)

module.exports = router;
