const express = require('express');
const router = express.Router();
const Trip = require('../models/trips'); // Import Trip Model

// GET all trips
router.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch trips' });
    }
});

module.exports = router;
