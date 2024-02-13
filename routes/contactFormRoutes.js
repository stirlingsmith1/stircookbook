const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactForm');
 
// POST request for creating a contact form submission
router.post('/', contactFormController.createContactForm);
router.get('/', contactFormController.getContactForm); 

module.exports = router;