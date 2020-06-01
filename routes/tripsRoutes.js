var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);
router.get('/new', tripsCtrl.newTrip);
router.get('/:tripId', tripsCtrl.show);
router.post('/', tripsCtrl.create);

module.exports = router;