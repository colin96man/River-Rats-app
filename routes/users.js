var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/google',
    passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);
router.get('/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/books',
    failureRedirect: '/'
  })
);
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
