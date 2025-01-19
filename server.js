const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
