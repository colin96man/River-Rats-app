const Trip = require('../models/tripModel');
const Meal = require('../models/mealModel');

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
    Trip.findByIdAndRemove(req.params.tripId, function(err) {
        Meal.deleteMany({trip: req.params.tripId}, function(err) {
            res.redirect('/trips');
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
        const formattedDate = convertDate(trip.date);
        trip.date = formattedDate;
        res.render('trips/show', {
            title: `${trip.location} Details`, trip, user: req.user
        });
    });
}

function create(req, res) {
    req.body.createdBy = req.user;
    Trip.create(req.body, function(err, trip) {
        console.log(trip);
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

function convertDate(isoDate) {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate()+1;
    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return `${month}/${dt}/${year}`;
}