const fs = require('fs'); // Import the file system module

// Controller for the homepage
const homePage = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
    });
};

// Controller for the travel page
const travelPage = (req, res) => {
    // Read the trips.json file and parse the data
    const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    res.render('travel', {
        title: 'Travel',
        trips: trips, // Pass the trips data to the Handlebars template
    });
};

// Export the controllers
module.exports = {
    homePage,
    travelPage,
};
