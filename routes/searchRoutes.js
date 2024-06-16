const express = require('express');
const router = express.Router();
const axios = require('axios');
// Controllers
const trainController = require('../controllers/searchcontrollers/trainSearchController');
const busController = require('../controllers/searchcontrollers/busSearchController');
const flightController = require('../controllers/searchcontrollers/flightSearchController');
const carController = require('../controllers/searchcontrollers/carSearchController');
const rapidoController = require('../controllers/searchcontrollers/rapidoSearchController');
const hotelController = require('../controllers/searchcontrollers/hotelSearchController');

// Routes
router.post('/search/train', trainController.searchTrains);
router.post('/search/bus', busController.searchBuses);
router.post('/search/flight', flightController.searchFlights);
router.post('/search/car', carController.searchCars);
router.post('/search/rapido', rapidoController.searchRapidos);
router.post('/search/hotel', hotelController.searchHotels);
router.get('/search/flight',flightController.getAllflights);
router.get('/search/train',trainController.getAlltrains);
router.get('/search/bus',busController.getAllbuses);
module.exports = router;
