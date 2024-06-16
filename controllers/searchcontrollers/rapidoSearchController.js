const Rapido = require('../../models/Rapido');

const searchRapidos = async (req, res) => {
    try {
        const { pickup, dropoff, pickupDate, dropoffDate } = req.body;
        const rapidos = await Rapido.find({ pickup, dropoff, pickupDate, dropoffDate });
        res.json(rapidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports={searchRapidos}
