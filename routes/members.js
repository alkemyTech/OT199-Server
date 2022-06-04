const express = require('express');
const MemberController = require('../controllers/memberController');
const CheckRole = require('../middlewares/checkRole');
const router = express.Router();

router.delete('/:id', MemberController.deleteMember);

/**
 * GET member details 
 * @param {number} id - The id of member
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"name": string, "image": string} }
 */
router.get('/:id', CheckRole.isAdmin, MemberController.getMember);


module.exports = router;