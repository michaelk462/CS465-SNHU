const express  = require("express"); //Express App
const router = express.Router();     //Router Logic

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

// Define the route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList); //GET Method routes tripList

// GET method routes tripsFindByCode - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode);

module.exports = router;