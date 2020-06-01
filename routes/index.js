var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/trips');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/trips',
    failureRedirect: '/trips'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/trips');
});

module.exports = router;