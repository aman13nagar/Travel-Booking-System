const RentalCar = require('../models/RentalCar');

// Controller to create a new rental car
const createRentalCar = async (req, res) => {
    const { brand, model, year, pricePerDay, description, transmissionType, seats } = req.body;

    try {
        // Create a new rental car object
        const rentalCar = new RentalCar({
            brand,
            model,
            year,
            pricePerDay,
            description,
            transmissionType,
            seats
        });

        // Save the rental car to the database
        await rentalCar.save();

        return res.render('admin/CreateRentalCar',{ message: {success:'Rental car created successfully'}, rentalCar });
    } catch (error) {
        console.error(error);
        return res.render('admin/CreateRentalCar',{ message:{error: 'Failed to create rental car' }});
    }
};

// Controller to get all rental cars
const getAllRentalCars = async (req, res) => {
    try {
        // Retrieve all rental cars from the database
        const rentalCars = await RentalCar.find();

        res.render('admin/GetAllRentalCars');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch rental cars' });
    }
};

module.exports = { createRentalCar, getAllRentalCars };
