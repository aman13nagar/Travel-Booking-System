const Train = require('../models/Train');

const createTrain = async (req, res) => {
    const { trainNumber, trainName, departureStation, arrivalStation, departureTime, arrivalTime, coaches } = req.body;

    try {
        const newTrain = new Train({
            trainNumber: trainNumber,
            trainName: trainName,
            departureStation: departureStation,
            arrivalStation: arrivalStation,
            departureTime: new Date(departureTime),
            arrivalTime: new Date(arrivalTime),
            coaches: coaches.map(coach => ({
                coachName: coach.coachName,
                coachType: coach.coachType,
                price: coach.price,
                boxes: coach.boxes.map(box => ({
                    boxNumber: box.boxNumber,
                    seats: box.seats.map(seat => ({
                        seatNumber: seat.seatNumber,
                        seatType: seat.seatType,
                    })),
                })),
            })),
        });
        await newTrain.save();
        console.log(newTrain.coaches[0].boxes[0].seats);
        return res.status(200).json({ message: 'Train created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create train' });
    }
};

module.exports = { createTrain };
