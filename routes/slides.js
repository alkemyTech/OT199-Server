const express = require('express');
const Slides = require('../controllers/slideController.js');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();


/**
 * GET slide details 
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"text":string, "imageUrl": string, "order": integer} }
 */
router.get('/', CheckRoleId.isAdmin, Slides.getAll);


module.exports = router;