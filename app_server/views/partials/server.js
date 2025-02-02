const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// MongoDB Connection
const dbURI = 'mongodb://localhost:27017/travlr';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Set up Handlebars
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to pass dynamic year
app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
});

// Import routes
const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
