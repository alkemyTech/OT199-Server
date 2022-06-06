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
