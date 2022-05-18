// express
const express = require('express');
const router = express.Router();

// controller
const organizationController = require('../controllers/organizations');

// GET public organization data
router.get('/public',  organizationController.getPublic);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
module.exports = router;
