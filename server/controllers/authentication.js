const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user) {
  return jwt.encode({ sub: user.id }, config.secret);
};

exports.signup = function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).send({
      error: "You must provide email and password"
    });
  }

  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      res.status(422).send({
        error: "Email is in use"
      });
    }
    const user = new User({
      email: email,
      password: password
    });
    user.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send({
        success: true
      });
    });

  });
};
