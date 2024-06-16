const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busNumber: {
        type: String,
        required: true,
    },
    busName: {
        type: String,
        required: true,
    },
    departureStation: {
        type: String,
        required: true,
    },
    arrivalStation: {
        type: String,
        required: true,
    },
    departureTime: {
        type: Date,
        required: true,
    },
    arrivalTime: {
        type: Date,
        required: true,
    },
    Type:{
        type:[String],
        enum:['All Class','AC','Non-AC'],
        default:'AC',
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
