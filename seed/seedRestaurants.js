const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohammadmujahiddin01:mujju123@database.ui1abg3.mongodb.net/database', { useNewUrlParser: true, useUnifiedTopology: true });
require('dotenv').config();

const Restaurant = require('../models/Restaurant'); // Adjust the path as needed

const restaurantsData = [
  { name: "Restaurant A" },
  { name: "Restaurant B" },
  // Add more restaurant data as needed
];

async function seedRestaurants() {
  try {
    await Restaurant.deleteMany();
    await Restaurant.insertMany(restaurantsData);
    console.log("Restaurants seeded successfully");
  } catch (error) {
    console.error("Error seeding restaurants:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedRestaurants();
