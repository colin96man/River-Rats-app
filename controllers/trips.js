const Trip = require('../models/tripModel');
const User = require('../models/userModel');
const Meal = require('../models/mealModel');

module.exports = {
    index,
    newTrip,
    create,
    show
}

function show(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        res.render('trips/show', {
            title: `${trip.location} Details`, trip
        });
    });
}

function create(req, res) {
    Trip.create(req.body, function(err, trip) {
        res.redirect('/trips');
    });
}

function newTrip(req, res) {
    res.render('trips/new', {
        title: 'New Float Trip'
    });
}

function index(req, res) {
    Trip.find({}, function(err, trips) {
        res.render('trips/index', {
            title: 'Float Trips', trips
        });
    });
}