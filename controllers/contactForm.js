const ContactForm = require('../models/contactForm');
 
exports.getContactForm = async (req, res) => {
  try {
      const contactForm = await ContactForm.find();
      console.log("Retrieved contact form:", contactForm); // Log retrieved data
      //res.status(201).send(await ContactForm.create(contact));
      // if (contactForm.length === 0) {
       //   console.log("Contact form not found");
         // return res.status(404).send({ message: "Contact form not found." });
      //}
      

      res.status(200).send(contactForm);
  } catch (error) {
      console.error("Error retrieving contact form:", error); // Log error
      res.status(500).send({ message: "Error retrieving contact form.", error: error.message });
  }
};

exports.createContactForm = async(req,res) => {
  try{
    let contact = req.body;
    const createdContact = await ContactForm.create(contact);
    res.status(200).send(createdContact);
  }
  catch(error){
    res.status(500).send({ message: "Error creating contact form"})
  }
}
