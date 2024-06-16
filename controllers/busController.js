const Bus = require('../models/Bus');

const createBus = async (req, res) => {
    const { busNumber, busName, departureStation, arrivalStation, departureTime, arrivalTime,type, price } = req.body;

    try {
        const bus = new Bus({
            busNumber,
            busName,
            departureStation,
            arrivalStation,
            departureTime,
            arrivalTime,
            price,
            Type:type
        });

        await bus.save();

        return res.status(200).json({message:'Bus Created Successfully'});
    } catch (error) {
        console.error(error);
        return res.status(200).json({error:'Faild to create the bus'});
    }
};

module.exports = { createBus };
