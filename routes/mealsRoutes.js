const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

router.get('/trips/:tripId/meals/new', mealsCtrl.newMeal);
router.post('/trips/:tripId/meals', mealsCtrl.create);
router.get('/trips/:tripId/meals/edit', mealsCtrl.getEditForm);

module.exports = router;