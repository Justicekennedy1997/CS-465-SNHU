const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel'); // Import the travel controller

// Route for the homepage
router.get('/', ctrlTravel.homePage);

// Route for the travel page
router.get('/travel', ctrlTravel.travelPage);

module.exports = router; // Export the router
