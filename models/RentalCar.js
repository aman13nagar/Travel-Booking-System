const mongoose = require('mongoose');

const RentalCarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  transmissionType: {
    type: String,
    enum: ['manual', 'automatic'],
    required: true
  },
  seats: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('RentalCar', RentalCarSchema);
