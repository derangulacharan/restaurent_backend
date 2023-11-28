const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const cors = require("cors")
const PORT = process.env.PORT || 8000;

//Connect to MongoDB
const dbURI = process.env.MONGODB_URI || "mongodb+srv://mohammadmujahiddin01:mujju123@database.ui1abg3.mongodb.net/database";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to database"))
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });


// CORS Config
app.use(cors());

//Routes
app.use("/user", require("./routes/user"))
app.use("/reservation", require("./routes/reservation"))
app.use('/restaurants', require('./routes/restaurant'));
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
  });
  app.get("/",(req,res)=> {
    res.setHeader("Access-Control-Alolow-Credentials","true")
    res.send("API is running..");
  });
  