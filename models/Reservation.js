const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  phoneNumber: String,
  firstName: String,
  lastName: String,
  creditCard: {
    cardNumber: String,
    expDate: String,
    cvv: String
  }
  // Add other fields as needed
});

const ReservationModel = mongoose.model("Reservation", reservationSchema);

module.exports = { model: ReservationModel };
