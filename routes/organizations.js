// express
const express = require('express');
const router = express.Router();
//middleware
const CheckRoleId = require('../middlewares/checkRole');
// controller
const organizationController = require('../controllers/organization.controller');

// GET public organization data
router.get('/public', organizationController.getPublicData);

//UPDATE public organization data
router.post('/public/:id',CheckRoleId.isAdmin, organizationController.updatePublicData)

module.exports = router;
