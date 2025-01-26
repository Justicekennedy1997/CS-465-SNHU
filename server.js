const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts') }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes
const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
