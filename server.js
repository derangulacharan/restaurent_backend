const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI || "mongodb+srv://mohammadmujahiddin01:mujju123@database.ui1abg3.mongodb.net/database";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to the database"))
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// CORS Config
app.use(cors());

// Routes
app.use("/user", require("./routes/user"));
app.use("/reservation", require("./routes/reservation"));
app.use('/restaurants', require('./routes/restaurant'));

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("API is running..");
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("API is running..");
});
