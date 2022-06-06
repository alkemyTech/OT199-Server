const express = require('express');
const MemberController = require('../controllers/memberController');
const CheckRole = require('../middlewares/checkRole');
const router = express.Router();

/**
 * GET member details 
 * @param {number} id - The id of member
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"name": string, "image": string} }
 */
router.get('/:id', CheckRole.isAdmin, MemberController.getMember);
router.get('/',CheckRole.isAdmin, MemberController.getAllMembers);

router.delete('/:id',CheckRole.isAdmin, MemberController.deleteMember);

module.exports = router;
