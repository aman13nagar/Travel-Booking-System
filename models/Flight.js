const mongoose = require('mongoose');
const seatSchema = new mongoose.Schema({
  seatNumber: {
      type: Number,
      required: true,
  },
  seatType: {
      type: String,
      enum: ['All', 'Economy','Business','First Class'],
      required: true,
  },
  price: {
      type: Number,
      required: true,
  },
});
// const FlightSchema = new mongoose.Schema({
//   airline: {
//     type: String,
//     required: true
//   },
//   flightNumber: {
//     type: String,
//     required: true
//   },
//   departureAirport: {
//     type: String,
//     required: true
//   },
//   arrivalAirport: {
//     type: String,
//     required: true
//   },
//   departureDate: {
//     type: Date,
//     required: true
//   },
//   arrivalDate: {
//     type: Date,
//     required: true
//   },
//   seats:{
//     type:[seatSchema],
//     require:true
//   }
// });

// Define the FlightSegment schema
const FlightSegmentSchema = new mongoose.Schema({
    segmentId: String,
    midsrcairport_name: String,
    midsrcairport_code: String,
    middstairport_name: String,
    middstairport_code: String,
    midsrcairport_city: String,
    middstairport_city: String,
    middeparture: Date,
    midarrival: Date,
    flightmarketing_name: String,
    flightmarketing_id: String,
    flightoperating_name: String,
    flightoperating_id: String,
    logoUrl: String,
    flightNumber:String,
});

// Define the Flight schema
const FlightSchema = new mongoose.Schema({
    itineraryId:String,
    token:String,
    srcairport_name: String,
    dstairport_name: String,
    srcairport_code: String,
    srcairport_city: String,
    dstairport_city: String,
    dstairport_code: String,
    segments: [FlightSegmentSchema],
    departureDate:String,
    arrivalDate:String,
    price:String,
    isChangeAllowed:Boolean,
    isPartiallyChangeable:Boolean,
    isCancellationAllowed:Boolean,
    isPartiallyRefundable:Boolean,
});

// Create models
const FlightSegment = mongoose.model('FlightSegment', FlightSegmentSchema);
const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight

