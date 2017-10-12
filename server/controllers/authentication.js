const User = require("../models/user");

exports.signup = function(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(402).send({
      error: "Not valid action"
    });
  }

  User.findOne({ email: email }, function(err, existingUser) {
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
    user.save( function( err ) {
        if (err) {
            return next(err);
        }
        res.json(user);
    } );

  });
};
