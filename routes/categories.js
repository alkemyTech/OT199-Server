let express = require('express');
const Categories = require('../controllers/categoriesController');
let router = express.Router();
let {AuthUser} = require("../middlewares/authUser")


router.get('/',AuthUser, Categories.getAllCategories);


module.exports = router;