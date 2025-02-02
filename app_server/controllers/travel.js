const Trip = require('../models/travlr'); // Import the Mongoose model

const travelPage = async (req, res) => {
    try {
        const trips = await Trip.find(); // Fetch all trips from MongoDB
        console.log("Trips from DB:", trips); // Debugging step
        res.render('travel', {
            title: 'Travel',
            trips: trips, // Pass trips data to Handlebars template
        });
    } catch (error) {
        console.error("❌ Error fetching trips:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { travelPage };


