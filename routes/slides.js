const express = require('express');
const SlidesController = require('../controllers/slideController.js');
const CheckRoleId = require('../middlewares/checkRole');
const router = express.Router();

/**
 * GET slide details 
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"text":string, "imageUrl": string, "order": integer} }
 */
router.get('/', CheckRoleId.isAdmin, SlidesController.getAll);

router.delete('/:id', CheckRoleId.isAdmin, SlidesController.delete);

module.exports = router;