let express = require('express');
const Categories = require('../controllers/categoriesController');
const CheckRoleId = require('../middlewares/checkRole');
let router = express.Router();
let {AuthUser} = require("../middlewares/authUser")

router.get('/', CheckRoleId.isAdmin, Categories.getAllCategories);

module.exports = router;