const Bus = require('../../models/Bus');

const searchBuses = async (req, res) => {
    try {
        const { from, to, date,type } = req.body;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1); // Increment by 1 day to include the entire day
        const buses = await Bus.find({
            departureStation: from,
            arrivalStation: to,
            departureTime: { $gte: startDate, $lt: endDate }, // Departure time within the specified date range
            ...(type !== 'All Class' && { Type: type }) // Conditional class filter
        });
        res.json(buses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getAllbuses=async (req, res) => {
    const { date } = req.query;
    const buses=await Bus.find();
    // Simulate fetching flights based on the date
    const filteredBuses = buses.filter(bus => {
        const busDate = new Date(bus.departureTime).toISOString().split('T')[0];
        return busDate === date;
    });

    res.json(filteredBuses);
};
module.exports={searchBuses,getAllbuses};
