const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Delete user for ID
router.delete('/users/:id', UserController.deleteUser)

module.exports = router;
