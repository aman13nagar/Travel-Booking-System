const Car = require('../../models/RentalCar');

const searchCars = async (req, res) => {
    try {
        const { pickup, dropoff, pickupDate, dropoffDate } = req.body;
        const cars = await Car.find({ pickup, dropoff, pickupDate, dropoffDate });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports={searchCars};