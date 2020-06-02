const Trip = require('../models/tripModel');
const User = require('../models/userModel');

module.exports = {
    create
}

function create(req, res) {
    Trip.findById(req.params.tripId, function(err, trip) {
        trip.attendees.push(req.user);
        trip.save(function(err) {
            res.redirect(`/trips/${trip._id}`);
        });
    });
}