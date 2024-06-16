const express = require('express');
const router = express.Router();
const { createRapido, getAllRapidos } = require('../controllers/rapidoController');
router.post('/create', createRapido);
router.get('/GetAllRapidos', getAllRapidos);
module.exports = router;
