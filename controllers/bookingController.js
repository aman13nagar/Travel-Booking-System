const Booking = require('../models/Booking');

// Controller to create a new booking
const createBooking = async (req, res) => {
    const { userId, destination, checkIn, checkOut, numGuests, bookingType, ...details } = req.body;

    try {
        const booking = new Booking({
            user: userId,
            type: bookingType,
            details: {
                destination,
                checkIn,
                checkOut,
                numGuests,
                ...details
            }
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create booking' });
    }
};

// Controller to get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user');
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch bookings' });
    }
};

module.exports = { createBooking, getAllBookings };

