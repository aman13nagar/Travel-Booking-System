const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('config');
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
const fetch=require("node-fetch");
const fs=require('fs');
// Connect to database
connectDB();

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: config.get('sessionSecret'),
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const flightRoutes = require('./routes/flightRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const rentalCarRoutes = require('./routes/rentalCarRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const trainRoutes=require('./routes/trainRoutes');
const busRoutes=require('./routes/busRoutes');
const rapidoRoutes=require('./routes/rapidoRoutes');
const searchRoutes=require('./routes/searchRoutes');
const locations=require('./utils/locations');
const stations=require('./utils/stations');
const busstations=require('./utils/busstations');
const hotellocations=require('./utils/hotelloactions');
const airports=require('./utils/airports');
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/flights', flightRoutes);
app.use('/hotels', hotelRoutes);
app.use('/rental-cars', rentalCarRoutes);
app.use('/reviews', reviewRoutes);
app.use('/trains',trainRoutes);
app.use('/buses',busRoutes);
app.use('/rapidos',rapidoRoutes);
app.use('/allsearch',searchRoutes);
// Home route
app.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});
app.get('/',async (req,res)=>{
        try {
          res.render('intro',{stations:stations,airports:airports,busstations:busstations,locations:locations,hotellocations:hotellocations});
        } catch (err) {
          console.error('Error parsing JSON data:', err);
        }
})
// Profile route (protected)
app.get('/profile', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.render('profile', { title: 'Profile', user });
  } else {
    res.redirect('/auth/login');
  }
});
app.get('/flight',(req,res)=>{
    res.render('flights/flightDetails',{flight});
})
app.get('/createFlight',(req,res)=>{
    res.render('admin/CreateFlight',{message:'',airports:airports});
})
app.get('/createHotel',(req,res)=>{
    res.render('admin/CreateHotel',{message:''});
})
app.get('/createCar',(req,res)=>{
    res.render('admin/CreateRentalCar',{message:''});
})
app.get('/createTrain',(req,res)=>{
    res.render('admin/CreateTrain',{message:''});
})
app.get('/createBus',(req,res)=>{
    res.render('admin/CreateBus',{message:''});
})
app.get('/createRapido',(req,res)=>{
    res.render('admin/CreateRapido',{message:''});
})
app.get('/bookingForm',(req,res)=>{
    const flight=req.query;
    console.log(flight);
    res.render('booking/bookingForm',{flight:flight});
})
const FlightBooking=require('./models/FlightBooking');
app.post('/api/book-flight',async(req,res)=>{
    try {
        const bookingDetails=req.body;
        const newBooking = new FlightBooking(bookingDetails);
        await newBooking.save();
        console.log('Booking successfully stored in MongoDB');
        res.json({ success: true, message: 'Booking successful!' });
    }catch (error) {
        console.error('Error storing booking in MongoDB:', error);
        res.status(500).json({ success: false, message: 'Booking failed. Please try again later.' });
    }
})
app.post('/flightbookingpage',async(req,res)=>{
    try{
        const flight=req.body.flight;
        console.log(flight);
        res.status(200).json({success:'success'});
    }catch(error){
        console.log(error);
    }
})
app.get('/trainbookingForm',(req,res)=>{
    res.render('booking/trainbookingForm');
})
app.post('/trainbookingpage',async(req,res)=>{
    try{
        const train=req.body.train;
        console.log(train);
        res.status(200).json({success:'success'});
    }catch(error){
        console.log(error);
    }
})
app.post('/bookTickets', (req, res) => {
    const bookingPayload = req.body;
    console.log("Received booking payload:", bookingPayload);

    // Mock processing of booking
    const isSuccess = processBooking(bookingPayload);

    if (isSuccess) {
        res.json({ success: true, message: "Tickets booked successfully!" });
    } else {
        res.json({ success: false, message: "Failed to book tickets. Please try again." });
    }
});

// Mock function to process booking
function processBooking(payload) {
    // This is where you would normally handle the booking logic, such as saving to a database
    // For this example, we'll just log the payload and return success
    console.log("Processing booking for:", payload);
    
    // Simulating booking logic
    const allSeatsAvailable = checkSeatAvailability(payload.seats);
    if (allSeatsAvailable) {
        // Logic to save booking to the database would go here
        return true; // Simulate a successful booking
    } else {
        return false; // Simulate a failed booking due to seat unavailability
    }
}

// Mock function to check seat availability
function checkSeatAvailability(seats) {
    // Normally, this would query a database to check if the seats are available
    // For this example, we'll assume all requested seats are available
    return true;
}

app.post('/auth/logout',(req,res)=>{
    const user=req.session.user;
    if(user){
        res.redirect('/');
        req.session.destroy();
    }
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
