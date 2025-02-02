const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

// Initialize Express
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travlr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected successfully');
}).catch(err => {
    console.error('❌ MongoDB connection error:', err);
});

// Set up Handlebars
app.engine('hbs', hbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts') 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import API routes
const travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_server/routes/api');  // New API route for trips
app.use('/', travelRouter);
app.use('/api', apiRouter);  // Mount API route

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
