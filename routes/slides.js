<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Slides = require("../controllers/slidesController.js");
const CheckRoleId = require("../middlewares/checkRole");
const Validator = require("../helpers/validator");
const { check } = require('express-validator');

router.post("/",CheckRoleId.isAdmin,
  [
    check('imageUrl', 'ImageUrl is required').not().isEmpty().isString(),
    check('text', 'Text is required').not().isEmpty().isString(),
    check('organizationId', 'OrganizationId is required').not().isEmpty().isNumeric(),
    Validator.validateFields],
  Slides.createSlide
);

module.exports = router;
=======
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
>>>>>>> d5e83398c29bbe5706dfe92991f4074f6dfe88a5
