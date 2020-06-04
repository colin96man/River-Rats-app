const express = require('express');
const router = express.Router();
const attendeesCtrl = require('../controllers/attendees');

router.post('/trips/:tripId/attendees', isLoggedIn,attendeesCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;