const mongoose = require('mongoose');
 
// Define the schema for the contact form

const ContactFormSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true // This field is required

    },

    email: {

        type: String,

        required: true // This field is required

    },

    mobileNo: {

        type: String,

        required: true // This field is required

    },

    message: {

        type: String,

        required: true // This field is required

    }

}, { 

    timestamps: true, // Adds createdAt and updatedAt timestamps

    

},{collection: 'contactus' });
 
// Create the model from the schema

const ContactForm = mongoose.model('contactus', ContactFormSchema);
 
module.exports = ContactForm;
