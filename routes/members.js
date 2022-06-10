const express = require('express');
const MemberController = require('../controllers/memberController');
const CheckRole = require('../middlewares/checkRole');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');

router.delete('/:id', MemberController.deleteMember);
router.post('/', [
    check('name', 'Must have a full name').notEmpty().isString(),
    check('email', 'Must have a valid email').notEmpty().isEmail(),
    Validator.validateFields
], CheckRole.isUserLoggedIn, MemberController.createMember)
/**
 * GET member details 
 * @param {number} id - The id of member
 * @returns {number} status - Http Status Code
 * @returns {"msg": string, {"name": string, "image": string} }
 */
router.get('/:id', CheckRole.isAdmin, MemberController.getMember);

/**
 * GET member details 
 * @property {number} page - The page in query
 * @returns {number} status - Http Status Code
 * @returns {"msg": string}
 * @returns { "data": [{"name": string, "description": string}], "prev": string, "next": string}
 */
router.get('/', CheckRole.isAdmin, MemberController.getAllMembers);

router.delete('/:id', CheckRole.isAdmin, MemberController.deleteMember);

module.exports = router;