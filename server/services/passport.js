const passport = require("passport");
const user = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//Setup options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create a jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  console.log(payload);
  user.findById(payload.sub, function(error, user) {
    if (error) {
      return done(error, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  });
});

passport.use(jwtLogin);
