const express = require('express');
const router = express.Router();
const BackofficeController = require('../controllers/backofficeController');

/**
 * GET contact list
 * @returns {number} status - Http Status Code
 * @returns { "msg": string } message error
 * @returns { [{"name": STRING, "phone": INTEGER, "email": STRING, "message": STRING, "createdAt": DATE }] }
 */
router.get('/contacts', BackofficeController.getContacts);

module.exports = router;
