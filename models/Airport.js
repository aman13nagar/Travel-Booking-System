const mongoose=require('mongoose');
const airportSchema=new mongoose.Schema({
    code:String,
    name:String,
    location:String
})
const Airport=mongoose.model('Airport',airportSchema);
module.exports=Airport;