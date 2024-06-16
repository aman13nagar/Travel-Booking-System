const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  countryCode: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  gstNumber: { type: String },
  travelers: [
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      gender: { type: String, required: true },
      countryCode: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      email: { type: String, required: true },
      documentType: { type: String, required: true },
      documentId: { type: String, required: true }
    }
  ]
});

const FlightBooking= mongoose.model('FlightBooking', bookingSchema);
module.exports=FlightBooking;
