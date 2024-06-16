const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
//const { isAdmin } = require('../middleware/authMiddleware');
router.post('/create', trainController.createTrain);
module.exports = router;
