// express
const express = require('express');
const router = express.Router();
// controller
const organizationController = require('../controllers/organizationController');

// GET public organization data
router.get('/public',  organizationController.getPublicData);

module.exports = router;
