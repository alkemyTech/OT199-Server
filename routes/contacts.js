const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');
const CheckRole = require('../middlewares/checkRole');

router.get('/',CheckRole.isAdmin,ContactController.getAllContacts)



module.exports = router;