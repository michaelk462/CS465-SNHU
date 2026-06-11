const express  = require("express"); //Express App
const router = express.Router();     //Router Logic

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

// Define the route for our trips endpoint
router.get('/trips', tripsController.tripsList) //GET Method routes tripList
router.post('/trips', tripsController.tripsAddTrip); //POST Method adds a trip

// GET method routes tripsFindByCode - requires parameter
router.get('/trips/:tripCode', tripsController.tripsFindByCode);
router.put('/trips/:tripCode', tripsController.tripsUpdateTrip);

module.exports = router;