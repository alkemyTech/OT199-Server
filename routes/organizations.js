// express
const express = require('express');
const router = express.Router();
// controller
const organizationController = require('../controllers/organization.controller');

// GET public organization data
router.get('/public',  organizationController.getPublicData);

module.exports = router;
