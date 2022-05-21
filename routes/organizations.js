// express
const express = require('express');
const router = express.Router();
// controller
const organizationController = require('../controllers/organization.controller');

// GET public organization data
router.get('/public',  organizationController.getPublicData);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
module.exports = router;
