const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);
router.get('/new', isLoggedIn, tripsCtrl.newTrip);
router.get('/:tripId', isLoggedIn, tripsCtrl.show);
router.post('/', isLoggedIn, tripsCtrl.create);
router.get('/:tripId/edit', isLoggedIn, tripsCtrl.getEditForm);
router.put('/:tripId', isLoggedIn, tripsCtrl.update);
router.delete('/:tripId', isLoggedIn, tripsCtrl.deleteTrip);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;