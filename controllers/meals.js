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
    Meal.create({...req.body, trip: req.params.tripId}, function(err, meal) {
        meal.save(function(err) {
            res.redirect(`/trips/${req.params.tripId}`);
        });
    });
}