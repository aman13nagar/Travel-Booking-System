const Flight = require('../models/Flight');

// Controller to create a new flight
const createFlight = async (req, res) => {
    const { airline, flightNumber, departureAirport, arrivalAirport, departureDate, arrivalDate, seats } = req.body;

    try {
        // Create a new flight object
        const flight = new Flight({
            airline,
            flightNumber,
            departureAirport,
            arrivalAirport,
            departureDate,
            arrivalDate,
            seats: seats.map(seat => ({
                seatNumber: seat.seatNumber,
                seatType: seat.seatType,
                price: seat.price,
            })),
        });
        // Save the flight to the database
        await flight.save();
        return res.status(200).json({ message: 'Train created successfully'});
    } catch (error) {
        console.error(error);
        return res.status(200).json({error:'Failed to create train'});
    }
};

// Controller to get all flights
const getAllFlights = async (req, res) => {
    try {
        // Retrieve all flights from the database
        const flights = await Flight.find();
        res.render('admin/GetAllFlights',{flights:flights});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch flights' });
    }
};

module.exports = { createFlight, getAllFlights };
