// seed/generateTable.js
const mongoose = require('mongoose');
const Table = require('../models/Table');

//Connect to MongoDB
const dbURI = process.env.MONGODB_URI || "mongodb+srv://mohammadmujahiddin01:mujju123@database.ui1abg3.mongodb.net/database";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to database"))
    .catch((err) => console.log(err));


    const seedTables = async () => {
      try {
    await Table.deleteMany({});
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database");
  
    // Rest of the code
  
    
    for (let i = 1; i < 3; i++) {
      const table = new Table({
        name: `Table ${i}`,
        capacity: 2,
        isAvailable: true
      })
      await table.save();
    }
    for (let i = 3; i < 6; i++) {
      const table = new Table({
      name: `Table ${i}`,
      capacity: 4,
      isAvailable: true
    })
    await table.save();
  }
  for (let i = 6; i < 10; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 6,
      isAvailable: true
    })
    await table.save();
  }
  console.log("Tables seeded successfully");

} catch (error) {
  console.error("Error connecting to the database:", error);
}finally {
  mongoose.connection.close();
}
};
seedTables();
setTimeout(() => {
  mongoose.connection.close();
}, 1000);


seedTables().then(() => {
  mongoose.connection.close();
})