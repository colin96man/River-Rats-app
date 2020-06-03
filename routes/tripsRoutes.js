const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);
router.get('/new', tripsCtrl.newTrip);
router.get('/:tripId', tripsCtrl.show);
router.post('/', tripsCtrl.create);
router.get('/:tripId/edit', tripsCtrl.getEditForm);

module.exports = router;