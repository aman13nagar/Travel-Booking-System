const Hotel = require('../models/Hotel');

// Controller to create a new hotel
const createHotel = async (req, res) => {
    const { name, location, pricePerNight, description, amenities, rating } = req.body;

    try {
        // Create a new hotel object
        const hotel = new Hotel({
            name,
            location,
            pricePerNight,
            description,
            amenities,
            rating
        });

        // Save the hotel to the database
        await hotel.save();

        return res.render('admin/CreateHotel',{ message: {success:'Hotel created successfully'}, hotel });
    } catch (error) {
        console.error(error);
        return res.render('admin/CreateHotel',{ message: {error:'Failed to create hotel' }});
    }
};

// Controller to get all hotels
const getAllHotels = async (req, res) => {
    try {
        // Retrieve all hotels from the database
        const hotels = await Hotel.find();

        res.render('admin/GetAllHotels')
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch hotels' });
    }
};

module.exports = { createHotel, getAllHotels };
