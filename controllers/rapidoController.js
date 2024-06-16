const Rapido = require('../models/Rapido');

// Controller to create a new Rapido ride
const createRapido = async (req, res) => {
    const { driverName, bikeModel, pricePerKm, description, availableFrom, availableTo } = req.body;

    try {
        // Create a new Rapido ride object
        const rapido = new Rapido({
            driverName,
            bikeModel,
            pricePerKm,
            description,
            availableFrom,
            availableTo
        });

        // Save the Rapido ride to the database
        await rapido.save();

        return res.render('admin/CreateRapido',{ message: {success:'Rapido ride created successfully'}, rapido });
    } catch (error) {
        console.error(error);
        return res.render('admin/CreateRapido',{ message: {error:'Failed to create Rapido ride' }});
    }
};

// Controller to get all Rapido rides
const getAllRapidos = async (req, res) => {
    try {
        // Retrieve all Rapido rides from the database
        const rapidos = await Rapido.find();

        return res.render('GetAllRapidos',{rapidos:rapidos});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch Rapido rides' });
    }
};

module.exports = { createRapido, getAllRapidos };
