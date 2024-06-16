const mongoose = require('mongoose');

// Define the seatSchema
const seatSchema = new mongoose.Schema({
    seatNumber: {
        type: String,
        required: true,
    },
    seatType: {
        type: String,
        enum: ['Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper'],
        required: true,
    }
});

// Define the boxSchema to include seatSchema
const boxSchema = new mongoose.Schema({
    boxNumber: {
        type: Number,
        required: true,
    },
    seats: {
        type: [seatSchema],
        required: true,
    },
});

// Update the coachSchema to include boxSchema
const coachSchema = new mongoose.Schema({
    coachName: {
        type: String,
        required: true,
    },
    coachType: {
        type: String,
        enum: ['All Class', 'Sleeper Class', 'Third AC', 'Second AC', 'First AC'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    boxes: {
        type: [boxSchema],
        required: true,
    },
});
const trainSchema = new mongoose.Schema({
    train_number: { type: String, required: true },
    train_name: String,
    run_days: [String],
    train_src: String,
    train_dstn: String,
    from_std: String,
    from_sta: String,
    local_train_from_sta: Number,
    to_sta: String,
    to_std: String,
    from_day: Number,
    to_day: Number,
    d_day: Number,
    from: String,
    to: String,
    from_station_name: String,
    halt_stn: Number,
    distance: Number,
    to_station_name: String,
    duration: String,
    special_train: Boolean,
    train_type: String,
    score: Number,
    score_train_type: Number,
    score_booking_requency: Number,
    frequency_perc: Number,
    from_distance_text: String,
    to_distance_text: String,
    duration_rating: Number,
    score_duration: Number,
    is_monsoon_timing_applicable: Boolean,
    score_std: Number,
    score_user_preferred: Number,
    train_date: { type: String, required: true },
    class_type: [String],
    // coaches: {
    //     type: [coachSchema],
    //     required: true,
    // },
  });
  
  trainSchema.index({ train_number: 1, train_date: 1 }, { unique: true });
// Define the trainSchema with the updated coachSchema
// const trainSchema = new mongoose.Schema({
//     trainNumber: {
//         type: String,
//         required: true,
//     },
//     trainName: {
//         type: String,
//         required: true,
//     },
//     departureStation: {
//         type: String,
//         required: true,
//     },
//     arrivalStation: {
//         type: String,
//         required: true,
//     },
//     departureTime: {
//         type: Date,
//         required: true,
//     },
//     arrivalTime: {
//         type: Date,
//         required: true,
//     },
//     coaches: {
//         type: [coachSchema],
//         required: true,
//     },
// });

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;

