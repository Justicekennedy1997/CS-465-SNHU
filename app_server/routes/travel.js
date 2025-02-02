const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel'); // Import controllers

router.get('/', travelController.travelPage); // Fix route to use `travelPage`

module.exports = router;
