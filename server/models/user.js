const mongoos = require('mongoose');
const Schema = mongoos.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define our module
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

//todo: fix hashing
userSchema.pre('save', (next) => {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.passwors, salt, null, (err, hash) => {
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