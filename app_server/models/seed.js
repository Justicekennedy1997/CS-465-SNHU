const mongoose = require('mongoose');
const Trip = require('./travlr'); // Ensure travlr.js exists in the same directory
const trips = require('./trips.json'); // Ensure trips.json exists in the same directory

const seedDB = async () => {
    try {
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        if (collectionNames.includes('trips')) {
            await db.dropCollection('trips');
            console.log("🗑️ Existing 'trips' collection dropped.");
        }

        await Trip.insertMany(trips); // Insert new seed data
        console.log("✅ Database seeded successfully!");
    } catch (error) {
        console.error("❌ Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/travlr')
    .then(() => {
        console.log("✅ MongoDB connected successfully!");
        seedDB();
    })
    .catch(err => console.error("❌ MongoDB connection error:", err));
