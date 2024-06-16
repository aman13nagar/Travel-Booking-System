const Train = require('../../models/Train');
// routes/api.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const fetchTrainData = async (codefrom,codeto,travelDate) => {
    console.log(codefrom,codeto)
    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        params: {
          fromStationCode: codefrom,
          toStationCode: codeto,
          dateOfJourney: travelDate
        },
        headers: {
          'X-RapidAPI-Key': '8f117cb03dmsh43aef4f0739ad2ap19f484jsnc61e44478548',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };
  try {
    const response = await axios.request(options);
   // console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching train data:', error);
    throw error;
  }
};
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
module.exports = router;
const searchTrains=async (req, res) => {
    const { from, to, date, trainClass } = req.body;
    let startDate = new Date(date);
    let endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1); // Increment by 1 day to include the entire day
    const codefrom=from.split(',')[0];
    const codeto=to.split(',')[0];
    const travelDate = startDate.toISOString().split('T')[0];
    console.log(startDate,travelDate);
    console.log(codefrom,codeto);
    const formattedtravelDate=formatDate(travelDate);
    try {
      // Check if data exists in the database
      console.log(travelDate);
      const query={
        from:codefrom,
        to:codeto,
        train_date:formattedtravelDate
      }
      if (trainClass) {
        query.class_type = trainClass;
      }
      console.log(await Train.countDocuments())
      const trains = await Train.find(query);
      console.log(trains);
      if (trains.length > 0) {
        console.log('data persent in database');
        res.json(trains);
      } else {
        console.log('data is not persent in database need to be fetched')
        const trainData=await fetchTrainData(codefrom,codeto,travelDate);
        for (const train of trainData.data) {
          await Train.updateOne(
            { train_number: train.train_number, train_date: train.train_date },
            { $set: train },
            { upsert: true }
          );
        }
        const fetchedtrains=await Train.find(query);
        const filteredTrainData = trainClass
          ? fetchedtrains.filter(train => train.class_type.includes(trainClass))
          : fetchedtrains;
  
        res.json(filteredTrainData);
      }
    } catch (error) {
      console.error('Error searching for trains:', error);
      res.status(500).send('Error searching for trains');
    }
};
  
// const searchTrains = async (req, res) => {
//     try {
//         const { from, to, date, trainClass } = req.body;
//         // Get the start and end of the specified date
//         let startDate = new Date(date);
//         let endDate = new Date(date);
//         endDate.setDate(endDate.getDate() + 1); // Increment by 1 day to include the entire day
//         const codefrom=from.split(',')[0];
//         const codeto=to.split(',')[0];
//         const travelDate = startDate.toISOString().split('T')[0];
//         console.log(startDate,travelDate);
//         console.log(codefrom,codeto);
//         const trainData=await fetchTrainData(codefrom,codeto,travelDate);
//        // console.log(trainData.data);
//         //Find trains departing within the specified date range
//         // trainData.data.forEach (async data=>{
//         //     console.log(data);
//         //     const newTrain=new Train({
//         //         trainNumber:data.train_number,
//         //         trainName:data.train_name,
//         //         departureStation:data.train_src,
//         //         arrivalStation:data.train_dstn,
//         //         departureTime:startDate,
//         //         arrivalTime:endDate
//         //     })
//         //     await newTrain.save();
//         // })
//         // const trains = await Train.find({
//         //     departureStation: codefrom,
//         //     arrivalStation: codeto,
//         //     departureTime: { $gte: startDate }, // Departure time within the specified date range
//         //     //...(trainClass !== 'All Class' && { coachType: trainClass }) // Conditional class filter
//         // });
//         console.log(trainData.data);
//         res.json(trainData.data);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
const getAlltrains=async (req, res) => {
    const { date } = req.query;
    const trains=await Train.find();
    // Simulate fetching flights based on the date
    const filteredTrains= trains.filter(train => {
        const trainDate = new Date(train.departureTime).toISOString().split('T')[0];
        return trainDate === date;
    });

    res.json(filteredTrains);
};
module.exports = { searchTrains,getAlltrains };
