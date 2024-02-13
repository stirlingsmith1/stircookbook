const express = require('express')
const mongoose = require('mongoose')
const contactFormRoutes = require('./routes/contactFormRoutes');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Use the contact form routes
app.use('/contactForm', contactFormRoutes);


mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5500; // Use the PORT environment variable
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });