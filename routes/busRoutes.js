const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');
//const { isAdmin } = require('../middleware/authMiddleware');

// Route to create a new bus (accessible only by admin)
router.post('/create', busController.createBus);

module.exports = router;
