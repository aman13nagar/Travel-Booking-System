const express = require('express');
const router = express.Router();
const rentalCarController = require('../controllers/rentalCarController');

// Route to create a new rental car
router.post('/create', rentalCarController.createRentalCar);
router.get('/', (req, res) => {
    res.render('booking/bookingForm');
});
// Route to get all rental cars
router.get('/getAllRentalCars', rentalCarController.getAllRentalCars);

module.exports = router;
