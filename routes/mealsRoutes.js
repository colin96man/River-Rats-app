const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

router.get('/trips/:tripId/meals/new', isLoggedIn, mealsCtrl.newMeal);
router.post('/trips/:tripId/meals', isLoggedIn, mealsCtrl.create);
router.delete('/trips/:tripId/meals/:mealId', isLoggedIn, mealsCtrl.deleteMeal);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;