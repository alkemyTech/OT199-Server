const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const CheckRoleId = require('../middlewares/checkRole');

/* GET users listing. */
router.get('/', CheckRoleId.isAdmin, UserController.getAll);


// Delete user for ID
router.delete('/users/:id', UserController.deleteUser)


module.exports = router;
