const express = require('express');
const MemberController = require('../controllers/memberController');
const router = express.Router();
const { check } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRole = require('../middlewares/checkRole');

router.delete('/:id', MemberController.deleteMember);
router.post('/', [
    check('name', 'Must have a full name').notEmpty().isString(),
    check('email', 'Must have a valid email').notEmpty().isEmail(),
    Validator.validateFields
], CheckRole.isUserLoggedIn, MemberController.createMember)

module.exports = router;
