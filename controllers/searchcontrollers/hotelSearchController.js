const Hotel = require('../../models/Hotel');

const searchHotels = async (req, res) => {
    try {
        const { location, checkInDate, checkOutDate } = req.body;
        const hotels = await Hotel.find({ location, checkInDate, checkOutDate });
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports={searchHotels};