const Trip = require('../models/tripModel');
const Meal = require('../models/mealModel');
const moment = require('moment');

module.exports = {
    index,
    newTrip,
    create,
    show,
    getEditForm,
    update,
    deleteTrip
}

function deleteTrip(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        Meal.deleteMany({_id: {$in: trip.meals}}, function(err) {
            trip.remove(function(err) {
                console.log(err);
                res.redirect('/trips');
            });
        });
    });
}

function update(req, res) {
    Trip.findByIdAndUpdate(req.params.tripId, req.body, {new: true}, function(err, trip) {
        res.redirect(`/trips/${trip._id}`);
    });
}

function getEditForm(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        res.render('trips/edit', {
            title: `Edit ${trip.location}`, trip
        });
    });
}

function show(req, res) {
    Trip.findById(req.params.tripId)
    .populate('attendees')
    .populate('createdBy')
    .populate({
        path: 'meals',
        populate: {
            path: 'cook',
            model: 'User'
        }
    })
    .exec(function(err, trip) {
        trip.date = moment(trip.date).format("MMM Do YY");
        res.render('trips/show', {
            title: `${trip.location} Details`, trip, user: req.user
        });
    });
}

function create(req, res) {
    req.body.createdBy = req.user;
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