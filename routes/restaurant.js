// routes/restaurant.js

const express = require('express');
const router = express.Router();

// Your restaurant data or database model
const restaurantsData = [
  { name: 'Restaurant A', /* other properties */ },
  { name: 'Restaurant B', /* other properties */ },
  // Add more restaurant data as needed
];

// Define a route to handle GET requests to /restaurants
router.get('/', (req, res) => {
  try {
    // Attempt to retrieve and return restaurant data
    res.json(restaurantsData);
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
