const Flight = require('../../models/Flight');
const axios = require('axios');
const fetchflightDetails = async (src, dst, date) => {
    const options = {
        method: 'GET',
        url: 'https://sky-scanner3.p.rapidapi.com/flights/search-one-way',
        params: {
            fromEntityId: src,
            toEntityId: dst,
            departDate: date,
            currency: 'INR'
        },
        headers: {
            'X-RapidAPI-Key': 'fd8d3651dcmsh446d791a5b3d67dp161e3cjsn1b8dc8487265',
            'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
const searchFlights = async (req, res) => {
    try {
        const { from, to, date, class: flightClass } = req.body;
        const startDate = new Date(date);
        const codefrom = from.split(',')[0];
        const codeto = to.split(',')[0];
        console.log(codefrom,codeto);
        const travelDate = startDate.toISOString().split('T')[0];
        const existingFlights = await Flight.find({
            srcairport_code: codefrom,
            dstairport_code: codeto,
            departureDate: travelDate
        });

        if (existingFlights.length > 0) {
            console.log('flight is persent in database');
            return res.json(existingFlights);
        } else {
            let flights = [];
            const flightDetails = await fetchflightDetails(codefrom, codeto, travelDate);
            for (const itinerary of flightDetails.data.itineraries) {
                for (const leg of itinerary.legs) {
                    const flight = new Flight({
                        itineraryId:itinerary.id,
                        token:flightDetails.data.token,
                        srcairport_name: leg.origin.name,
                        dstairport_name: leg.destination.name,
                        srcairport_code: leg.origin.displayCode,
                        srcairport_city: leg.origin.city,
                        dstairport_city: leg.destination.city,
                        dstairport_code: leg.destination.displayCode,
                        price: itinerary.price.formatted,
                        departureDate:travelDate,
                    });
                    await flight.save();
                    flights.push(flight);
                }
            }
            return res.json(flights);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getAllflights = async (req, res) => {
    const { date } = req.query;
    const flights = await Flight.find();
    // Simulate fetching flights based on the date
    const filteredFlights = flights.filter(flight => {
        const flightDate = new Date(flight.departureDate).toISOString().split('T')[0];
        return flightDate === date;
    });

    res.json(filteredFlights);
};
module.exports = { searchFlights, getAllflights }
