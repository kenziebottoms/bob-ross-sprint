'use strict';
const passport = require('passport');

module.exports.register = (req, res, next) => {
  // if (req.body.password === req.body.confirmation) { // move to client validation

  // first argument is name of the passport strategy we created in passport-strat.js
  passport.authenticate('local-signup', (err, user, msgObj) => {
    // console.log('Where are we? session.js', user);

    if (err) return next(err);

    if (!user) {
      console.log('Error registering', msgObj.message);
      res.status(409); // Conflict. This code is debatable
      res.json({ message: msgObj.message });
    }

    // Go ahead and login the new user once they are signed up
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      console.log('authenticated!', user);
      let currentUser = { username: user.username, id: user.id };
      res.status(200).json(currentUser);
    });
  })(req, res, next);
};

module.exports.login = (req, res, next) => {
  passport.authenticate('local-signin', (err, user, msgObj) => {
    // If login fails, the error is sent back by the passport strategy as { message: 'some msg'}
    console.log('error msg?', msgObj);
    if (err) {
      return next(err);
    }
    if (!user) {
      // (Unauthorized status code
      res.status(401);
      res.json({ message: msgObj.message });
    }

    req.logIn(user, err => {
      if (err) return next(err);
      res.status(200).json({ username: user.username, id: user.id });
    });
  })(req, res, next);
};

// logging out
module.exports.logout = (req, res, next) => {
  req.session.destroy(function(err) {
    if (err) return next(err);
    res.status(200).end();
  });
};