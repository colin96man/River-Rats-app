const express = require('express');
const router = express.Router();
const attendeesCtrl = require('../controllers/attendees');

router.post('/trips/:id/attendees', attendeesCtrl.create);

module.exports = router;