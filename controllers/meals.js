const Meal = require('../models/mealModel');
const Trip = require('../models/tripModel');

module.exports = {
    newMeal,
    create
}

function newMeal(req, res) {
    res.render('meals/new', {
        title: 'New Meal',
        tripId: req.params.tripId
    });
}

function create(req, res) {
    req.body.cook = req.user;
    Trip.findById(req.params.tripId, function(err, trip) {
        Meal.create(req.body, function(err, meal) {
            trip.meals.push(meal);
            trip.save(function(err) {
                res.redirect(`/trips/${trip._id}`);
            });
        });
    });
}