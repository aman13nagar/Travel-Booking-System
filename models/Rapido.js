const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rapidoSchema = new Schema({
    driverName: {
        type: String,
        required: true
    },
    bikeModel: {
        type: String,
        required: true
    },
    pricePerKm: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availableFrom: {
        type: Date,
        required: true
    },
    availableTo: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Rapido = mongoose.model('Rapido', rapidoSchema);

module.exports = Rapido;
