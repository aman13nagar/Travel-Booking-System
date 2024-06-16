const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Route to create a new hotel
router.post('/create', hotelController.createHotel);
router.get('/', (req, res) => {
    res.render('booking/bookingForm');
});
// Route to get all hotels
router.get('/getAllHotels', hotelController.getAllHotels);

module.exports = router;
