const mongoos = require('mongoose');
const Schema = mongoos.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define our module
let userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

userSchema.pre('save', function (next) {
    let user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err) };
            user.password = hash;
            console.log(hash);
            next();
        })
    });
});

//Create the model class
const ModelClass = mongoos.model('user', userSchema);

//Export the model
module.exports = ModelClass;