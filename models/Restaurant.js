// models/restaurant.js
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Unnamed Restaurant",
  },
  
  // Add more fields as needed
});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
module.exports = RestaurantModel;
