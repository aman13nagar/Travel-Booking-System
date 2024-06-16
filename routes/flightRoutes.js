const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Route to create a new flight
router.post('/createFlight', flightController.createFlight);
router.get('/', (req, res) => {
    res.render('booking/bookingForm');
});
// Route to get all flights
router.get('/getAllFlights', flightController.getAllFlights);

module.exports = router;
